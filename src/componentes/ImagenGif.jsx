import { saveAs } from 'file-saver';
import React from 'react'



// Siempre para recibir datos desestruturados hay que usar llaves. {}
export const ImagenGif = ({ titulo, url, urlDc }) => {

    //Button to download gif
    const downloadGif = () => {
        saveAs(urlDc, `${titulo}.gif`)

    }


    return (
        <div className='gird grid-cols-3 gap-4 ms:grid-col-2  md:grid-col-2 '>
            {/* Contenedor para el la imagen, titulo, botton de descarga  */}
            <div className='bg-zinc-800 rounded-lg shadow-lg p-4 w-full h-[400px]'>
                <h3 className='text-center text-xs sm:text-sm md:text-md lg:text-lg font-bold text-white m-2'>{titulo}</h3>
                <img src={url} title={titulo} className='w-full h-4/6'></img>

                <div className='flex justify-center mt-2'>
                    <button onClick={downloadGif} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'> Descargar </button>

                </div>


            </div>



        </div>
    )
}
