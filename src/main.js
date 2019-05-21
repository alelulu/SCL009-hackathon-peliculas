const movies = window.MOVIES.movies
let showMovies = (arr) => {
  console.log(arr)
  //element de mi array
  arr.forEach(element => {
    let link = window.logic.createLink(element.id)
    fetch(link)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //el objeto de la api
      console.log(data)
      let imgMovie = document.getElementById("titulosprueba")
      if (data.Poster != "N/A") {
        imgMovie.innerHTML += "<img src=\""+data.Poster+"\" alt=\""+data.Title+"\">"
      }
      else {
        imgMovie.innerHTML += "<img src=\"http://www.libreriacuesta.com/content/images/thumbs/default-image_550.png\" alt=\""+data.Title+"\">"
      }
      
    });
  })
}
let indexPage = document.getElementById("index-page");
if (indexPage != null) {
  localStorage.setItem("age", 6)
  localStorage.setItem("category", 4)

  let age3Btn = document.getElementById("age-3-btn");
  age3Btn.addEventListener("click", () => {
    localStorage.removeItem("age")
    localStorage.setItem("age", 3);
    document.getElementById("age-3-action").submit();
  })
  let age6Btn = document.getElementById("age-6-btn");
  age6Btn.addEventListener("click", () => {
    localStorage.removeItem("age")
    localStorage.setItem("age", 6);
    document.getElementById("age-6-action").submit();
  })
} 

let categoriesPage = document.getElementById("categories-page");
if (categoriesPage != null) {
  let categoriesBtn = document.querySelectorAll(".category-btn");
  categoriesBtn.forEach(element => {
    element.addEventListener("click", () => {
      localStorage.removeItem("category")
      localStorage.setItem("category", element.getAttribute("value"));
      document.getElementById("categories-action").submit();
    })
  })
}

let moviesPage = document.getElementById("movies-page");
if (moviesPage != null) {
  let categoryTitle = document.getElementById("category-title")
  let categoryTitleText = " "
  if (localStorage.category == 1) {
    categoryTitleText = "el arte es lindo"
  }
  else if (localStorage.category == 2) {
    categoryTitleText = "la ciencia es linda"
  }
  else if (localStorage.category == 3) {
    categoryTitleText = "generalll"
  }
  else if (localStorage.category == 4) {
    categoryTitleText = "lenguaje e ingléees"
  }
  else if (localStorage.category == 5) {
    categoryTitleText = "socioemocional habilidades importantes"
  }
  else {
    categoryTitleText = "hola"
  }
  categoryTitle.innerHTML = categoryTitleText
  showMovies(window.logic.filterByCategory(window.logic.filterByAge(movies, localStorage.age), localStorage.category))

}