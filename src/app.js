/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ["The  dog", "My grandma", "His turtle", "My bird"]; // 0 - 3

  let action = ["ate", "peed", "crushed", "broke"]; // 0 - 3

  let what = ["my homework", "the keys", "the car"]; // 0 - 2

  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ]; // 0 - 4

  let x = Math.floor(Math.random() * who.length);
  // Aca queremos crear un numero al azar para  "action"

  let y = Math.floor(Math.random() * action.length);
  // Aca queremos crear un numero al azar para ""action"

  let w = Math.floor(Math.random() * what.length);
  // Aca queremos crear un numero al azar para "what"

  let z = Math.floor(Math.random() * who.length);
  // Aca queremos crear un numero al azar para "when"

  console.log(who[x] + " " + action[y] + " " + what[w] + " " + when[z] + ".");

  document.getElementById("excuse").innerHTML =
    who[x] + " " + action[y] + " " + what[w] + " " + when[z] + ".";
};

/*
let who =['The  dog','My grandma','His turtle','My bird'];  // 0 - 3
let action = ['ate','peed','crushed','broke'];              // 0 - 3
let what = ['my homework', 'the keys', 'the car'];          // 0 - 2
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying']; // 0 - 4

function excuse() {
    let x = Math.floor(Math.random()*who.length); // Aca queremos crear un numero al azar para  "action"
    let y = Math.floor(Math.random()*action.length); // Aca queremos crear un numero al azar para ""action"
    let w = Math.floor(Math.random()*what.length); // Aca queremos crear un numero al azar para "what"
    let z = Math.floor(Math.random()*who.when); // Aca queremos crear un numero al azar para "when"
    
    console.log(who[x] + " " + action[y] + " "  + what[w] + " "  + when[z] + "."  );
    // aca se imprimira la posicion "x" de los arrays "who" y "action"
    // Tambien se imprimira la posicion "y" del array "what" 
    // Y pot ultimo imptimita la posicion "z" del array "when"
    // Ademas dejamos espacio en blanco " ", para que se vea bien la oracion.
}
*/
