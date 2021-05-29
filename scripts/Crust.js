import {getCrusts} from "./database.js"

const crusts = getCrusts()

export const Crust = () => {
  let crustHTML = "<ul>"

  const crustOptions = crusts.map(
    (crust) => {
      return `<li><input type="radio" name="crust" value=${crust.id} />${crust.crustType}</li>`
    }
  )

  crustHTML += crustOptions.join("")
  crustHTML += "</ul>"
  return crustHTML


  /*This is an example with a for of loop to render the inputs*/
  // let crustHTML = "<ul>"
  // for (const crust of crusts) {
  //   crustHTML += `<li><input type="radio" name="crust" value="${crust.id}" />${crust.crustType}</li>`
  // } 
  // crustHTML += "</ul>"
  // return crustHTML
}