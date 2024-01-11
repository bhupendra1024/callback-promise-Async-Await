
let Stocks = {
  fruits: ["strawberries", "grapes", "bananas", "apple"],

  liquid: ["water", "ice"],

  holder: ["cone", "cup", "stick"],

  toppings: ["chocolate", "peanuts"]
};

let is_shop_open = true;


// Promise 
// let Order = () => {

//   return new Promise( (resolve, reject) => {
//     if(){
//       resolve()
//     }
//     else{
//       reject()
//     }
//   })
// }


// Above promise syntax in Async syntax
// try, catch, finallly to run inside Async

async function Order(){
  try{
    await abc; 

  }

  //Error Handler 
  catch(error){
    console.log('abc does not exist');
  }

  finally{
    console.log("run code anyway")
  }
}


Order()

  // .then(() => {           //then functions can runs outside the Async
  //   console.log("hello")
  // })




