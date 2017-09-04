import React from 'react';
import './Select.css'

const Select = (props) => {
    return(
        <div className='book-shelf-changer'>
          <select>
            <option value='none' disabled>
                Move to...
              </option>
            <option value='currentlyReading'>
                Currently Reading
              </option>
            <option value='wantToRead'>
                Want to Read
              </option>
            <option value='read'>
                Read
              </option>
            <option value='none'>
                Nenhum
              </option>
          </select>
        </div>
    )
}

export { Select };
