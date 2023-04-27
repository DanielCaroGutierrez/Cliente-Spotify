export async function pedirTokeEnSpotify() {

    //Receta para consumir apis con 

    //1 Para onde va pa(La URL del servidor mas el endpoint)
    const  URL = "https://accounts.spotify.com/api/token"

        let datoUno = "grant_type=client_credentials"
        let datoDos = "client_id=5938fd7d0e5f4d889ba4db749d5780ad"
        let datoTres = "client_secret=63d8eca3cf88416ca881b4f92588b05b"
    
    //2 Que vas hacer mi ñero (Configuramos la peticion o request)

    const PETICION={
    
        method:"POST",

        headers:{
            "Content-Type":"application/x-www-form-urlencoded"
        },

        body:`${datoUno}&${datoDos}&${datoTres}` 
    }

    // 3 Arranque pues hermano (Consuma la API)

    let respuesta= await fetch(URL,PETICION)
    let respuestaTOKEN = await respuesta.json()


    let token=respuestaTOKEN.token_type+" "+respuestaTOKEN.access_token
    return(token);
    
}

export async function treaerCancionesSpotify(token) {

    let artista = "2pH3wEn4eYlMMIIQyKPbVR"

    const URL =`https://api.spotify.com/v1/artists/${artista}/top-tracks?market=US`    

    const PETICION={
        
        method:"GET",

        headers:{
            "Authorization":token
        }
    }       

    let respuesta= await fetch(URL,PETICION)
    let respuestaTOKEN = await respuesta.json()
    return(respuestaTOKEN);
    

}   