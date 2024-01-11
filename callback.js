// callback hell looks like thi

let Stocks = {
  fruits: ["strawberries", "grapes", "bananas", "apple"],

  liquid: ["water", "ice"],

  holder: ["cone", "cup", "stick"],

  toppings: ["chocolate", "peanuts"]
};

let Order = (fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${Stocks.fruits[fruit_name]} were selected`);

    call_production();
  }, 2000);
};

let Production = () => {
  setTimeout(() => {
    console.log("production has started");
    setTimeout(() => {
      console.log("the fruits has been chopped");

      setTimeout(() => {
        console.log(`${Stocks.liquid[0]} and ${Stocks.liquid[1]} was added`);
        
        setTimeout(()=>{
          console.log(`the ice-cream was placed on ${Stocks.holder[1]}`)
          
          setTimeout(()=>{
            console.log(`${Stocks.toppings[0]} was added as toppings`)
            
            setTimeout(()=>{
              console.log('Ice-Cream Served')
            },2000)
          },3000)
        },1000)
      }, 1000);
    }, 2000);
  }, 1000);
};

Order(1, Production);
