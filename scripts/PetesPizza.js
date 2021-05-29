import {Crust} from "./Crust.js"

const crusts = Crust()

export const PetesPizza = () => {
  return `
    <h1>Pete's Pizza</h1>
    <article class="pizza">
      <section class="crust_choices">
        <h2>Crusts</h2>
        ${crusts}
      </section>
      <section class="topping_choices">
        <h2>Toppings</h2>
      </section>
      <section class="size_choices">
        <h2>Size</h2>
      </section>
    </article>
  `
}