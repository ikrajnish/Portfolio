import React from 'react'

function Button({onClick, text}) {
  return (
    <div>
        <button 
            onClick={onClick}
            className='bg-[#915EFF] px-4 py-2 rounded-md cursor-pointer text-[16px] font-semibold '>
                {text}
        </button>
    </div>
  )
}

export default Button