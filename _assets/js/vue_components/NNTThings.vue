<template>
  <div class="nnt_things">
    <template v-if="Array.isArray(search) && search.length > 1">
      <div class="nnt_things__info">
        <label
          for="includeFreshersFringe"
          class="nnt_things__include-checkbox"
        >
          Include Freshers' Fringe?
          <input
            type="checkbox"
            name="includeFreshersFringe"
            id="includeFreshersFringe"
            v-model="includeFreshersFringe"
          />
        </label>
        <label
          for="includeTwentyFifteenOnward"
          class="nnt_things__include-checkbox"
        >
          2015 on?
          <input
            type="checkbox"
            name="includeTwentyFifteenOnward"
            id="includeTwentyFifteenOnward"
            v-model="includeTwentyFifteenOnward"
          />
        </label>

        <span>
          {{ shows.length }} shows with {{ Object.keys(people).length }} actors
        </span>

        <button @click="randomise()" class="button">Randomise!</button>

        <button @click="resetPeople()" class="button">Reset</button>

      </div>

      <!-- INPUTS FOR SELECTING PEOPLE -->

      <div class="nnt_things__inputs" v-if="Object.keys(people).length > 0">
        <div class="nnt_things__input">

        <input
          type="text"
          name="person1search"
          id="person1search"
          v-model="person1search"
          >
        <div class="nnt_things__person">
          <label for="person1null">
            <input
              type="radio"
              name="person1null"
              id="person1null"
              v-model="person1"
              :value="null"
              >
            <div>Select a person</div>
          </label>
          <label
            v-for="(person, index) in peopleFiltered1"
            :key="`radio1${person}${index}`"
            :for="`radio1${person}${index}`"
          >
          <input
            type="radio"
            :name="`radio1${person}${index}`"
            :id="`radio1${person}${index}`"
            v-model="person1"
            :value="person"
            >
            <div v-text="person" />
          </label>
        </div>
        </div>
        <div class="nnt_things__input">

        <input
          type="text"
          name="person2search"
          id="person2search"
          v-model="person2search"
          >
        <div class="nnt_things__person">
          <label for="person2null">
            <input
              type="radio"
              name="person2null"
              id="person2null"
              v-model="person2"
              :value="null"
              >
            <div>Select a person</div>
          </label>
          <label
            v-for="(person, index) in peopleFiltered2"
            :key="`radio2${person}${index}`"
            :for="`radio2${person}${index}`"
          >
          <input
            type="radio"
            :name="`radio2${person}${index}`"
            :id="`radio2${person}${index}`"
            v-model="person2"
            :value="person"
            >
            <div v-text="person" />
          </label>
        </div>
        </div>

      </div>

      <hr />

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
      includeTwentyFifteenOnward: false,
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
    resetPeople() {
      this.person1 = null;
      this.person2 = null;
    },
  },
  computed: {
    allCombos() {
      const people = this.peopleArray;
      return people.reduce(
          (acc, v, i) => {
            return acc.concat(
                people.slice(i+1).map((w) => {
                  return {person1: v, person2: w};
                }),
            );
          }, []);
    },
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
          ({title, year_title: yearTitle}) =>
            (this.includeFreshersFringe || title !== 'Freshers\' Fringe') &&
            (
              !this.includeTwentyFifteenOnward ||
              parseInt(yearTitle.slice(0, 4)) >= 2015
            ),
      );
    },
  },
  watch: {
    includeTwentyFifteenOnward() {
      this.resetPeople();
    },
    includeFreshersFringe() {
      this.resetPeople();
    },
  },
};
</script>
