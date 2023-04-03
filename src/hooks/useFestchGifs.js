
import { useState, useEffect } from 'react';
import { getGif } from './../helpcomp/Getgifs';


export const useFestchGifs = ( category ) => {

    const [ state , setState] = useState({
        data: [],
        loading: true
    });
        useEffect(() => {

            getGif( category )
                .then( setimegenen => {
                        setState
                        (
                            {
                                data: setimegenen,
                                loading: false
                            }
                        );
                });

        },  [ category ] )
    return state; // retorna el arreglo objetot {data[]. loading: true };
}