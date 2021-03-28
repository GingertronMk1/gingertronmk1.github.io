var toggle = document.querySelector("#nav-toggle");
var nav_list = document.querySelectorAll(".navbar__list")[0];

toggle.onclick = function() {
  toggle.classList.toggle("active");
  nav_list.classList.toggle("active");
}

import Vue from 'vue';
import season_gen from './vue_components/SeasonGen.vue';
import text_gen from './vue_components/TextGen.vue';
import counter from './vue_components/Counter.vue';
import permissions from './vue_components/Permissions.vue';

const app = new Vue({
  el: '#app',
  components: {
    season_gen,
    text_gen,
    counter,
    permissions
  },
});