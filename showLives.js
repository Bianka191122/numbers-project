export function showLives(nr){
    nr--
    document.querySelector('.probalkozasok').innerHTML += nr

    if(nr==0){
        document.querySelector('.checkBtn').disabled=true;
        let uzenet = document.querySelector('.megoldas');
        megoldas.innerText = "Nincs több életed...";
    }
}