const dateHourLaunch = document.querySelector("#date-for-launch")


dateHourLaunch.addEventListener('change', () => {
  let countdown = setInterval( () => {
    let countDownDate = new Date(dateHourLaunch.value);
  
     let now = new Date().getTime();
     let distance = countDownDate - now;
   
     let days = Math.floor(distance / (1000 * 60 * 60 * 24));
     let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     let seconds = Math.floor((distance % (1000 * 60)) / 1000);
     
     let hora = days + " : " + hours + " : "+ minutes + " : " + seconds
  
     document.getElementsByClassName("launch-timer-count")[0].innerHTML = hora
  
     if (distance < 0) {
       clearInterval();
       document.getElementsByClassName("launch-timer-count")[0].innerHTML = "O foguete decolou"; 
     }
  }, 1000)
})