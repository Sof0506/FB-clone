import React, { useRef, useState } from 'react'
import Image from "next/image"
import {useSession} from "next-auth/react"
import {EmojiHappyIcon} from "@heroicons/react/outline"
import {CameraIcon,CollectionIcon,VideoCameraIcon} from "@heroicons/react/solid"
import {addDoc, collection,doc, serverTimestamp, updateDoc} from "firebase/firestore"
import {db,storage} from "../firebase"
import toast from 'react-hot-toast'
import { getDownloadURL, ref, uploadString } from 'firebase/storage'
function InputBox() {
    const inputRef=useRef(null)
    const filePickerRef=useRef(null)
    const [imageToPost,setImageToPost]=useState(null)

    const setPost=async(e)=>{
    
      e.preventDefault();
      if(!inputRef.current.value) return ;
     

      const postRef=collection(db,"Posts")
   const docref=  await addDoc(postRef,{
      name:session.user.name,
      email:session.user.email,
      image:session.user.image,
      message:inputRef.current.value,
      timestamp:serverTimestamp(),
      })

    const imageRef=ref(storage, `Posts/${docref.id}/image`);
    await uploadString(imageRef,imageToPost,"data_url").then(async (snapshot)=>{
    const downloadURL= await getDownloadURL(imageRef);
    await updateDoc(doc(db,"Posts",docref.id),{
        postImage:downloadURL,
    });
}
);

setImageToPost(null);
inputRef.current.value="";
toast.success("Successfuly posted")
  
  }

    const addImageToPost=(e)=>{
        const reader=new FileReader();
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0]);
        }
        reader.onload=(readerEvent)=>{
            setImageToPost(readerEvent.target.result)
        }


    }

    const removeImage=()=>{
        setImageToPost(null)
    }

    const {data:session}=useSession();
  return (
    <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
    <div className='flex space-x-4 p-4 items-center'>
        <Image
        className='rounded-full'
        src={session?.user?.image}
        width={40}
        height={40}
        layout="fixed"
        />
        <form className='flex flex-1'>
        <input type="text"
        ref={inputRef}
         className='rounded-full h-12 bg-gray-100 
         flex-grow px-5 focus:outline-none'  placeholder={`What's on your mind ${session?.user?.name} ?`}
         />  
<button hidden type="submit" onClick={setPost}>POST</button>      
  </form>

  {imageToPost && (
    <div onClick={removeImage} 
    className='flex flex-col filter hover:brightness-110
     transition duration-150 transform hover:scale-105 
     cursor-pointer'>
        <img src={imageToPost} 
        className='object-contain h-10' alt=""/>
        <p className='text-xs text-red-500 text-center'>Remove</p>
    </div>
  )}
    </div>
    <div className='flex justify-evenly p-3 border-t'>
        <div className='inputIcon'><VideoCameraIcon className='h-7 text-red-500'/>
        <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
        </div>
            
        <div onClick={()=>filePickerRef.current.click()} className='inputIcon'><CameraIcon className='h-7 text-green-500'/>
        <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
<input ref={filePickerRef} onChange={addImageToPost} type="file" hidden/>
        </div>
       
        <div className='inputIcon'><EmojiHappyIcon className='h-7 text-yellow-500'/>
        <p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p>
        </div>
        
    </div>

    </div>
  )
}

export default InputBox