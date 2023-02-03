function displayNoneAdd(id) {
  let element = document.getElementById(id)
  element.classList.add("display-none")
}

function displayNoneRemove(id) {
  let element = document.getElementById(id)
  element.classList.remove("display-none")
}

window.addEventListener ('resize', onResize)

function onResize() {
  let idSizeBigScreen = 
    [
      'blur-1', 
      'blur-2',
      'menu', 
      'nav-logo-desktop',
      'nav-my-coffe',
    ]

    let idSizeSmallScreen = 
    [
      'nav-logo-mobile',
      'blur-mobile',
      'main-title',
      'main-my-coffe',
    ]

  if ( window.innerWidth < 1300) {
    smallScreen()
    idSizeBigScreen.forEach(displayNoneAdd)
    idSizeSmallScreen.forEach(displayNoneRemove)
    document.getElementById("menu").classList.remove("menu-big")

  }
  else {
    idSizeSmallScreen.push("nav-button-open", "nav-button-closed")
    idSizeSmallScreen.forEach(displayNoneAdd)
    idSizeBigScreen.forEach(displayNoneRemove)
    document.getElementById("menu").classList.add("menu-big")

  }
}

/*MENU HAMBURGUER*/
const buttonMenuOpen = document.getElementById("nav-button-open")
const buttonMenuClosed = document.getElementById("nav-button-closed")

function smallScreen() {
  document.getElementsByTagName("nav")[0].classList.remove("nav-menu-height")
  document.getElementsByTagName("main")[0].classList.remove("display-none")
  document.getElementById("rocketcoffe-img").classList.remove("display-none")
  document.getElementById("blur-mobile").classList.remove("display-none")
  document.getElementById("menu").classList.add("display-none")
  document.getElementById("menu").classList.remove("menu-small")
  buttonMenuOpen.classList.remove("display-none")
  buttonMenuClosed.classList.add("display-none")
}

buttonMenuClosed.addEventListener('click', smallScreen)

buttonMenuOpen.addEventListener('click', () => {
  document.getElementsByTagName("nav")[0].classList.add("nav-menu-height")
  document.getElementsByTagName("main")[0].classList.add("display-none")
  document.getElementById("rocketcoffe-img").classList.add("display-none")
  document.getElementById("blur-mobile").classList.add("display-none")
  document.getElementById("menu").classList.remove("display-none")
  document.getElementById("menu").classList.add("menu-small")
  buttonMenuOpen.classList.add("display-none")
  buttonMenuClosed.classList.remove("display-none")
})




/*initializing default screen*/
onResize()