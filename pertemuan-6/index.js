// hari selasa 31 Januari 2023
// Spread Operator

//let numbers = [1, 2, 3, 4, 5];

//console.log(numbers);

//console.log(...numbers);

//kegunaan spread operator :

//1. duplikasi array 
 //let numbers2 = [...numbers];

 //numbers.push(6);

 //console.log(numbers2);

 //2. menggabungkan array 

 // menggunakan concat 
 //let numbers1 = [1, 2, 3]

 //let numbers2 = [5, 6, 7]
 //let numbers3 = [8, 9, 10]

 //let combineNumbers = numbers1.concat(numbers2, numbers3)

 //console.log(combineNumbers);

//contoh 2 :
 //let numbers1 = [1, 2, 3]

 //let numbers2 = [5, 6, 7]
 //let numbers3 = [8, 9, 10]

 //let combineNumbers = numbers1.concat(numbers2, numbers3)
 //let combineNumbers6 = [...numbers1, 4, ...numbers2, ...numbers3];
 //console.log(combineNumbers6);

 // jika mau hapus array hanya tersisa elemen yang ada di dalamnya :

 /* let numbers1 = [1, 2, 3]

 let numbers2 = [5, 6, 7]
 let numbers3 = [8, 9, 10]

 let combineNumbers = numbers1.concat(numbers2, numbers3)
 let combineNumbers6 = [...numbers1, 4, ...numbers2, ...numbers3];
 console.log(...combineNumbers6);
 */

 /* let john = {
    fullName : "john doe",
    age : 35,
    address : "manado",
 };

 john = {...john, job : "teacher"};
 console.log(john);
 */
//Destructuring -> melihat urutan 
/* let numbers= [1, 2, 3, 4, 5];

let [a, b, c, d, e] = numbers;
//destrukturisasi array akan melihat urutan tiap elementnya
console.log(numbers);
 */
/* let john = {
    fullName : "john doe",
    age : 35,
    address : "manado",
 };

let {fullName, age, address } = john;
//kita mendestructuring harus nama objek yang digunakan.
console.log(fullName);

let {age: umur} = john;
//mendesctruturing array tidak peduli dengan posisi namanya.
console.log(umur);

//halo nama saya john doe, umur saya 35 tahun dan saya tinggal di manado. 

const ucapkanSalam = ({fullName}) => {
    let kalimat = `halo nama saya ${fullName}`;
    console.log(kalimat);
};

ucapkanSalam(john);

 */