<template>
  <div>
    <FiftyFifty :lines="lines" />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      lines: [
        {
          image: "./dev.png",
          text: `I mostly do PHP/JavaScript/CSS but I'm very versatile, with experience in a wide number of languages from C to Haskell.
           I also have a lot of experience with broader development tools, such as
           Git, and I prefer to use \`vim\` for my text editing.
           It's what I've used since I started programming, and now I can't stop.`,
        },
        {
          image: "./theatre.png",
          text: `I also have a great deal of experience in sound and video design.


        In 2019 I was the "emergency sound designer" at the National Student Drama
        Festival, as well as having done sound and video work for a number of
        student productions at the Nottingham New Theatre`,
        },
      ],
    };
  },
};
</script>
