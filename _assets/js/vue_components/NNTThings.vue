<template>
  <div>
    <div class="flex flex-row" v-if="Object.keys(people).length > 0">
      <div class="flex flex-column">
        <select name="person1" id="person1" v-model="person1">
          <option
            v-for="(links, person) in people"
            :value="person"
            :key="person + links.length"
            v-text="person"
          />
        </select>
      </div>

      <div class="flex flex-column">
        <select name="person2" id="person2" v-model="person2">
          <option
            v-for="(links, person) in people"
            :value="person"
            :key="person + links.length"
            v-text="person"
          />
        </select>
      </div>
    </div>

    <template
      v-if="result.distance"
    >
      <div v-if="result.distance !== 'Infinity'">
        <h3>Shortest Path Length: {{ result.distance }}</h3>
        <ul>
          <li v-for="(link, index) in result.showPath" :key="index">
            {{ link.person1 }} was in <i>{{ link.title }}</i> with
            {{ link.person2 }}
          </li>
        </ul>
      </div>
      <h3 v-else>
        Could not find a link between {{ person1 }} and {{ person2 }}
      </h3>
    </template>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      search: [],
      people: [],
      person1: null,
      person2: null,
      result: {
        distance: 0,
        path: [],
      },
    };
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
        let search = data
          .filter(
            (item) => item.type === "show" && item.title !== "Freshers' Fringe"
          )
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
            return show;
          })
          .filter(({ cast }) => cast.length > 0);

        this.search = search;

        let people = {};

        search.forEach(({ cast }) => {
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

        this.people = people;
      })
      .catch((error) => console.log(error));
  },
  methods: {
    shortestDistanceNode: function (distances, visited) {
      // create a default value for shortest
      let shortest = null;

      // for each node in the distances object
      for (let node in distances) {
        // if no node has been assigned to shortest yet
        // or if the current node's distance is smaller than the current shortest
        let currentIsShortest =
          shortest === null || distances[node] < distances[shortest];

        // and if the current node is in the unvisited set
        if (currentIsShortest && !visited.includes(node)) {
          // update shortest to be the current node
          shortest = node;
        }
      }
      return shortest;
    },
    findShortestPath: function (graph, startNode, endNode) {
      // track distances from the start node using a hash object
      let distances = {};
      distances[endNode] = "Infinity";
      distances = Object.assign(distances, graph[startNode]);
      // track paths using a hash object
      let parents = { endNode: null };
      for (let child in graph[startNode]) {
        parents[child] = startNode;
      }

      // collect visited nodes
      let visited = [];
      // find the nearest node
      let node = this.shortestDistanceNode(distances, visited);

      // for that node:
      while (node) {
        // find its distance from the start node & its child nodes
        let distance = distances[node];
        let children = graph[node];

        // for each of those child nodes:
        for (let child in children) {
          // make sure each child node is not the start node
          if (String(child) === String(startNode)) {
            continue;
          } else {
            // save the distance from the start node to the child node
            let newdistance = distance + children[child];
            // if there's no recorded distance from the start node to the child node in the distances object
            // or if the recorded distance is shorter than the previously stored distance from the start node to the child node
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
      let shortestPath = [endNode];
      let parent = parents[endNode];
      while (parent) {
        shortestPath.push(parent);
        parent = parents[parent];
      }
      shortestPath.reverse();

      const shows = this.search;

      //this is the shortest path
      const results = {
        distance: distances[endNode],
        path: shortestPath,
      };
      let showPath = results.path.reduce(
        function (result, value, index, array) {
          if (index < array.length - 1) {
            const person1 = value;
            const person2 = array[index + 1];
            let title = "Not found";

            const show = this.search.find(
              ({ cast }) => cast.includes(person1) && cast.includes(person2)
            );
            if (show !== undefined) {
              title = show.title;
            }
            result.push({
              person1: person1,
              person2: person2,
              title: title,
            });
          }
          return result;
        }.bind(this),
        []
      );
      results.showPath = showPath;
      this.result = results;
    },
  },
  watch: {
    person1(newPerson1) {
      if (this.person2) {
        this.findShortestPath(this.people, newPerson1, this.person2);
      }
    },
    person2(newPerson2) {
      if (this.person1) {
        this.findShortestPath(this.people, this.person1, newPerson2);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;

  &.flex-row {
    flex-direction: row;
  }

  &.flex-column {
    flex-direction: column;
  }
}
</style>