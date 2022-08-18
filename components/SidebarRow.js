import React from 'react'
import Image from "next/image"
function SidebarRow({src,Icon,title}) {
  return (
    <div className='flex items-center cursor-pointer rounded-xl hover:bg-gray-200  p-3 space-x-4'>
    {src && (
        <img
        className='rounded-full h-6 w-6'
        src={src}
       
        />
    )}
    {Icon && <Icon className='h-8 w-8 text-blue-500'/>}
        <p className='hidden sm:inline-flex font-medium'>{title}</p>

    
    </div>
  )
}

export default SidebarRow