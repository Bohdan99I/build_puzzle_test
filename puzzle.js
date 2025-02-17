function buildGraph(fragments) {
  const graph = {};
  fragments.forEach((fragment) => {
    const start = fragment.slice(0, 2);
    const end = fragment.slice(-2);
    if (!graph[start]) graph[start] = [];
    if (!graph[end]) graph[end] = [];
    graph[start].push(fragment);
    graph[end].push(fragment);
  });
  return graph;
}

function findLongestPath(graph, fragments) {
  function dfs(node, visited, path) {
    visited.add(node);
    path.push(node);
    let maxPath = Array.from(path);
    (graph[node] || []).forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        const newPath = dfs(neighbor, visited, path);
        if (newPath.length > maxPath.length) {
          maxPath = newPath;
        }
      }
    });
    path.pop();
    visited.delete(node);
    return maxPath;
  }

  let longestPath = [];
  fragments.forEach((fragment) => {
    const startNode = fragment.slice(0, 2);
    const visited = new Set();
    const path = [];
    const currentPath = dfs(startNode, visited, path);
    if (currentPath.length > longestPath.length) {
      longestPath = currentPath;
    }
  });
  return longestPath;
}

const fragments = [
  "942517",
  "605676",
  "498291",
  "668826",
  "357057",
  "478151",
  "315629",
  "007148",
  "252887",
  "421662",
  "284505",
  "467650",
  "115330",
  "648206",
  "207562",
  "612298",
  "576885",
  "294200",
  "847595",
  "021597",
  "074878",
  "801997",
  "585401",
  "168510",
  "385293",
  "151863",
  "022142",
  "340350",
  "976151",
  "337989",
  "863284",
  "488310",
  "303887",
  "939173",
  "331413",
  "905657",
  "833617",
  "170794",
  "094486",
  "551394",
  "943693",
  "147970",
  "400196",
  "537505",
  "367493",
  "117178",
  "675840",
  "868721",
  "519081",
  "735564",
  "401733",
  "915348",
  "169233",
  "324651",
  "958675",
  "368753",
  "861460",
  "401341",
  "343222",
  "794373",
  "816374",
  "535119",
  "188234",
  "577779",
  "097792",
  "729303",
  "782637",
  "148159",
  "830641",
  "716890",
  "397853",
  "871196",
  "277603",
  "749226",
  "839595",
  "131852",
  "409432",
  "810698",
  "456030",
  "529185",
  "758823",
  "265024",
  "051041",
  "699031",
  "737269",
  "139340",
  "730977",
  "249786",
  "039931",
  "055669",
  "100107",
  "653178",
  "279773",
  "336550",
  "332847",
  "685485",
  "423269",
  "193536",
  "890062",
  "377637",
  "595777",
  "412134",
  "322736",
  "546929",
  "616370",
  "767332",
  "781184",
  "920944",
  "851005",
  "258850",
  "064083",
  "051202",
  "427711",
  "359855",
  "540928",
  "314284",
  "085261",
  "880969",
  "649699",
  "064881",
  "705423",
  "646927",
  "252556",
  "272007",
  "217511",
  "620286",
  "229724",
  "108865",
  "124636",
  "231417",
  "961201",
  "658432",
  "775416",
  "246027",
  "854036",
  "687762",
  "389097",
  "013153",
  "417085",
  "919198",
  "988711",
  "488665",
];

const graph = buildGraph(fragments);
const longestPath = findLongestPath(graph, fragments);
const result = longestPath.join("");
console.log(`Найдовша послідовність: ${result}`);
