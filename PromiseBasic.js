let promiseOne = new Promise(function(resolve,reject){
    setTimeout(()=>{
      console.log('Async Task Completed')
      resolve()
    },1000);
    
})

promiseOne.then(()=>{
  console.log("Resolve of Promise one..");
})

//////////////////////////////////////////////////////////////////////////////////////////


new Promise(function(resolve,reject){
  setTimeout(function(){
    console.log("Async Task Of Promise Two..");
    resolve("Hii");
  },1000)
}).then(
    (msg)=>{
      console.log(`${msg} is done`); 
    }
)


//////////////////////////////////////////////////////////////////////////////////////////


let promiseThree = new Promise(function(resolve,reject){
    setTimeout(()=>{
      resolve({username:"Ritika",pwd:"123"}) 
    },1000)
         
})

promiseThree.then((user)=>{
  console.log(user);
  console.log(user.pwd);
})


// ///////////////////////////////////////////////////////////////////////////////////1


let promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
      let error = false
      if(!error){
        resolve({name:"ritika",msg:"Good Evening"})
      }
      else{
        reject("ERROR : Something went to wrong..")
      }
    },1000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.name;
}).then(function(username){
    console.log(username);
    
}).catch((error)=>{
  console.log(error);
  
}).finally(()=>{
  console.log("Either resolved or Rejected..");  
})



///////////////////////////////////// Or ///////////////////////////////////////////////// 

let promiseFive = new Promise(function(resolve,reject){
  setTimeout(function(){
    let error = false
    if(!error){
      resolve({name:"Preksha",msg:"Good Morning"})
    }
    else{
      reject("ERROR : PromiseFive went to wrong..")
    }
  },1000)
})

async function consumePromiseFive(){
   try {
    const response = await promiseFive
    console.log(response);
   } catch (error) {
    console.log(error);  
   }
    
}

consumePromiseFive()

//////////////////////////////////////////////////////////////////////////// 


// async function getdata(){
//   try {
//     const response= await fetch("https://randomuser.me/api/");
//   const data = await response.json()
//   console.log(data);
//   } catch (error) {
//     console.log("E :",error);
    
//   }
// }

// getdata()


// / ////////////////////////    OR      /////////////////////////////


fetch("https://randomuser.me/api/")
.then((response) => {
  return response.json()})
.then((response) => console.log(response))
.catch((error) => console.log(error))




