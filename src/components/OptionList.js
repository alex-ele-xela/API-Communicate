import React from 'react';
import Option from './Option';

function OptionList({click}) {
    return(
        <div className='tc'>
            <Option name='Numbers API' click={click}/>
        </div>
    );
};

export default OptionList;
