import { UI } from "./ui.js";
import { API } from "./api.js";

const d = document;

// Instancias
const ui = new UI();

ui.formulario.addEventListener('submit', searchSong)

// Funciones
function searchSong(e){
    e.preventDefault();

    // datos del formulario
    const artist = d.getElementById('artista').value,
        song = d.getElementById('cancion').value;
    
    // validando los datos del formulario
    if(artist === "" || song === ""){
        ui.divAlert.textContent = 'Todos los campos son obligatorios';
        ui.divAlert.classList.add('error');
    
        setTimeout(() => {
            ui.divAlert.textContent = '';
            ui.divAlert.classList.remove();
            
        }, 2000);

        return;
    }

    // Instancia clase API
    const search = new API(artist, song);
    search.consultAPI();
}