import React from 'react'

const Select = ({value, name, change}) => (
  <div className='book-shelf-changer'>
    <select value={value} onChange={change}>
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
    </select>
  </div>
)

export { Select }
