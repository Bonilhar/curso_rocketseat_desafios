import {
  API_KEY, BASE_URL,
  IMG_URL,
  language,
} from './api.js'

async function getMovie() {
  moviePoster.src = ""
  movieName.textContent = ""
  movieOverview.textContent = ""
  
  let urlMovie = randomMovie()
  let response = await fetch(urlMovie)
  let movieData = await response.json()
  /*Se o filme não existe ou não tem os dados
  então ele vai fazer uma nova busca */
  if (movieData.success == false || 
    movieData.poster_path == null ||
    movieData.overview == "" ||
    movieData.adult == true) {
    let contador = 0 
    do {
      contador++
      urlMovie = randomMovie()
      response = await fetch(urlMovie)
      movieData = await response.json()
    } while (movieData.success == false || 
      movieData.poster_path == null ||
      movieData.overview == "" ||
      movieData.adult == true)
  }  

  moviePoster.src = IMG_URL + movieData.poster_path
  movieName.textContent = movieData.original_title
  movieOverview.textContent = movieData.overview
  window.scrollTo(0, document.body.scrollHeight);

}

function randomMovie() {
  let random = Math.floor(Math.random() * 853055) + 1
  let urlMovie = BASE_URL + random + "?" + API_KEY + keyCode.value
  
  return urlMovie
}


buttonGetMovie.addEventListener('click', getMovie)
