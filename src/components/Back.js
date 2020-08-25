import React from 'react';
import './Back.css'

function Back({click}) {
    return (
        <button 
            className='ma3 pa3 grow btn' 
            onClick={() => click('Options')}>
                Back
        </button>
    );
}

export default Back;