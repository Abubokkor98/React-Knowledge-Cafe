import React from 'react'
import Bookmark from '../Bookmark/Bookmark'

export default function Bookmarks({bookmarks}) {
  return (
    <div className='md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4 rounded-xl'>
        <h2 className='text-2xl text-center '>Bookmarked Blogs: {bookmarks.length}</h2>
        {
          bookmarks.map(bookmark=> <Bookmark bookmark={bookmark} key={bookmark.id}></Bookmark>)
        }
    </div>
  )
}
