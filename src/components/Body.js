import React from 'react';
import OptionList from './OptionList';
import Numbers from '../containers/Numbers'

function Body({display, click}) {
    switch(display) {
        case 'Options':
            return <OptionList click={click}/> 
        
        case 'Numbers API':
            return (
                <div className='tc sans-serif ma2'>
                    <Numbers click={click}/>
                </div>
            );
        
        default:
            console.log(display);
            return <h1>Something went wrong!</h1> ;
    }

}

export default Body;