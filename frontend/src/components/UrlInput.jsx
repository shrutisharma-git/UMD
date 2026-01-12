import React from 'react'

const UrlInput = ({url, setUrl}) => {
  return (
    <input 
      type="text"
      value={url}
      onChange={(e)=> setUrl(e.target.value)}
      placeholder='Paste URL here '
      className='w-full mb-4 p-3 rounded-md bg-gray-900 border border-gray-700 outline-none'
    />
  )
}

export default UrlInput
