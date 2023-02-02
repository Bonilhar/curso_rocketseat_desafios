const buttonSideBar = document.getElementById("menu-button")
buttonSideBar.value = "aberto"

const menuOptionsTitle = document.getElementsByClassName("menu-items-title")


buttonSideBar.addEventListener('click', openClosedMenu)

function openClosedMenu() {

  if  (buttonSideBar.value == "aberto") {
    buttonSideBar.value = "fechado"
    for (let i = 0; i < menuOptionsTitle.length; i ++) {
      menuOptionsTitle[i].classList.add("hidden-map")
    }
    document.getElementsByClassName("user-profile-photo")[0].classList.add("hidden-map")
    document.getElementsByClassName("user-profile-info")[0].classList.add("hidden-map")
    document.getElementsByClassName("menu-button-logo")[0].classList.add("hidden-map")
    document.getElementById("menu-searsh-input").classList.add("hidden-map")

    document.getElementsByClassName("menu-searsh")[0].classList.add("menu-searsh-closed")
    document.getElementsByClassName("menu")[0].classList.add("menu-closed")
    document.getElementsByClassName("menu-button")[0].classList.add("menu-closed-justify")
    document.getElementsByClassName("user-profile")[0].classList.add("menu-closed-justify")

  } 
  else {
    buttonSideBar.value = "aberto"
    for (let i = 0; i < menuOptionsTitle.length; i ++) {
      menuOptionsTitle[i].classList.remove("hidden-map")
    }
    document.getElementsByClassName("user-profile-photo")[0].classList.remove("hidden-map")
    document.getElementsByClassName("user-profile-info")[0].classList.remove("hidden-map")
    document.getElementsByClassName("menu-button-logo")[0].classList.remove("hidden-map")
    document.getElementById("menu-searsh-input").classList.remove("hidden-map")
    
    document.getElementsByClassName("menu-searsh")[0].classList.remove("menu-searsh-closed")
    document.getElementsByClassName("menu")[0].classList.remove("menu-closed")
    document.getElementsByClassName("menu-button")[0].classList.remove("menu-closed-justify")
    document.getElementsByClassName("user-profile")[0].classList.remove("menu-closed-justify")
  }
  
  
  console.log(buttonSideBar.value)
}