export function showLives(nr){
    //nr--
    if(nr==0){
        document.querySelector('.checkBtn').disabled = true;
        let uzenet = document.querySelector('.probalkozasok');
        uzenet.innerText = "Nincs több életed...";
    }
    else{
       document.querySelector('.probalkozasok').innerHTML = nr 
    }
}