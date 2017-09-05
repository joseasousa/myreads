import React from 'react';

const Select = ({value, change}) => {
    return(
        <div className='book-shelf-changer'>
          <select value={value} onChange={() => change}>            
            <option value='currentlyReading'>
                Currently Reading
            </option>
            <option value='wantToRead'>
                Want to Read
            </option>
            <option value='read'>
                Read
            </option>            
          </select>
        </div>
    )
}

export { Select };
