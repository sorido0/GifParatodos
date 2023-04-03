import React from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types';

// Esta en la forma de recibir una funcion de otro componente 
export const Addcategoria = ({ setCategoria }) => {

    const [inputValue, setinputValue] = useState([]);

    const cargarInput = (e) => {
        setinputValue(e.target.value)
    }

    const envioFormulario = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategoria(cat => [inputValue, ...cat]);
            setinputValue('');
        }

    }

    return (
        <dir className="flex w-full justify-center">

            <form onSubmit={envioFormulario} className='d-flex m-2 w-full mx-20 '>
                <input type="text" value={inputValue} onChange={cargarInput} placeholder='Buscar..'
                    className='mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm
                                 placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
                />
            </form>

        </dir>
    )
}


Addcategoria.propTypes = {
    setCategoria: PropTypes.func.isRequired
}