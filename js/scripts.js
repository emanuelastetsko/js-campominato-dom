const container = document.getElementById("container");
const grid = document.getElementById("grid");
let risultato = document.getElementById("result");


// All'apertura della pagina non si visualizza nesssuna tabella 
container.style.display = "none";


// Funzione per generare la tabella
function generaTabella() {
 

    let bombe= [];
    let partitaInCorso= true;
    let punteggio = 0; 
 
    // Ciclo while per generazione bombe
    while(bombe.length < 16){

        let numeroRandom = Math.floor(Math.random() * 100) + 1;

        if(!bombe.includes(numeroRandom)){
            
            bombe.push(numeroRandom);
        }
    }

    
    // Ciclo per generazione delle celle
    for (let index = 1; index <= 100; index++) {
        
        // Creazione cella 
        const cell = document.createElement("div");
        cell.classList.add("square");
        grid.append(cell);

        // Visualizzazione in pagina del numero delle celle 
        let cellNumber = document.createElement("div");
        cellNumber = [index];
        cell.append(cellNumber);
        

        //Al click controllare se c'è una bomba o meno e colorare le celle del colore appropriato  
        cell.addEventListener("click",
            function () {

                console.log("Hai cliccato la cella n." + index);
                
                if((!cell.classList.contains("red") || !cell.classList.contains("blue")) && partitaInCorso){
                    if(bombe.includes(index)){

                        console.log("Hai perso");
                        partitaInCorso=false;
                        cell.classList.add("red");
                        risultato.innerHTML = ("Il tuo punteggio è " + punteggio);
                        
                    }
                    else{
                       
                        cell.classList.add("blue");
                        punteggio++;

                    }
                }
            }
        );       
    }
}


// Funzione per svuotare la griglia
function svuotaTabella() {
    // Svuoto la tabella
    grid.innerHTML = "";
    console.log("La tabella è stata svuotata");
}

const myButton = document.getElementById("play");

// Al click deve apparire la griglia (precedentemente nascosta) con tutte le sue celle
myButton.addEventListener("click",

  function () {

    svuotaTabella();
    generaTabella();
    
    risultato.innerHTML = "";
    container.style.display = "inline";
    console.log("Il gioco è iniziato");
    
  }
);