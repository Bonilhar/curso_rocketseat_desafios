import {
  API_KEY, BASE_URL,
  IMG_URL,
  language,
} from './api.js'

async function getMovie() {
  let urlMovie = randomMovie()
  let response = await fetch(urlMovie)
  let movieData = await response.json()
  /*Se o filme não existe ou não tem os dados
  então ele vai fazer uma nova busca */
  if (movieData.success == false || 
    movieData.poster_path == null ||
    movieData.overview == "") {
    let contador = 0 
    do {
      contador++
      urlMovie = randomMovie()
      response = await fetch(urlMovie)
      movieData = await response.json()
      console.log(urlMovie)
    } while (movieData.success == false || 
      movieData.poster_path == null ||
      movieData.overview == "")
    console.log(contador)
  }
  

  moviePoster.src = IMG_URL + movieData.poster_path
  movieName.textContent = movieData.original_title
  movieOverview.textContent = movieData.overview
}

function randomMovie() {
  let random = Math.floor(Math.random() * 20000) + 1
  let urlMovie = BASE_URL + ${{ secrets.API_KEY_CODE}} + random + "?" + API_KEY + language
  return urlMovie
}


buttonGetMovie.addEventListener('click', getMovie)
