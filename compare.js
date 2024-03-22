export function compare(userNumber, randNumber){
    if(userNumber<randNumber){
        return 'A te számod kisebb!'
    }
    else if(userNumber>randNumber){
        return 'A te számod nagyobb!'
    }
    else{
        console.log("valami");
        document.querySelector('.probalkozasok').innerHTML = "bkbcrj61"
        document.querySelector('.checkBtn').disabled = true
        return 'Kitaláltad!'
    }
}