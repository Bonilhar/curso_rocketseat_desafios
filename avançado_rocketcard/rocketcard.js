const url = "https://api.github.com/users/Bonilhar"

async function getData() {
  let response = await fetch(url)
  let userData = await response.json()

  console.log(userData)
  const spanInfo = document.getElementsByTagName('span')
  
  spanInfo[0].textContent = userData.following
  spanInfo[1].textContent = userData.followers
  spanInfo[2].textContent = userData.public_repos
  spanInfo[3].textContent = userData.company
  spanInfo[4].textContent = userData.location
  spanInfo[0].style.backgroundColor
  cardAvatarIMG.src = userData.avatar_url
}

buttonBackground.addEventListener('click', () => {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  cardBackground.style.backgroundColor = color

})


/*------INI------*/
getData()