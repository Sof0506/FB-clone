import React from 'react'
import Image from "next/image"
import {ChatAltIcon,
  ShareIcon,
  ThumbUpIcon} from "@heroicons/react/outline"


function Post({name,message,email,postImage,image,timestamp}) {
  return (
    <div className='flex flex-col'>
    <div className='p-5 bg-white mt-5 rounded-t-2xl shadow-xl'>
      <div className='flex items-center space-x-2'>
      <img src={image} alt=""
      />
      <div>
        <p className='font-medium'>{name}</p>
        {timestamp?(
          <p className='text-xs text-gray-400'>
          {new Date(timestamp?.toDate()).toLocaleString()}
          </p>
        ):(
          <p className='text-xs text-gray-400'>Loading</p>
        )}
       

      </div>
      </div>
      <p className='pt-4'>{message}</p>
    </div>
    {postImage && (
      <div className='relative h-56 md:96 bg-white'>
        <Image src={postImage} objectFit="cover" layout="fill" />
      </div>
    )}
    {/*Reaction/comment/share */}
    <div className='flex justify-between
     items-center rounded-b-2xl bg-white shadow-md
      text-gray-400 border-l'>
      <div className='inputIcon rounded-none rounded-br-2xl'>
      <ThumbUpIcon className='h-5'/>
      <p className='text-xs sm:text-base'>Like</p>
        
      </div>
      <div className='inputIcon'>
      <ChatAltIcon className='h-5'/>
      <p className='text-xs sm:text-base' >Comment</p>
        
      </div>
      <div className='inputIcon'>
      <ShareIcon className='h-5'/>
      <p className='text-xs sm:text-base'>Share</p>
        
      </div>
    </div>
    </div>
  )
}

export default Post