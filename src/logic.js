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
    console.log(arr)
    if (category == 3) { //Para categoría general se devuelve array completo
      return arr
    }
    let showCategory = []
    arr.forEach(element => {
      if (element.category == category) {
        showCategory.push(element);
      }
    });
    return showCategory;
  }
}

//Array with movies with its ID to be called from function
const MOVIES = {
  "movies": [
    {
      "id": "tt3121722",
      "category": 5,
      "age": 3
    }, {
      "id": "tt2402500",
      "category": 2,
      "age": 6
    }, {
      "id": "tt0063951",
      "category": 3,
      "age": 3
    }, {
      "id": "tt0381971",
      "category": 2,
      "age": 3
    }, {
      "id": "tt1236429",
      "category": 2,
      "age": 3
    }, {
      "id": "tt3012540",
      "category": 1,
      "age": 3
    }, {
      "id": "tt1105469",
      "category": 4,
      "age": 3
    }, {
      "id": "tt2948562",
      "category": 2,
      "age": 3
    }, {
      "id": "tt1710295",
      "category": 5,
      "age": 3
    }, {
      "id": "tt4549142",
      "category": 5,
      "age": 6
    }, {
      "id": "tt0313033",
      "category": 1,
      "age": 3
    }, {
      "id": "tt0784896",
      "category": 4,
      "age": 3
    }, {
      "id": "tt2543472",
      "category": 5,
      "age": 6
    }, {
      "id": "tt0249462",
      "category": 5,
      "age": 6
    }, {
      "id": "tt0420437",
      "category": 5,
      "age": 3
    }, {
      "id": "tt1634859",
      "category": 5,
      "age": 6
    }, {
      "id": "tt0262153",
      "category": 5,
      "age": 3
    }, {
      "id": "tt2096673",
      "category": 5,
      "age": 6
    }, {
      "id": "tt0775407",
      "category": 3,
      "age": 3
    }, {
      "id": "tt4716268",
      "category": 2,
      "age": 3
    }, {
      "id": "tt0428803",
      "category": 2,
      "age": 6
    }, {
      "id": "tt0052751",
      "category": 2,
      "age": 6
    }, {
      "id": "tt0102316",
      "category": 3,
      "age": 6
    }, {
      "id": "tt0376364",
      "category": 3,
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
      "name": "Ciencia y Matemáticas",
      "description": "Lorem"
    }, {
      "id": 3,
      "name": "General",
      "description": "Lorem"
    }, {
      "id": 4,
      "name": "lenguaje e Inglés",
      "description": "Lorem"
    }, {
      "id": 5,
      "name": "Socioemocional y Deporte",
      "description": "Lorem"
    }
  ]
}