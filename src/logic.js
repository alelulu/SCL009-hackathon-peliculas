window.logic = {

  //Function to create link
  createLink: (id) => {
    let link = " "
    let partLink = "http://www.omdbapi.com/?i="
    let partKey = "&apikey=591703c0"
    link = partLink+id+partKey
    return link
  },

  //Function to filter by age
  filterByAge: (arr, age) => {
    let ageArray = [];
    ageArray = arr.filter(element => {
      return element.age <= age;
    })
    return ageArray
  },
  
  //Function to filter by category
  filterByCategory: (arr, category) => {
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
      "categories": [8],
      "age": 3
    }, {
      "id": "tt2402500",
      "categories": [7],
      "age": 6
    }, {
      "id": "tt0063951",
      "categories": [4],
      "age": 3
    }, {
      "id": "tt0063951",
      "categories": [4],
      "age": 3
    }, {
      "id": "tt0381971",
      "categories": [4, 2],
      "age": 3
    }, {
      "id": "tt1236429",
      "categories": [2],
      "age": 3
    }, {
      "id": "tt3012540",
      "categories": [1],
      "age": 3
    }, {
      "id": "tt1105469",
      "categories": [6, 4],
      "age": 3
    }, {
      "id": "tt2948562",
      "categories": [2, 7],
      "age": 3
    }, {
      "id": "tt1710295",
      "categories": [8, 2],
      "age": 3
    }, {
      "id": "tt4549142",
      "categories": [8],
      "age": 6
    }, {
      "id": "tt0313033",
      "categories": [1],
      "age": 3
    }, {
      "id": "tt0784896",
      "categories": [5],
      "age": 3
    }, {
      "id": "tt2543472",
      "categories": [8],
      "age": 6
    }, {
      "id": "tt0249462",
      "categories": [8],
      "age": 6
    }, {
      "id": "tt0420437",
      "categories": [8, 3],
      "age": 3
    }, {
      "id": "tt1634859",
      "categories": [8],
      "age": 6
    }, {
      "id": "tt0262153",
      "categories": [8],
      "age": 3
    }, {
      "id": "tt2096673",
      "categories": [8],
      "age": 6
    }, {
      "id": "tt0775407",
      "categories": [4, 8],
      "age": 3
    }, {
      "id": "tt4716268",
      "categories": [2],
      "age": 3
    }, {
      "id": "tt0428803",
      "categories": [2],
      "age": 6
    }, {
      "id": "tt0052751",
      "categories": [7],
      "age": 6
    }, {
      "id": "tt0102316",
      "categories": [4],
      "age": 6
    }, {
      "id": "tt0376364",
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