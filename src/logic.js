window.logic = {

  //Function to get link
  getLink: (id) => {
    let link = " "
    let partLink = "http://www.omdbapi.com/?i="
    let partKey = "&apikey=591703c0"
    link = partLink+id+partKey
    return link
  },

  //Function to filter by age
  
  //Function to filter by category
  getCategory: (arr, category) => {
    let showCategory = arr.filter(element => {
      return element.categories.includes(category)
    })
    return showCategory;
  }
}

//Array with movies with its ID to be called from function
const MOVIES = {
  "movies": [
    {
      "id": "tt3121722",
      "title": "Paw Patrol",
      "categories": [8],
      "age": 3
    }, {
      "id": "tt2402500",
      "title": "Peg + Cat",
      "categories": [7],
      "age": 6
    }, {
      "id": "tt0063951",
      "title": "Sesame Street",
      "categories": [4],
      "age": 3
    }, {
      "id": "tt0063951",
      "title": "Sesame Street",
      "categories": [4],
      "age": 3
    }, {
      "id": "tt0381971",
      "title": "Curious George",
      "categories": [4, 2],
      "age": 3
    }, {
      "id": "tt1236429",
      "title": "Sid The Science Kid",
      "categories": [2],
      "age": 3
    }, {
      "id": "tt3012540",
      "title": "Creative Galaxy",
      "categories": [1],
      "age": 3
    }, {
      "id": "tt1105469",
      "title": "Super Why!",
      "categories": [6, 4],
      "age": 3
    }, {
      "id": "tt2948562",
      "title": "Tumble Leaf",
      "categories": [2, 7],
      "age": 3
    }, {
      "id": "tt1710295",
      "title": "Doc McStuffins",
      "categories": [8, 2],
      "age": 3
    }, {
      "id": "tt4549142",
      "title": "Elena of Avalor",
      "categories": [8],
      "age": 6
    }, {
      "id": "tt0313033",
      "title": "Art Attack",
      "categories": [1],
      "age": 3
    }, {
      "id": "tt0784896",
      "title": "Mickey Mouse Clubhouse",
      "categories": [5],
      "age": 3
    }, {
      "id": "tt2543472",
      "title": "Wonder",
      "categories": [8],
      "age": 6
    }, {
      "id": "tt0249462",
      "title": "Billy Elliot",
      "categories": [8],
      "age": 3
    }, {
      "id": "tt0420437",
      "title": "Patati Patata",
      "categories": [8, 3],
      "age": 3
    }, {
      "id": "tt1634859",
      "title": "Ropes",
      "categories": [8],
      "age": 6
    }, {
      "id": "tt0262153",
      "title": "Caillou",
      "categories": [8],
      "age": 3
    }, {
      "id": "tt2096673",
      "title": "Inside Out",
      "categories": [8],
      "age": 6
    }, {
      "id": "tt0775407",
      "title": "Wonder Pets!",
      "categories": [4, 8],
      "age": 3
    }, {
      "id": "tt4716268",
      "title": "Beat Bugs",
      "categories": [2],
      "age": 3
    }, {
      "id": "tt0428803",
      "title": "March of the Penguins",
      "categories": [2],
      "age": 6
    }, {
      "id": "tt0052751",
      "title": "Donald in Mathmagic Land",
      "categories": [7],
      "age": 6
    }, {
      "id": "tt0102316",
      "title": "Little man tate",
      "categories": [4],
      "age": 6
    }, {
      "id": "tt0376364",
      "title": "31 Minutos",
      "categories": [4, 2],
      "age": 6
    }
  ]
}
window.MOVIES = MOVIES

//Array of categories with its definition
const CATEGORIES = {
  "categories": [
    {
      "id": 1,
      "name": "Arte",
      "description": "Lorem"
    }, {
      "id": 2,
      "name": "Ciencia",
      "description": "Lorem"
    }, {
      "id": 3,
      "name": "Deporte",
      "description": "Lorem"
    }, {
      "id": 4,
      "name": "General",
      "description": "Lorem"
    }, {
      "id": 5,
      "name": "Inglés",
      "description": "Lorem"
    }, {
      "id": 6,
      "name": "Lenguaje",
      "description": "Lorem"
    }, {
      "id": 7,
      "name": "Matemáticas",
      "description": "Lorem"
    }, {
      "id": 8,
      "name": "Socioemocional",
      "description": "Lorem"
    }
  ]
}