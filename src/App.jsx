import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'
import Blog from './Components/Blog/Blog'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = (blog)=>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  return (
    <>
    <Header></Header>
    <div className='md:flex max-w-screen-lg mx-auto'>
    <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
    <Bookmarks bookmarks={bookmarks}></Bookmarks>
    </div>
    </>
  )
}

export default App
