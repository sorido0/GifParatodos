 
 
 
 //Hacer peticion a una appi 
 export const getGif = async( category ) => {
    // con esta url hacemos las consulta a la appi 
    const http = 'https://api.giphy.com/v1/gifs/search?';
    const url = http  + `q=${ encodeURI( category )}&limit=10&api_key=6UGDcB7SqY5I2RMS1nYbJP1JAFh1R1SZ`; 
    // usamos fetch para la informacion del url
    const resp = await fetch( url );
    // guardo la informacion un variable data 
    const { data } = await resp.json();

    console.log(data); 

    // desestruturar los datos delas appi
    const gifs = data.map( img => {
        return {
            id: img.id,
            titulo: img.title,
            url: img.images?.downsized_medium.url,
            urlDc: img.images?.downsized.url
        }  
          
    } )
    //console.log(gifs);

    // con useState podemos usar todos los datos que estan almacenado en el arrego. 
    return gifs;
}
