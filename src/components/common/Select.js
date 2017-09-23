import React from 'react'

const Select = ({value, name, change}) => (
  <div className='book-shelf-changer'>
    <select value={value} onChange={change}>
      <option disabled>
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
      <option default value='none'>
        None
      </option>
    </select>
  </div>
)

export { Select }
