import React from 'react';
import './Image.css'

const Image = ({ url, title }) => {
    return(        
        <div className='book-top'>
            <img
                alt={ title }
                className='book-cover'
                src={ url } />            
        </div>
    );
}

export { Image };
