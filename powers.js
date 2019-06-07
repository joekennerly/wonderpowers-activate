let flight = document.querySelector('#flight')
let xray = document.querySelector('#xray')
let mindreading = document.querySelector('#mindreading')

document.querySelector("#activate-flight").addEventListener("click", () => {
  if(flight.classList.contains('disabled')){
    flight.classList.toggle("enabled")
  }
})

document.querySelector("#activate-mindreading").addEventListener("click", () => {
  if(mindreading.classList.contains('disabled')){
    mindreading.classList.toggle("enabled")
  }
})

document.querySelector("#activate-xray").addEventListener("click", () => {
  if(xray.classList.contains('disabled')){
    xray.classList.toggle("enabled")
  }
})

document.querySelector('#activate-all').addEventListener("click", () => {

  if(xray.classList.contains('disabled')){
    xray.classList.remove("disabled")
    xray.classList.add("enabled")
  }
  if(mindreading.classList.contains('disabled')){
    mindreading.classList.remove("disabled")
    mindreading.classList.add("enabled")
  }
  if(flight.classList.contains('disabled')){
    flight.classList.remove("disabled")
    flight.classList.add("enabled")
  }
})

document.querySelector('#deactivate-all').addEventListener("click", () => {
  console.log(`deactivate all powers`);
  if(xray.classList.contains('enabled')){
    xray.classList.remove("enabled")
    xray.classList.add("disabled")
  }
  if(mindreading.classList.contains('enabled')){
    mindreading.classList.remove("enabled")
    mindreading.classList.add("disabled")
  }
  if(flight.classList.contains('enabled')){
    flight.classList.remove("enabled")
    flight.classList.add("disabled")
  }
})