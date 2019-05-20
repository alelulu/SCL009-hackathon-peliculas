const movies = window.MOVIES.movies
let showMovies = (arr) => {
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

      //Acá va la función show
  
    });
  })
}
window.age = 3
window.category = 1
document.getElementById("hola").addEventListener("click", () => {
  showMovies(window.logic.filterByCategory(window.logic.filterByAge(movies, window.age), window.category))
})