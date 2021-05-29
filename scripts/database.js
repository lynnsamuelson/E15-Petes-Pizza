const database = {
  crusts: [
    {id: 1, crustType: "Thin Crust", price: 3.50},
    {id: 2, crustType: "Hand Tossed", price: 4.00 },
    {id: 3, crustType: "Stuffed", price: 5.00},
    {id: 4, crustType: "Pan", price: 4.50 }
  ],
  toppings: [
    {id: 1, toppingType: "Pepperoni", price: 1.00},
    {id: 2, toppingType: "Bacon", price: 1.00},
    {id: 3, toppingType: "Sausage", price: 1.00},
    {id: 4, toppingType: "Mushrooms", price: 0.50},
    {id: 5, toppingType: "Onions", price: 0.50}
  ],
  sizes: [
    {id: 1, size: "Small", price: 10.00},
    {id: 2, size: "Medium", price: 15.00 },
    {id: 3, size: "Large", price: 20.00}
  ],
  orders: {}
}

export const getCrusts = () => {
  return database.crusts.map(crust =>({...crust}))
}