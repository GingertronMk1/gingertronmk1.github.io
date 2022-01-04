<template>
  <div class="nnt_things">
    <template v-if="Array.isArray(search) && search.length > 1">
      <div class="nnt_things__info">
        <ButtonCheckbox
          v-model="includeFreshersFringe"
          label="Include Freshers' Fringe?"
        />
        <ButtonCheckbox v-model="includeTwentyFifteenOnward" label="2015 on?" />

        <span>
          {{ shows.length }} shows with {{ Object.keys(people).length }} actors
        </span>

        <button class="button" @click="randomise()">Randomise!</button>

        <button class="button" @click="resetPeople()">Reset</button>
      </div>

      <!-- INPUTS FOR SELECTING PEOPLE -->

      <div v-if="Object.keys(people).length > 0" class="nnt_things__inputs">
        <div class="nnt_things__input">
          <input
            id="person1search"
            v-model="person1search"
            type="text"
            name="person1search"
          />
          <div class="nnt_things__person">
            <label for="person1null">
              <input
                id="person1null"
                v-model="person1"
                type="radio"
                name="person1null"
                :value="null"
              />
              <div>Select a person</div>
            </label>
            <label
              v-for="(person, index) in peopleFiltered1"
              :key="`radio1${person}${index}`"
              :for="`radio1${person}${index}`"
            >
              <input
                :id="`radio1${person}${index}`"
                v-model="person1"
                type="radio"
                :name="`radio1${person}${index}`"
                :value="person"
              />
              <div v-text="person" />
            </label>
          </div>
        </div>
        <div class="nnt_things__input">
          <input
            id="person2search"
            v-model="person2search"
            type="text"
            name="person2search"
          />
          <div class="nnt_things__person">
            <label for="person2null">
              <input
                id="person2null"
                v-model="person2"
                type="radio"
                name="person2null"
                :value="null"
              />
              <div>Select a person</div>
            </label>
            <label
              v-for="(person, index) in peopleFiltered2"
              :key="`radio2${person}${index}`"
              :for="`radio2${person}${index}`"
            >
              <input
                :id="`radio2${person}${index}`"
                v-model="person2"
                type="radio"
                :name="`radio2${person}${index}`"
                :value="person"
              />
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
    <h3 v-else class="nnt_things__loading">Loading...</h3>
  </div>
</template>
<script>
import axios from "axios";
import { findShortestPath } from "@/assets/js/functions.js";

export default {
  props: {},
  data() {
    return {
      search: [],
      person1: null,
      person2: null,
      person1search: "",
      person2search: "",
      includeFreshersFringe: false,
      includeTwentyFifteenOnward: false,
    };
  },
  computed: {
    allCombos() {
      const people = this.peopleArray;
      return people.reduce((acc, v, i) => {
        return acc.concat(
          people.slice(i + 1).map((w) => {
            return { person1: v, person2: w };
          })
        );
      }, []);
    },
    result() {
      return findShortestPath(
        this.people,
        this.person1,
        this.person2,
        this.shows
      );
    },
    peopleArray() {
      return Object.keys(this.people);
    },
    peopleFiltered1() {
      return this.peopleArray.filter(
        (person) =>
          person.toLowerCase().includes(this.person1search.toLowerCase()) &&
          person !== this.person2
      );
    },
    peopleFiltered2() {
      return this.peopleArray.filter(
        (person) =>
          person.toLowerCase().includes(this.person2search.toLowerCase()) &&
          person !== this.person1
      );
    },
    people() {
      const people = {};
      this.shows.forEach(({ cast }) => {
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
        ({ title, year_title: yearTitle }) =>
          (this.includeFreshersFringe || title !== "Freshers' Fringe") &&
          (!this.includeTwentyFifteenOnward ||
            parseInt(yearTitle.slice(0, 4)) >= 2015)
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
  mounted() {
    console.log("mounted");
    axios({
      url: "https://history.newtheatre.org.uk/feeds/search.json",
      headers: {
        Accept: "application/json",
      },
    })
      .then(({ data }) => {
        const search = data
          .filter(({ type }) => type === "show")
          .map((show) => {
            if (show.cast !== undefined) {
              show.cast = show.cast
                .split(",")
                .map((name) => name.trim())
                .filter((name) => name !== "");
            }
            if (show.crew !== undefined) {
              show.crew = show.crew
                .split(",")
                .map((name) => name.trim())
                .filter((name) => name !== "");
            }

            show.year_title = show.year_title.replace("&ndash;", "-");
            return show;
          })
          .filter(({ cast }) => cast.length > 0);

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
};
</script>

<style lang="scss">
.nnt_things {
  @include flex(column, space-between);
  padding-top: 1rem;
  width: 95%;
  max-width: 1200px;

  &__inputs {
    @include flex(row, space-around);
  }

  &__input {
    @include flex(column, stretch);

    flex: 1;
    min-width: 1px;
    max-width: 45%;

    > input + select {
      margin-top: 1rem;
    }

    input,
    select {
      padding: 0.5rem;
    }
  }

  &__info {
    @include flex(row, space-around, stretch);
    margin: 1rem 0;

    & > * {
      flex: 1;
      min-width: 1px;
      max-width: 45%;
      margin: 0 2.5%;
    }
  }

  &__results {
    @include flex(column, flex-start, stretch);
    margin-top: 2rem;

    & > * {
      margin: 0 auto;
      width: 95%;
    }

    h3 {
      margin-bottom: 1rem;
    }

    ul > li + li {
      margin-top: 1.6rem;
    }
  }

  &__include-checkbox {
    @include flex(row, flex-start, center);
  }

  &__input {
    @include flex(column, flex-start, stretch);

    > input[type="text"] {
      margin-bottom: 0.5rem;
      border-radius: 0.5rem;
    }
  }

  &__person {
    @include flex(column, flex-start, stretch);
    height: 20rem;
    overflow-y: scroll;
    width: 100%;
    border: 2px solid $primary;
    border-radius: 0.5rem;
    padding: 0.5rem;

    > * {
      margin-bottom: 1rem;
    }
    > label {
      @include flex(row, space-between, stretch);
      text-align: left;

      > input[type="radio"] {
        display: none;

        + div {
          color: $primary;
          width: 100%;
          padding: 0.5rem;
          font-size: 2rem;
          border-radius: 0.5rem;
        }

        &:checked + div {
          color: $white;
          background-color: $primary;
        }
      }
    }
  }
}
</style>
