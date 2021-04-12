<template>
  <div class="risky-texts__wrapper" id="app">
    <div class="risky-texts__input">
      <label for="input-form">
        Please enter your texts here!<br />
        They should be of the form <em>person: message</em>, where
        <em>person</em> is one of:
        <ul>
          <li><em>me</em>, blue messages from the right of the screen</li>
          <li><em>them</em>, grey messages from the left of the screen</li>
          <li><em>time</em>, grey text in the center of the screen,</li>
        </ul>
        and they should be separated by new lines (i.e. one empty line between
        texts).
      </label>
      <textarea
        id="input-form"
        rows="7"
        v-model="input_text"
        :class="input_class"
      ></textarea>
      <button class="p-2" v-on:click="toggleFloat()">
        Toggle Floating Editor
      </button>
    </div>
    <div class="risky-texts__display" id="all-texts-div">
      <div v-for="(text, index) in texts"
           v-bind:key="index"
           :class="text.messageClasses">
        <div :class="text.textClasses" v-text="text.message"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input_text: `
me: A blue message on the right of the screen

them: A grey message on the left of the screen

time: Grey bolded text at the center of the screen

And this text won't be shown at all!
`,
      input_class: '',
    };
  },
  methods: {
    toggleFloat() {
      if (this.input_class === null) {
        this.input_class = 'floating';
      } else {
        this.input_class = null;
      }
    },
  },
  computed: {
    texts: function() {
      const regex = /(.+?)(: *?)([\s\S]+)/;
      const texts = this.input_text.split('\n\n');
      // console.log(texts);
      let lastPerson = '';

      const allTexts = [];

      texts.forEach(function(text) {
        // console.log(text);
        const splitText = text.split(regex);
        let person = splitText[1];
        let message = splitText[3];
        if (!(person && message)) {
          return false;
        }
        // console.log(person, message);
        person = person.trim();
        message = message.trim();
        const textClasses = ['text'];
        const messageClasses = ['message'];

        if (lastPerson !== person) {
          textClasses.push('text--chain-top');
          messageClasses.push('message--chain-top');
        }

        switch (person.toLowerCase()) {
          case 'me':
            textClasses.push('text--me');
            messageClasses.push('message--me');
            break;
          case 'them':
            textClasses.push('text--them');
            messageClasses.push('message--them');
            break;
          case 'time':
            textClasses.push('text--time');
            messageClasses.push('message--time');
            break;
          default:
            break;
        }

        allTexts.push({
          textClasses: textClasses,
          messageClasses: messageClasses,
          message: message,
        });

        lastPerson = person;
      });

      return allTexts;
    },
  },
  mounted() {
    this.input_text = this.input_text.trim();
  },
};
</script>
