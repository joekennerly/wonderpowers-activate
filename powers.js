// One function to rule them all...

// If a button is clicked...
document.querySelector(".btn").addEventListener("click", event => {
  // ...toggle the class of related sections
  const toggleClass = (elementId, state) => {
    document.querySelector(elementId).classList.toggle(state);
  };
  
  if (event.target.id === "activate-flight") {
    toggleClass("#flight", "enabled");
  }
  if (event.target.id === "activate-mindreading") {
    toggleClass("#mindreading", "enabled");
  }
  if (event.target.id === "activate-xray") {
    toggleClass("#xray", "enabled");
  }

  let powers = event.target.parentNode.childNodes[0].nextSibling.children;

  if (event.target.id === "activate-all") {
    for (let i = 0; i < powers.length; i++) {
      let element = powers[i];
      element.classList.add("enabled");
    }
  }

  if (event.target.id === "deactivate-all") {
    for (let i = 0; i < powers.length; i++) {
      let element = powers[i];
      element.classList.remove("enabled");
    }
  }
});
