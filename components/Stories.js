import React from 'react'
import StoryCard from "../components/StoryCard"
const stories =[
    {
      name:"Sonny Sangha",
      src:"https://links.papareact.com/zof",
      profile:"https://links.papareact.com/l4v",
    },
    {
  
      name:"Elon Musk",
      src:"https://links.papareact.com/4zn",
      profile:"https://links.papareact.com/kxk",
    },
    {  
      name:"Jeff Bezos",
      src:"https://links.papareact.com/k2j",
      profile:"https://links.papareact.com/f0p",
    },
    {  name:"Mark Zuckerburg",
      src:"https://links.papareact.com/4u4",
      profile:"https://links.papareact.com/zvy",
    },
  ]
function Stories() {
  return (
    <div className='flex justify-center space-x-3 mx-auto'>
    {stories.map(story=>{
    return  (  <StoryCard
        name={story.name}
        src={story.src}
        profile={story.profile}
        
        />)

    })}
    
    </div>
  )
}

export default Stories