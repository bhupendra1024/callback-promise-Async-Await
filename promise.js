// Using Promise to run th ice-cream shop


let Stocks = {
  fruits: ["strawberries", "grapes", "bananas", "apple"],

  liquid: ["water", "ice"],

  holder: ["cone", "cup", "stick"],

  toppings: ["chocolate", "peanuts"]
};

let is_shop_open = true;

let Order = (time, work) => {

  return new Promise( (resolve, reject ) => {

    if(is_shop_open){

      setTimeout(() => {
        resolve(work());
      }, time)

    }
    
    else{
      reject(console.log('Our shop is closed '))
    }
  } )
}

Order(2000, ()=>console.log(`${Stocks.fruits[1]} was selected`))


//then function 


.then(() => {
  return Order(0,() => console.log("Production has started"))
})

.then(() => {
  return Order(2000, ()=> console.log("The food was chopped"))
})

.then(()=> {
  return Order(1000, ()=> console.log(`${Stocks.liquid[0]} and ${Stocks.liquid[1]} was selected`))
})

.then(() => {
  return Order(2000, () => console.log(`the ice-cream was placed on ${Stocks.holder[0]}`))
})

.then(() => {
  return Order(3000, () => {console.log(`${Stocks.toppings[0]} was added as toppings`)})
})

.then(() => {
  return Order(2000, () => {console.log('Ice-Cream Served')})
})


// Error Handling -  Runs when is_shop_open = FALSE

.catch(() => {
  console.log("Customer Left")
})


//Fnally handler

.finally(() => {
  setTimeout(() => {
    console.log('Day Ended!!!! Our Shop is Closed!')
  }, 2000)
})