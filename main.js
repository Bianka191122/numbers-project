import { genRandNumber } from "./genRandNumber.js";
import { compare }from "./compare.js";

let randNr = genRandNumber(1,100);
console.log(randNr);

let result = compare(50, randNr);
console.log(result);

document.querySelector('.checkBtn').addEventListener('.click', check)

function check(){
    
    document.querySelector('').innerHTML = compare

}