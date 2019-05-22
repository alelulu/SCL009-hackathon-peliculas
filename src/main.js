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
      let movieCards = document.getElementById("movie-card");
      let movieBox = document.createElement("div")
      movieBox.classList.add("row");
      movieBox.classList.add("justify-content-center");
      movieCard = document.createElement("div");
      movieCard.classList.add("col-sm-6");
      movieCard.classList.add("col-md-4");
      movieCard.classList.add("col-lg-2");
      let movieImgContainer = document.createElement("div");
      movieImgContainer.classList.add("movie-img-container")
      let movieImgRow = document.createElement("div")
      movieImgRow.classList.add("row")
      let movieImgCol = document.createElement("div")
      movieImgCol.classList.add("col-6")
      movieImgCol.classList.add("movie-img");
      let movieTitleContainer = document.createElement("div");
      movieTitleContainer.classList.add("movie-title-container")
      let movieTitleRow = document.createElement("div");
      movieTitleRow.classList.add("row");
      let movieTitleCol = document.createElement("div");
      movieTitleCol.classList.add("col-6");
      if (data.Poster != "N/A") {
        movieImgCol.innerHTML += "<img id=\"img-to-style\" height=\"300\" width=\"300\" src=\""+data.Poster+"\" alt=\""+data.Title+"\">"
        movieTitleCol.innerHTML += "<h6>\""+data.Title+"\"</h6>"
      }
      else {
        movieCard.innerHTML += "<img height=\"100\" src=\"http://www.libreriacuesta.com/content/images/thumbs/default-image_550.png\" alt=\""+data.Title+"\">"
      }
      movieImgRow.appendChild(movieImgCol);
      movieImgContainer.appendChild(movieImgRow);
      movieCard.appendChild(movieImgContainer);
      movieImgRow.appendChild(movieTitleCol);
      movieTitleContainer.appendChild(movieTitleRow);
      movieCard.appendChild(movieTitleContainer);
      movieBox.appendChild(movieCard)
      movieCards.appendChild(movieCard);
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