const inputScheme = document.getElementById('change-scheme')


inputScheme.addEventListener('change', () => {
  inputScheme.checked ? 
  (document.body.style.backgroundColor = '#292C35') 
  : 
  (document.body.style.backgroundColor = '#F1F1F1')
})

document.getElementsByTagName('body')