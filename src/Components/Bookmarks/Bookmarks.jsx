import React from 'react'
import Bookmark from '../Bookmark/Bookmark'

export default function Bookmarks({bookmarks,readingTime}) {
  return (
    <div className='md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4 rounded-xl'>
      <div>
        <h3 className="text-3xl">Reading Time: {readingTime}</h3>
      </div>
        <h2 className='text-2xl text-center '>Bookmarked Blogs: {bookmarks.length}</h2>
        {
          bookmarks.map((bookmark, index)=> <Bookmark bookmark={bookmark} key={index}></Bookmark>)
        }
    </div>
  )
}
