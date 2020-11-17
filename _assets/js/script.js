import Vue from 'vue';
import season_gen from './vue_components/SeasonGen.vue';
import text_gen from './vue_components/TextGen.vue';

const app = new Vue({
  el: '#app',
  components: {
    season_gen,
    text_gen
  },
});