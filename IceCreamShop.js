let Stocks = {
  fruits: ["strawberries", "grapes", "bananas", "apple"],

  liquid: ["water", "ice"],

  holder: ["cone", "cup", "stick"],

  toppings: ["chocolate", "peanuts"]
};

let is_shop_open = true;

function time(ms){
   return new Promise ((resolve, reject) => {
    if(is_shop_open){
      setTimeout(resolve, ms)
    }
    else{
      reject(console.log('Shop is Closed!'))
    }
   })
}

async function kitchen(){

  try{

    await time(2000)
    console.log(`${Stocks.fruits[0]} was Picked `)

    await time(0)
    console.log("Production has started")

    await time(2000)
    console.log("The food was chopped")

    await time(1000)
    console.log(`${Stocks.liquid[0]} and ${Stocks.liquid[1]} was selected`)

    await time(2000)
    console.log(`the ice-cream was placed on ${Stocks.holder[0]}`)

    await time(3000)
    console.log(`${Stocks.toppings[0]} was added as toppings`)

    await time(2000)
    console.log('Ice-Cream Served')
  }

  catch(error){
    console.log('Customer Left')
  }

  finally{
    setTimeout(() => {
      console.log('Day ended, Shop is Closed')
    }, 2000);
  }


}

//invoking 
kitchen();