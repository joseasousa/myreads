import React from 'react';

const Image = ({ url, title }) => {
    return(          
        <div className='book-cover'>
            <img
                alt={ title }
                src={ url } />            
        </div>
    );
}

export { Image };
