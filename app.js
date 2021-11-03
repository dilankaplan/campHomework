
// PRIME NUMBERS
function findPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
      let isPrime = 0;
      for (let j = 1; j <= numbers[i]; j++) { /*Yalnızca 1 e ve kendine bölünen-asal
          yani counter 2 ise asal*/
        if (numbers[i] % j == 0) {
          counter++;
        }
      }
      if (isPrime == 2) {
        console.log(numbers[i] + " is prime number")
      } else {
        console.log(numbers[i] + " is not prime number")
      }
    }
  }
  findPrime(1,2,17,19,67,100,1998,1997)

  // FRIENDS NUMBER

  function friendNumbers(friend1,friend2) {
    let friend1New=0
    let friend2New=0
    for (let i = 1; i < friend1; i++) {
         if(friend1%i){
             friend2New+=i
         }
    }
    for (let i = 1; i < friend2; i++) {
        if(friend2%i){
            friend1New+=i
        }
   }
   if (friend1new==friend2) {
       console.log("These numbers is friends numbers")
       
   }
   else{
       console.log("These numbers isn't friends numbers.")
   }
        
    }
  

  //1000-PERFECT NUMBERS
  function perfectNumbers() {
      for (let i = 0; i < 1000; i++) {
          let numbers=0
          for (let j = 0; j < i; j++) {
             if (i%j==0) {
                 numbers+=j
             }
              
          }
          if (i==numbers) {
              console.log(i+"is a perfect number")
              
          }
          
      }
      
  }
  perfectNumbers()

  //1000-PRIME NUMBERS
  function primeNumber() {
      for (let i = 0; index < 1000; i++) {
        counter=0
        for (let j = 0; j <=i; j++) {
            if (i%j==0) {
                counter++
            }
            
        }
        if (counter==2) {
            console.log(i)
        }
      }
  }
  primeNumber()


  





