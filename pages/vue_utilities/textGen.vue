<template>
  <div id="app" class="risky-texts__wrapper">
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
        v-model="input_text"
        rows="7"
        :class="input_class"
      />
      <button class="p-2" @click="toggleFloat()">Toggle Floating Editor</button>
    </div>
    <div id="all-texts-div" class="risky-texts__display">
      <div
        v-for="(text, index) in texts"
        :key="index"
        :class="text.messageClasses"
      >
        <div :class="text.textClasses" v-text="text.message" />
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
      input_class: "",
    };
  },
  computed: {
    texts() {
      const regex = /(.+?)(: *?)([\s\S]+)/;
      const texts = this.input_text.split("\n\n");
      // console.log(texts);
      let lastPerson = "";

      const allTexts = [];

      texts.forEach(function (text) {
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
        const textClasses = ["text"];
        const messageClasses = ["message"];

        if (lastPerson !== person) {
          textClasses.push("text--chain-top");
          messageClasses.push("message--chain-top");
        }

        switch (person.toLowerCase()) {
          case "me":
            textClasses.push("text--me");
            messageClasses.push("message--me");
            break;
          case "them":
            textClasses.push("text--them");
            messageClasses.push("message--them");
            break;
          case "time":
            textClasses.push("text--time");
            messageClasses.push("message--time");
            break;
          default:
            break;
        }

        allTexts.push({
          textClasses,
          messageClasses,
          message,
        });

        lastPerson = person;
      });

      return allTexts;
    },
  },
  mounted() {
    this.input_text = this.input_text.trim();
  },
  methods: {
    toggleFloat() {
      if (this.input_class === null) {
        this.input_class = "floating";
      } else {
        this.input_class = null;
      }
    },
  },
};
</script>

<style lang="scss">
.risky-texts {
  @include flex(column, $align: center);
  width: 100%;

  $me-colour: #0088d2;
  $them-colour: #a0a0a0;

  &__wrapper {
    @include flex(column, $align: center);
    margin: 1.6rem auto;
    max-width: 768px;
  }

  &__input {
    @include flex(column);
    width: 80%;
    padding: 1.6rem 0;
    border-bottom: 2px solid $grey-0;

    textarea {
      border: 2px solid black;
      border-radius: 0.8rem;
      margin: 1.6rem auto;
      padding: 0.8rem;
      width: 100%;
      resize: vertical;

      &.floating {
        position: fixed;
        top: 0;
        left: 0;
        width: 60%;
        margin: 1rem;
        box-shadow: 0.1rem 0.1rem 0.3rem;
      }
    }

    button {
      background-color: $me-colour;
      margin: auto;
      max-width: 640px;
      color: white;
      padding: 1.6rem;
      border-radius: 0.8rem;
      border: 2px solid $me-colour;
    }
  }

  &__display {
    $text-radius: 1.6rem;
    width: 100%;
    max-width: 768px;
    padding: 1.6rem 0;

    .message {
      display: flex;
      margin-top: 0.3rem;
      font-size: 1.6rem;

      &--me {
        flex-direction: row-reverse;
      }

      &--time {
        justify-content: center;
      }

      &--chain-top {
        margin-top: 0.8rem;
      }
    }

    .text {
      padding: 0.8rem 1.6rem;
      color: white;
      line-height: 2rem;
      white-space: pre-line;

      &--me,
      &--them {
        max-width: 70%;
      }

      &--me {
        background-color: $me-colour;
        border-top-left-radius: $text-radius;
        border-bottom-left-radius: $text-radius;

        &.text--chain-top {
          border-top-right-radius: $text-radius;
        }
      }

      &--them {
        background-color: $them-colour;
        border-top-right-radius: $text-radius;
        border-bottom-right-radius: $text-radius;

        &.text--chain-top {
          border-top-left-radius: $text-radius;
        }
      }

      &--time {
        font-weight: 900;
        color: grey;
        min-width: 100%;
        text-align: center;
      }
    }
  }
}
</style>
