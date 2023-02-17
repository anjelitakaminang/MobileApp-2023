/* Asynchronous JS
    asynchronous unblocking


*/
//synchronous (antrian) -> blocking
/* console.log("baris 1");
console.log("baris 2");
console.log("baris 3");
 */
/* setTimeout(()=>{
    console.log{"proses 1"};
}, 3000);

console.log("proses 2");
console.log("proses 3"); */

//1. Parallel


//2. concurent -> ada kepastian dan berurutan sesuai waktu yang ditunggu 

/* setTimeout(() =>{
    console.log(`proses 1`);
    setTimeout(() =>{
        console.log(`proses 2`);
        setTimeout(() =>{
            console.log(`proses 2`);
    )
   
    }
) */




//promise
/* let condition = true;

let newPromise= new Promise((resolve, reject) => {
    if (true){
        resolve(`berhasil`);
    }
        
    else {
    reject(`gagal`);
}
    });
 */

//cara 1 : then-catch

/* newPromise
.then((result) => console.log(result));
.catch((error) => console.log(error)); */


//cara 2 : async-wait (bungkus dalam function)

/* const getData = async () => {

    let output = await newPromise;
    console.log(output);
};


//no. 4 Axios
axios.get("https://reqres.in/api/users.json") 
.then(response => (this.info = response.ambilDataUser));

const axios = require("axios");

getData(); */




