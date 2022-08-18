import { collection, doc, orderBy, query } from 'firebase/firestore'
import React from 'react'
import {useCollection, useCollectionData} from "react-firebase-hooks/firestore"
import Post from "../components/Post"
import {db,storage} from "../firebase"
function Posts({posts}) {
    const postref=collection(db,"Posts")
    const q = query(collection(db,"Posts"),orderBy("timestamp","desc"))
    const [RTposts]=useCollectionData(q)

   
  return (
    <div>
    {
      RTposts?
   
      RTposts?.map(post =>{
       return (<Post
        key={post.id}
        name={post.name}
        message={post.message}
        email={post.email}
        timestamp={post.timestamp}
        image={post.image}
        postImage={post.postImage}
        />
       )})
       :
        posts.map((post)=>{
          return (
            <Post
        key={post.id}
        name={post.name}
        message={post.message}
        email={post.email}
        timestamp={post.timestamp}
        image={post.image}
        postImage={post.postImage}
        />

          )
        })
       }

    

    </div>
  )
}

export default Posts