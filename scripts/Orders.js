import {
  getOrders,
  getCrusts,
  getToppings,
  getSizes
} from "./database.js"

const buildOrderListItem = (order) => {
  //order has the crustId, toppingId, and sizeId
  const crusts = getCrusts()
  const toppings = getToppings()
  const sizes = getSizes()

  const foundCrust = crusts.find(
    (crust) => {
      return crust.id === order.crustId
    }
  )

    //Need to update this to include all toppings
    // const foundTopping = toppings.find(
    // (topping) => {
    //   return topping.id === order.toppingId
    // }
    // )
    let totalToppingsPrice = 0
    let toppingsString = ""
    for(const orderTopping of order.toppings) {
      const foundTopping = toppings.find(
        (topping) => {
          return topping.id === orderTopping
        }
      )
      toppingsString += `${foundTopping.toppingType}, ` 
      // toppingsString.push(foundTopping.toppingType)
      totalToppingsPrice += foundTopping.price 
    }
    
    const foundSize = sizes.find(size => size.id === order.sizeId)
    
  if (foundCrust && foundSize) {
    const totalCost = foundCrust.price + totalToppingsPrice + foundSize.price
    
    //Need to update this to include all toppings
    // return `
    //   <li> Order #${order.id} will contain a
    //   ${foundCrust.crustType} crust,
    //   is a ${foundSize.size} size,
    //   ${foundTopping.toppingType} topping, and
    //   cost $${totalCost}.
    //   </li>
    // `
    return `
      <li> Order #${order.id} will contain a
      ${foundCrust.crustType} crust,
      is a ${foundSize.size} size,
       and contians ${toppingsString} and
      cost $${totalCost}.
      </li>
    `
  } else {
    return '<li>Something is missing from this order!</li>'
  }
}

export const Orders = () => {
  const orders = getOrders()
   let html = "<ul>"

   const listItems = orders.map(buildOrderListItem)

  //  const listItems = orders.map(order => {
  //    return `<li>The crust id is ${order.crustId}</li>`
  //  })
   html += listItems.join("")
   html += "</ul>"

   return html
}