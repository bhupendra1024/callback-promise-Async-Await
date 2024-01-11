//For personal  reading

Callback -  function called as parameter in another function

fucntion one(cb) {
  print.. Step 1
  cb(); //calls the function in the parameter
}

function two(){
  print.. Step 2
}

//Invoking function one() with function two() as it's parameter

one(two)

prints
  Step 1
  Step 2


  Call back Hell forms a pattern below

  --------
    ---------
      ---------
        ---------
      ------
     -----
   ----

                               Promise Cycle 
                                     |
                                  Pending
                                     |
                            Resolve      Reject
                              |            |
                            .then          |
                              |            |
                            .then          |
                              |          .catch(err)
                                |        |
                                 .finally

* Promise Chaining { .then -> .then }
* Error Handler { .catch } 
* Finally Handler { .finally } runs when the entire execution is done regardless

Async {

  * try
  * catch
  * finally
}

read from the Async.js and Await.js for Async/Await functions 
