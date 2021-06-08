import {getToppings, setTopping} from "./database.js"

const toppings = getToppings()

document.addEventListener("change", (event) => {
    if(event.target.name === "topping"){
        setTopping(parseInt(event.target.value))
    }
})

export const Topping = () => {
    let htmlString = "<ul>"
    
    const toppingItems = toppings.map(topping=>{
        return `<li><input type="checkbox" name="topping" value="${topping.id}"/>${topping.toppingType}</li>`
    })

    htmlString += toppingItems.join(" ")

    htmlString += "</ul>"

    return htmlString
}