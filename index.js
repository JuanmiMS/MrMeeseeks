/*Archivo principal. Son practicamente casos test*/
let importaBox = require('./box');
const MrMeeseeks = require ('./MrMeeseeks');
let reality = []

//Crea la caja
let caja = importaBox.Box();

console.log("[Jerry] Press the button");
reality.push(caja.createMrMeeseek());
reality[0].makeRequest("open", "Jerry's stupid mayonnaise jar");
reality.pop();

console.log("------------------------------------------");

console.log("[Summer] Press the button");
console.log("[Summer] I wanna be popular at school!");
reality.push(caja.createMrMeeseek());
reality[0].makeRequest("be popular", "at school");
reality.pop();
