const movies = window.MOVIES.movies
let showMovies = (arr) => {
  arr.forEach(element => {
    let link = window.logic.createLink(element.id)
    fetch(link)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let movieBoxes = document.getElementById("boxes");
      movieBoxes.classList.add("row");

      let movieCard = document.createElement("div");
     
      movieCard.classList.add("movie-card")
      movieCard.classList.add("col-sm-12");
      movieCard.classList.add("col-md-4");
      movieCard.classList.add("col-lg-4");
      
      let movieContainer = document.createElement("div");
      movieContainer.classList.add("container")

      let movieImgRow = document.createElement("div")
      movieImgRow.classList.add("row")
      let movieImgCol = document.createElement("div")
      movieImgCol.classList.add("col-12")
      movieImgCol.classList.add("movie-img");

      let movieTitleRow = document.createElement("div");
      movieTitleRow.classList.add("row");
      let movieTitleCol = document.createElement("div");
      movieTitleCol.classList.add("col-12");
      movieTitleCol.classList.add("movie-title-card")

      if (data.Poster != "N/A") {
        movieImgCol.innerHTML += "<img class=\"img-to-style\" src=\""+data.Poster+"\" alt=\""+data.Title+"\">"
        movieTitleCol.innerHTML += "<h6>\""+data.Title+"\"</h6>"
      }
      else {
        movieImgCol.innerHTML += "<img class=\"img-to-style\" src=\"http://www.libreriacuesta.com/content/images/thumbs/default-image_550.png\" alt=\""+data.Title+"\">"
        movieTitleCol.innerHTML += "<h6>\""+data.Title+"\"</h6>"
      }
      movieImgRow.appendChild(movieImgCol);
      movieContainer.appendChild(movieImgRow);

      movieTitleRow.appendChild(movieTitleCol);
      movieCard.appendChild(movieContainer);
      movieContainer.appendChild(movieTitleRow);
      movieBoxes.appendChild(movieCard)
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
    categoryTitleText = "ARTE! Fomenta la actividad creativa y transformadora en tus niños! "
  }
  else if (localStorage.category == 2) {
    categoryTitleText = "CIENCIAS! Aprende lo divertidas y atractivas que son las ciencias!"
  }
  else if (localStorage.category == 3) {
    categoryTitleText = "GENERAL! Es hora de diversión!"
  }
  else if (localStorage.category == 4) {
    categoryTitleText = "LENGUAJE E INGLES! Mejora habilidades en su comunicación de forma didáctiva y entretenida "
  }
  else if (localStorage.category == 5) {
    categoryTitleText = "SOCIOEMOCIONAL! Fomenta valores en tus niños de una manera divertida"
  }
  else {
    categoryTitleText = "hola" 
    }
  categoryTitle.innerHTML = categoryTitleText
  showMovies(window.logic.filterByCategory(window.logic.filterByAge(movies, localStorage.age), localStorage.category))

}