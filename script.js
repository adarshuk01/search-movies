let movieNameRef = document.getElementById("movie-name1");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

//function to fetch data from API

let getMovie = () => {
  let movieName = movieNameRef.value;
  let url = `https://www.omdbapi.com/?t=${movieName}&apikey=${key}`;
  if (movieName.length <= 0) {
    result.innerHTML = `<h4 class="msg">Please enter a movie name !</h4>`;
  } else {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.Response == "True") {
          result.innerHTML = `<div class="info"><img src=${
            data.Poster
          } class="poster">
        <div><h2>${data.Title}</h2>
        <div class="rating"><img src="star.svg"> <h4>${
          data.imdbRating
        }/10</h4></div>
        <div class="details"><span>${data.Rated}</span>
        <span>${data.Year}</span>
        <span>${data.Runtime}</span></div>
        <div class="genre"><div>${data.Genre.split(",").join(
          "</div><div>"
        )}</div></div>
        </div></div>
        <h3>Plot:</h3>
        <p>${data.Plot}</p>
        <h3>Cast:</h3>
        <p>${data.Actors}</p>`;
        } else {
          result.innerHTML = `<h4 class="msg">${data.Error} !</h4>`;
        }
      });
  }
};
searchBtn.addEventListener("click", function () {
  getMovie();
});
