/* Kaminang, Anjelita Ferensca
 */

/* no. 1 Promise */
let condition =true;
let helloword = new Promise((resolve) => {
    setTimeout(()=> {
        resolve("hello word");
    }, 2000);
});


async function massages(){
    const msg = await helloword;
    console.log(msg);
}

/* no. 2 Fetch */
function ambilDataUser(){
    fetch("https://reqres.in/api/users")
    .then(function(response){
        return response.json();
    })
    .then(function (users){
        console.log(users.data);
        
    });
}
console.log(ambilDataUser());

/* no. 3 Async Await */
async function ambilDataUser(){
    await fetch("https://reqres.in//api/users")
    .then(function (response){
        return response.json();
    })
        .then(function(users){
            console.log(users.data);
        });
    }
console.log(ambilDataUser());

/* no. 4 Axios */
axios.get("https://reqres.in/api/users.json") 
.then(response => (this.info = response.ambilDataUser));

const axios = require("axios");
