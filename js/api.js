import { UI } from "./ui.js";

// Variables
const d = document;

// Instancia UI
const ui = new UI();

export class API {
    constructor(artist, song){
        this.artist = artist;
        this.song = song;
    }

    consultAPI(){
        const url = `https://api.lyrics.ovh/v1/${this.artist}/${this.song}`;

        spinner();

        fetch(url)
            .then(response => response.json())
            .then( data => {

                cleanHTML();

                if(data.lyrics){
                    const { lyrics } = data;   
                    ui.divResult.textContent = lyrics;
                    ui.divHeading.textContent = `${this.artist} - ${this.song}`;
                    
                } else {
                    ui.divAlert.textContent = 'No se encuentra la letra';
                    ui.divAlert.classList.add('error');
                    ui.divHeading.textContent = '';
                    setTimeout(() => {
                        ui.divAlert.textContent = '';
                        ui.divAlert.classList.remove();
                        
                    }, 2000);
                }
            })
    }
}

// Limpia el HTML generado con los datos
function cleanHTML(){
    while(ui.divResult.firstChild){
        ui.divResult.removeChild(ui.divResult.firstChild);
    }
}

// Spinner de carga
function spinner(){
    cleanHTML();

    const divSpinner = d.createElement('DIV');
    divSpinner.classList.add('spinner');

    ui.divResult.appendChild(divSpinner);
}