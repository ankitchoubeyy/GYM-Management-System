import React from 'react'

const Heading = ({heading}) => {
  return (
    <div className='text-center my-5 text-xl md:text-2xl lg:text-4xl font-bold'>
        {heading}
    </div>
  )
}

export default Heading