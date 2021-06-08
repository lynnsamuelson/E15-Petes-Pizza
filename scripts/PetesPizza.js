import {Crust} from "./Crust.js"
import {Orders} from "./Orders.js"
import {addCustomerOrder} from "./database.js"
import {Topping} from "./Topping.js"
import {Sizes} from "./Size.js"

 document.addEventListener(
   "click",
   (event) => {
     if(event.target.id === "orderPizza"){
       addCustomerOrder()
     }
   }
 )

export const PetesPizza = () => {
  return `
    <h1>Pete's Pizza</h1>
    <article class="pizza">
      <section class="crust_choices">
        <h2>Crusts</h2>
        ${Crust()}
      </section>
      <section class="topping_choices">
        <h2>Toppings</h2>
        ${Topping()}
      </section>
      <section class="size_choices">
        <h2>Size</h2>
        ${Sizes()}
      </section>
      <section>
        <button id="orderPizza">Create Pizza</button>
      </section>
      <section class="orders">
        <h2>Orders</h2>
        ${Orders()}
      </section>
    </article>
  `
}