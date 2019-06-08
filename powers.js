// One function to rule them all...

// Click anywhere on the page
document.querySelector("body").addEventListener("click", event => {
  // If a button is clicked...
  if (event.target.tagName === "BUTTON") {
    // ...toggle the class of related sections 
    const toggleClass = (elementId, state) => {
      document.querySelector(elementId).classList.toggle(state)
    }
    if (event.target.id === "activate-flight") {
      toggleClass('#flight', 'enabled')
    }
    if (event.target.id === "activate-mindreading") {
      toggleClass('#mindreading', 'enabled')
    }
    if (event.target.id === "activate-xray") {
      toggleClass('#xray', 'enabled')
    }
    
    if (event.target.id === "activate-all") {
      let powers = event.target.parentNode.childNodes[0].nextSibling.children

      console.log(powers);
      

      powers.forEach(section => {
        console.log(section);
        
      })
      
    }
    
    if (event.target.id === "deactivate-all") {
      console.log(event)

    }
  }
});