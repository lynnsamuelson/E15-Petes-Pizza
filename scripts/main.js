import {PetesPizza} from "./PetesPizza.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
  mainContainer.innerHTML = PetesPizza()
}

renderAllHTML()

document.addEventListener(
  "stateChanged", event => {
    renderAllHTML()
  }
)