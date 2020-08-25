import React from 'react';
import './Option.css'

function Option({name, click}) {
    return(
        <button className='tc dib br3 grow bw2 shadow-5 sans-serif box' onClick={() => click(name)}>
            <h1>{name}</h1>
        </button>
    );
};

export default Option;