import React from 'react'
import spinner from './assets/spinner.gif'

function Spinner() {
  return (
    <div  className="className='w-100 mt-20 flex justify-center"   >
        <img src={spinner}
         alt="loading"
         width={180} />
    </div>
  )
}

export default Spinner