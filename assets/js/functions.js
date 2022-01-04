function shortestDistanceNode(distances, visited) {
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
}

export function findShortestPath(graph, startNode, endNode, shows) {
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
  let node = shortestDistanceNode(distances, visited);

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
    node = shortestDistanceNode(distances, visited);
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
  const showPath = results.path.reduce(function (result, value, index, array) {
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
  }, []);
  results.showPath = showPath;
  return results;
}
