let homeOfNav = document.getElementById("movie-pages");
  age3Btn.addEventListener("click", () => {
    localStorage.removeItem("age")
    localStorage.setItem("age", 3);
    document.getElementById("age-3-action").submit();
  })




  let indexPage = document.getElementById("categories-page");
if (indexPage != null) {
  localStorage.setItem("age", 6)
  localStorage.setItem("category", 4)

  let age3Btn = document.getElementById(".categories-page");
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



const buttonHome= document.getElementById("")