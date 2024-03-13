
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Blogs'

function App() {
  const [bookmarks, setbookmarks]= useState([])
  const handleAddToBookmark =()=>{
    console.log('You are all right');
  }

  return (
    <>
    <Header></Header>
    <main className='flex justify-between items-center'>
      <Blogs
      handleAddToBookmark={()=>handleAddToBookmark()}
      ></Blogs>
      <Bookmarks></Bookmarks>
    </main>
      
    </>
  )
}

export default App
