import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import Feed from "../components/Feed"
import Widgets from "../components/Widgets"
import Login from "../components/Login"
import {getSession} from "next-auth/react"
import {db,storage} from "../firebase"
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
export default function Home({session,posts}) {
  if(!session) return <Login/>
  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      <Head>
        <title>Facebook Clone</title>
      </Head>
      {/*Header */}
      <Header/>
      <main className='flex'>
     {/*Sidebar */}
     <Sidebar/>
     {/*Feed */}
     <Feed posts={posts}/>
     {/*Widgets */}
     <Widgets/>
      </main>

      
    </div>
  )
}
export async function getServerSideProps(context){
  const session = await getSession(context)
  const a = collection(db,"Posts")
  const b = getDocs(query(a,orderBy('timestamp','desc')))
  const posts=await b

  const docs = posts.docs.map(post=>({
    id:post.id,
    ...post.data(),
    timestamp:null

  }))


  return {
    props:{
      session,
      posts:docs,
    }
  }
}