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
    {id: 5, toppingType: "Onions", price: 0.50},
    {id: 6, toppingType: "Anchovies", price: 0.50},
  ],
  sizes: [
    {id: 123092309, size: "Small", price: 10.00},
    {id: 22323, size: "Medium", price: 15.00 },
    {id: 32838292938, size: "Large", price: 20.00}
  ],
  orders: [],
  orderBuilder: { 
    toppings: []
  }
}

export const getCrusts = () => {
  return database.crusts.map(crust =>({...crust}))
}

export const setCrust = (id) => {
  database.orderBuilder.crustId = id
}

export const getOrders = () => {
  return database.orders.map(order => ({...order}))
}

export const getToppings = () => {
  return database.toppings.map(topping => ({...topping}))
}

export const setTopping = (id) => {
  database.orderBuilder.toppings.push(id)
  // database.orderBuilder.toppingId = id
}

export const getSizes = () => {
  return database.sizes.map(size => ({...size}))
}

export const setSize = sizzleId => {
  database.orderBuilder.sizeId = sizzleId
}

export const addCustomerOrder = () => {
  const newOrder = {...database.orderBuilder}

  const lastIndex = database.orders.length - 1
  if(lastIndex){
    newOrder.id = database.orders.length +1
  } else {
    newOrder.id = database.orders[lastIndex].id + 1
  }


  database.orders.push(newOrder)
  database.orderBuilder = {toppings:[]}

  document.dispatchEvent(new CustomEvent("stateChanged"))
}