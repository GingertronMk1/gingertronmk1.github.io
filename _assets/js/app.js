/**
 * Vue scaffolding
 */

import Vue from 'vue';
import seasonGen from './vue_components/SeasonGen.vue';
import textGen from './vue_components/TextGen.vue';
import counter from './vue_components/Counter.vue';
import permissions from './vue_components/Permissions.vue';

new Vue({
  el: '#app',
  components: {
    seasonGen,
    textGen,
    counter,
    permissions,
  },
});

/**
 * Nav menu stuff
 */

const toggle = document.querySelector('#nav-toggle');
const navList = document.querySelectorAll('.navbar__list')[0];

toggle.onclick = function() {
  toggle.classList.toggle('active');
  navList.classList.toggle('active');
};
