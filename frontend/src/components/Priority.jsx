import React from 'react'

const Priority = ({name}) => {
  return (
    <div className='text-[14px] font-medium bg-[#f9f9f9] border border-[#dfe3e6] rounded-[5px] py-0.5 px-2.5 cursor-pointer w-fit inline mr-2'>
        {name}
    </div>
  )
}

export default Priority