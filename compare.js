export function compare(userNumber, randNumber){
    if(userNumber<0 || userNumber>100){
        return 'Helytelen szám!'
    }
    else if(userNumber == ""){
        return 'Nem is írtál be semmit!'
    }
    else if(userNumber<randNumber){
        return 'A te számod kisebb!'
    }
    else if(userNumber>randNumber){
        return 'A te számod nagyobb!'
    }
    else if(userNumber == randNumber){
        document.querySelector('.probalkozasok').innerHTML = ""
        document.querySelector('.checkBtn').disabled = true
        return 'Kitaláltad!'
    }
    else{
        return "Helytelen adat!"
    }
}