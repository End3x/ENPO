import React from 'react';

import './header.css';

export default () => {
    return(
        <div className='bg-primary text-white d-flex py-3' > 
            <div className='container d-flex flex-wrap'>
                <h1 className=" display-1 text-right align-self-centerm-0 p-3">ENPO</h1>
                <h2 className=" display-5 text-left align-self-center m-0 p-3 border-left border-3" > 
                    Ethiopian Norwegian       <br/> 
                    Profesional Organisation
                </h2>
            </div>  
        </div>
    );
}