import React from 'react'
import { ImagenGif } from './ImagenGif';
import { useFestchGifs } from '../hooks/useFestchGifs';


// Esto recibia un category -- cambio a categoria
export const GifGrid = ({ category }) => {

    const { data: imegenen, loading } = useFestchGifs(category);

    // Aqui atraparemos los datos del arreglo. usando { useState }
    // const [imegenen, setimegenen] = useState([]);

    // useEffect( () => {
    //     getGif( category )
    //         .then( setimegenen );
    //         // Esto es solo por su la categori cambia.
    // }, [ category ]);

    return (
        <div className='flex flex-col justify-center m-10 ' >
            <div className='flex justify-center'>
                <h3 className='text-white font-mono text-3xl m-2 flex text-center'> {category} </h3>
                {loading && <p className='animate__animated animate__flash' >Loading...</p>}
            </div>

            <div className='grid grid-cols-1 gap-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 lg:grid-cols-3'>
           
                    {
                        // Con el uso de los estados podemos dar uso las datos. ( Para una mejor lectura del codigo usaremos { para destruturar}
                        imegenen.map(img => (
                            <ImagenGif
                                key={img.id}
                                {...img}
                            />
                        ))
                    }
             

            </div>
           


          
        </div>

    )

}