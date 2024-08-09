/*import React from 'react'

const InputItem = () => {
  return (
    <div className='bg-slate-200 p-3 rounded-lg mt-3'>
      <input type='text' placeholder={type=='source'?'Pickup Location':'Drop Location'}
      className='bg-transparent w-full outline-none'/>
    </div>
  )
}

export default InputItem*/

import React from 'react'

const InputItem = ({ type }) => {
  return (
    <div className='bg-slate-200 p-3 rounded-lg mt-3'>
      <input 
        type='text' 
        placeholder={type === 'source' ? 'Pickup Location' : 'Drop Location'}
        className='bg-transparent w-full outline-none'
      />
    </div>
  )
}

export default InputItem

