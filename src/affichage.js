import React from 'react';
import './App.css';


const espace = (rib) => {

    let result = ''
    for (let i = 0; i < 16; i += 4) {
        result += rib.slice(i, i + 4) + ' '
    }
    return result
}



const slash = (sl) => {
    if (sl[2]) {

        return sl.slice(0, 2) + '/' + sl.slice(2)
    }
}



function Affichage(props) {
    return (
        <div >
            <div className='image'>
                <p className='number'> {espace(props.number)}</p>
                <p className='nom'>{props.nom}</p>
                <p className='date'> <span>{slash(props.date)}</span> </p>
            </div>
        </div>
    );
}

export default Affichage;

