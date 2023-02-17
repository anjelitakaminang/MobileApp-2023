/*Kaminang, Anjelita Ferensca */

import { fahrenheitToCelsius } from "./index.js";
import calculateBMI from "./exportDefault.js";

/* mengubah fahrenheit ke celsius*/
const tempFahrenheit = 99.2;

/*mengubah tempCelcius menjadi 2 angka(desimal) dibelakang koma*/
const tempCelcius = fahrenheitToCelsius(tempFahrenheit).toFixed(2);
console.log(`${tempFahrenheit} Fahrenheit = ${tempCelcius} Celcius`);

/*mengubah BMI function*/
const weight = 50;
const height = 1.50; /*(dalam meters)*/

/*mengubah BMI menjadi 2 angka(desimal) dibelakang koma*/
const bmi = calculateBMI(weight, height).toFixed(2);
console.log(`Body Mass Index adalah = ${bmi}`);
