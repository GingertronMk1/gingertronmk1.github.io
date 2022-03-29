<template>
  <div class="six_degrees_nnt">
    <div class="six_degrees_nnt__info">
      <ButtonCheckbox v-model="includeFreshersFringe">
        Include Freshers' Fringe?
      </ButtonCheckbox>

      <ButtonCheckbox v-model="includeTwentyFifteenOnward">
        2015 on?
      </ButtonCheckbox>

      <span
        class="six_degrees_nnt__counts"
        v-text="
          `${shows.length} shows with ${Object.keys(people).length} actors`
        "
      />

      <button class="button" @click="randomise()">Randomise!</button>

      <button class="button" @click="resetPeople()">Reset</button>
    </div>

    <!-- INPUTS FOR SELECTING PEOPLE -->

    <div v-if="Object.keys(people).length > 0" class="six_degrees_nnt__inputs">
      <div class="six_degrees_nnt__input">
        <input
          id="person1search"
          v-model="person1search"
          type="text"
          name="person1search"
        />
        <div class="six_degrees_nnt__person" person="1">
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
      <div class="six_degrees_nnt__input">
        <input
          id="person2search"
          v-model="person2search"
          type="text"
          name="person2search"
        />
        <div class="six_degrees_nnt__person" person="2">
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

    <template v-if="person1 !== null && person2 !== null">
      <hr />

      <div
        v-if="result.distance !== 'Infinity'"
        class="six_degrees_nnt__results"
      >
        <h3>
          Shortest Path between {{ person1 }} and {{ person2 }}:
          <em v-text="result.distance" />
        </h3>
        <ul>
          <li
            v-for="(link, index) in result.showPath"
            :key="index"
            class="six_degrees_nnt__path-item"
          >
            {{ link.person1 }} was in the {{ link.show.year_title }} production
            of <i v-text="link.show.title" /> with
            {{ link.person2 }}
          </li>
        </ul>
      </div>
      <h3 v-else>
        Could not find a link between {{ person1 }} and {{ person2 }}
      </h3>
    </template>

    <hr />
    <hr />
    <hr />

    <AgGrid
      :grid-options="gridOptions"
      :row-data="shows"
      :style="{ height: '300px' }"
      class="ag-theme-alpine-dark"
    />
  </div>
</template>
<script>
const historySiteUrl = "https://history.newtheatre.org.uk";

export default {
  props: {},
  async asyncData({ $axios }) {
    const { data } = await $axios({
      url: `${historySiteUrl}/feeds/search.json`,
      headers: {
        Accept: "application/json",
      },
    });
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

    return {
      search,
      person1: null,
      person2: null,
      person1search: "",
      person2search: "",
      includeFreshersFringe: false,
      includeTwentyFifteenOnward: false,
      gridOptions: {
        onRowClicked: ({ data: { link } }) => {
          window.open(`${historySiteUrl}${link}`);
        },
        defaultColDef: {
          sortable: true,
          resizable: true,
          filter: true,
          width: 500,
        },
        columnDefs: [
          {
            field: "title",
            headerName: "Title",
          },
          {
            field: "playwright",
            headerName: "Playwright",
          },
          {
            field: "year_title",
            headerName: "Academic Year",
          },
          {
            field: "cast",
            headerName: "Cast",
          },
          {
            field: "crew",
            headerName: "Crew",
          },
          {
            field: "season",
            headerName: "Season",
          },
        ],
      },
    };
  },
  head() {
    return {
      title: "Six Degrees of New Theatre",
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
      return this.findShortestPath(
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
      return !Array.isArray(this.search)
        ? []
        : this.search.filter(
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
    this.gridOptions.api.sizeColumnsToFit();
  },
  methods: {
    randomise() {
      const people = this.peopleArray;
      const l = people.length;
      const p1 = people[Math.floor(Math.random() * l)];
      const p2 = people[Math.floor(Math.random() * l)];
      this.person1 = p1;
      this.person2 = p2;

      [p1, p2].forEach((person, index) => {
        index++;
        const selectedElement = document.querySelector(
          `label[for^="radio${index}${person}"]`
        );
        if (selectedElement?.parentElement) {
          const parentElement = selectedElement.parentElement;
          parentElement.scroll({
            top: selectedElement.offsetTop - parentElement.offsetTop / 2,
            behavior: "smooth",
          });
        }
      });
    },
    resetPeople() {
      this.person1 = null;
      this.person2 = null;
    },
    /**
     * Dijkstra's algorithm
     */
    shortestDistanceNode(distances, visited) {
      // create a default value for shortest
      let shortest = null;

      // for each node in the distances object
      for (const node in distances) {
        // if no node has been assigned to shortest yet
        // or if the current node's distance is smaller than the current shortest
        // and if the current node is in the unvisited set
        if (
          (shortest === null || distances[node] < distances[shortest]) &&
          !visited.includes(node)
        ) {
          // update shortest to be the current node
          shortest = node;
        }
      }
      return shortest;
    },

    findShortestPath(graph, startNode, endNode, shows) {
      // track distances from the start node using a hash object
      let distances = {};
      distances[endNode] = "Infinity";
      distances = Object.assign(distances, graph[startNode]);
      // track paths using a hash object
      const parents = { endNode: null };
      for (const child in graph[startNode]) {
        if (child !== endNode) {
          parents[child] = startNode;
        }
      }

      // collect visited nodes
      const visited = [];
      // find the nearest node
      let node = this.shortestDistanceNode(distances, visited);

      // for that node:
      while (node) {
        // find its distance from the start node & its child nodes
        const distance = distances[node];
        const children = graph[node];

        // for each of those child nodes:
        for (const child in children) {
          // make sure each child node is not the start node
          if (String(child) !== String(startNode)) {
            // save the distance from the start node to the child node
            const newdistance = distance + children[child];
            // if there's no recorded distance from the start node
            // to the child node in the distances object
            // or if the recorded distance is shorter than the previously
            // stored distance from the start node to the child node
            if (!distances[child] || distances[child] > newdistance) {
              // save the distance to the object
              distances[child] = newdistance;
              // record the path
              parents[child] = node;
            }
          }
        }
        // move the current node to the visited set
        visited.push(node);
        // move to the nearest neighbor node
        node = this.shortestDistanceNode(distances, visited);
      }

      // using the stored paths from start node to end node
      // record the shortest path
      const shortestPath = [endNode];
      let parent = parents[endNode];
      while (parent) {
        shortestPath.push(parent);
        parent = parents[parent];
      }
      shortestPath.reverse();

      // this is the shortest path
      const results = {
        person1: startNode,
        person2: endNode,
        distance: distances[endNode],
        path: shortestPath,
      };
      const showPath = results.path.reduce(function (
        result,
        value,
        index,
        array
      ) {
        if (index < array.length - 1) {
          const person1 = value;
          const person2 = array[index + 1];
          const show = shows.find(
            ({ cast }) => cast.includes(person1) && cast.includes(person2)
          );
          result.push({
            person1,
            person2,
            show,
          });
        }
        return result;
      },
      []);
      results.showPath = showPath;
      return results;
    },
  },
};
</script>

<style lang="scss">
.six_degrees_nnt {
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

  &__counts {
    align-self: center;
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
    position: relative;

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

  .ag-root-wrapper {
    margin-top: 1rem;
  }
}
</style>
