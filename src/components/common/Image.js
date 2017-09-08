import React from 'react'
import './image.css'

const Image = ({ url, title }) => (
  <div className='thumbnail'>
    <img
      alt={title}
      src={url} />
  </div>
)

export { Image }
