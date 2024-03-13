
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Blogs'

function App() {
  const [bookmarks, setbookmarks]= useState([])
  const handleAddToBookmark =(blog)=>{
    const newbookmarks= [...bookmarks,blog]
    setbookmarks(newbookmarks);
  }

  return (
    <>
    <Header></Header>
    <main className='flex justify-between items-center'>
      <Blogs
      handleAddToBookmark={handleAddToBookmark}
      ></Blogs>
    <Bookmarks bookmarks={bookmarks}></Bookmarks>
    </main>
      
    </>
  )
}

export default App
