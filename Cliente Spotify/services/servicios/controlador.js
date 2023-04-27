import {treaerCancionesSpotify} from "./servicioSpotify.js"
import {pedirTokeEnSpotify} from "./servicioSpotify.js"

 let fila = document.querySelector("#fila")

pedirTokeEnSpotify()
    .then(function(token){
    
    treaerCancionesSpotify(token).
        then(function(respuesta){

        respuesta.tracks.forEach(function(cancion){

            let columna = document.createElement("div")
            columna.classList.add("col")

            let tarjeta = document.createElement("div")
            tarjeta.classList.add("card","h-100","shadow")

            let pista = document.createElement("audio")
            pista.classList.add("w-100")
            pista.setAttribute("controls", "controls")
            pista.src=cancion.preview_url

            tarjeta.appendChild(pista)
            columna.appendChild(tarjeta)
            fila.appendChild(columna)
        });

        console.log(respuesta.tracks[0])    
        console.log(respuesta.tracks[0].name)
        console.log(respuesta.tracks[0].preview_url)
        console.log(respuesta.tracks[0].album.images[0].url)

        })

    })



    