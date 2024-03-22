import { genRandNumber } from "./genRandNumber.js";
import { compare }from "./compare.js";


let randNr = genRandNumber(1,100);
console.log(randNr);
/*
let result = compare(50, randNr);
console.log(result);
*/
document.querySelector('.checkBtn').addEventListener('click', check)

function check(){
    let userNumber = document.querySelector('.userSzam').value
    console.log(userNumber);
    let result = compare(userNumber, randNr)
    document.querySelector('.megoldas').innerHTML = result
}