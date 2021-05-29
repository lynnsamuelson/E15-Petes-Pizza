// This is a notepad for looking at the .map method.  Not part of Pete's Pizza

const myArray = [
  {
    name: "Spoon",
    location: "Kitchen"
  },
  {
    name: "Fork",
    location: "Kitchen"
  },
  {
    name: "Car",
    location: "Garage"
  },
  {
    name: "Lamp",
    location: "Living Room"
  },
]

// for(const item of myArray) {
//   console.log(`The ${item.name} is in the ${item.location}`)
// }

const mappedArray = myArray.map(
  (item) => {
    return `The ${item.name} is in the ${item.location}`
  }
)
console.log(mappedArray)