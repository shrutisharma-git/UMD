import React from 'react'

const DownloadButton = ({disabled, onClick}) => {
  return (
      <button 
        onClick={onClick}
        disabled={disabled}
        className={`w-full py-3 rounded-md transition ${
        disabled 
        ? "bg-gray-600 text-gray-300 cursor-not-allowed"
        :"bg-blue-600 text-black hover:opacity-90"
        
        }`}
      >
        {disabled ? "Please wait..." : "Download"}
    </button>
  )
}

export default DownloadButton
