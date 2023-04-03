
import { useState } from 'react';
import { Addcategoria } from './Addcategoria';
import { GifGrid } from './GifGrid';

export const GitExpertApp = () => {

    const [categoria, setCategoria] = useState(['Demon Slayer']);

    const agregarCtg = () => {
        // Esto es para agregar elemento al Arry 
        setCategoria([...categoria, ' Mikesu ybuyava']);
    }

    //const id = useId()

    return (
        <div className='flex flex-col w-full bg-black mt-[-13px] pt-4'>
            <div className='flex content justify-center mt-3'>
                <h2 className='text-3xl text-white font-mono font-bold group-hover:text-white'> Gif Para Todos <hr /></h2>
            </div>
            <Addcategoria setCategoria={setCategoria} />
            <ul>
                {

                    categoria.map(category =>
                        //return <li key={ category }> { category }</li>
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    )
                    // <GifGrid 
                    // //key={ id } 
                    // category={ categoria }
                    // />
                }
            </ul>
        </div>
    )
}

// elHdos.propTypes = {
//     value: PropTypes.h2.isRequired
// }