<template>
  <div class="nnt_things">
    <template v-if="Array.isArray(search) && search.length > 1">
      <div class="nnt_things__info">
        <label
          for="includeFreshersFringe"
          class="nnt_things__include-freshers-fringe"
        >
          Include Freshers' Fringe?
          <input
            type="checkbox"
            name="includeFreshersFringe"
            id="includeFreshersFringe"
            v-model="includeFreshersFringe"
          />
        </label>

        <span>
          {{ shows.length }} shows with {{ Object.keys(people).length }} actors
        </span>

        <button @click="randomise()" class="button">Randomise!</button>
      </div>
      <div class="nnt_things__inputs" v-if="Object.keys(people).length > 0">
        <div class="nnt_things__input">
          <input
            type="text"
            name="person1search"
            id="person1search"
            v-model="person1search"
          />
          <select name="person1" id="person1" v-model="person1">
            <option selected disabled :value="null"
              >Select the first person</option
            >
            <option
              v-for="(person, index) in peopleFiltered1"
              :value="person"
              :key="'person1' + index"
              v-text="person"
            />
          </select>
        </div>

        <div class="nnt_things__input">
          <input
            type="text"
            name="person2search"
            id="person2search"
            v-model="person2search"
          />
          <select name="person2" id="person2" v-model="person2">
            <option selected disabled :value="null"
              >Select the second person</option
            >
            <option
              v-for="(person, index) in peopleFiltered2"
              :value="person"
              :key="'person2' + index"
              v-text="person"
            />
          </select>
        </div>
      </div>

      <template v-if="person1 !== null && person2 !== null">
        <div v-if="result.distance !== 'Infinity'" class="nnt_things__results">
          <h3>Shortest Path Length: {{ result.distance }}</h3>
          <ul>
            <li
              v-for="(link, index) in result.showPath"
              :key="index"
              class="nnt_things__path-item"
            >
              {{ link.person1 }} was in the
              {{ link.show.year_title }} production of
              <i>{{ link.show.title }}</i> with
              {{ link.person2 }}
            </li>
          </ul>
        </div>
        <h3 v-else>
          Could not find a link between {{ person1 }} and {{ person2 }}
        </h3>
      </template>
    </template>
    <h3 class="nnt_things__loading" v-else>Loading...</h3>
  </div>
</template>
<script>
import {findShortestPath} from '../functions.js';
import axios from 'axios';

export default {
  props: {},
  data() {
    return {
      search: [],
      person1: null,
      person2: null,
      person1search: '',
      person2search: '',
      includeFreshersFringe: false,
    };
  },
  mounted() {
    console.log('mounted');
    axios({
      url: 'https://history.newtheatre.org.uk/feeds/search.json',
      headers: {
        Accept: 'application/json',
      },
    })
        .then(({data}) => {
          const search = data
              .filter(({type}) => type === 'show')
              .map((show) => {
                if (show.cast !== undefined) {
                  show.cast = show.cast
                      .split(',')
                      .map((name) => name.trim())
                      .filter((name) => name !== '');
                }
                if (show.crew !== undefined) {
                  show.crew = show.crew
                      .split(',')
                      .map((name) => name.trim())
                      .filter((name) => name !== '');
                }

                show.year_title = show.year_title.replace('&ndash;', '-');
                return show;
              })
              .filter(({cast}) => cast.length > 0);

          this.search = search;
        })
        .catch((error) => console.error(error));
  },
  methods: {
    randomise() {
      const people = this.peopleArray;
      const l = people.length;
      const p1 = people[Math.floor(Math.random() * l)];
      const p2 = people[Math.floor(Math.random() * l)];
      this.person1 = p1;
      this.person2 = p2;
    },
  },
  computed: {
    result() {
      return findShortestPath(
          this.people,
          this.person1,
          this.person2,
          this.shows,
      );
    },
    peopleArray() {
      return Object.keys(this.people);
    },
    peopleFiltered1() {
      return this.peopleArray.filter(
          (person) =>
            person.toLowerCase().includes(this.person1search.toLowerCase()) &&
          person !== this.person2,
      );
    },
    peopleFiltered2() {
      return this.peopleArray.filter(
          (person) =>
            person.toLowerCase().includes(this.person2search.toLowerCase()) &&
          person !== this.person1,
      );
    },
    people() {
      const people = {};
      this.shows.forEach(({cast}) => {
        cast.forEach((name) => {
          if (people[name] === undefined) {
            people[name] = {};
          }
          cast
              .filter((name2) => name2 !== name)
              .forEach((name2) => {
                if (people[name][name2] === undefined) {
                  people[name][name2] = 1;
                }
              });
        });
      });

      return Object.keys(people)
          .sort()
          .reduce((obj, key) => {
            obj[key] = people[key];
            return obj;
          }, {});
    },
    shows() {
      return this.search.filter(
          ({title}) =>
            this.includeFreshersFringe || title !== 'Freshers\' Fringe',
      );
    },
  },
};
</script>
