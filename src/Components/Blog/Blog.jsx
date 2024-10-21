import React from 'react'
// for icons
import { FaRegBookmark } from "react-icons/fa";

export default function Blog({blog, handleAddToBookmark}) {
    const {title, cover, reading_time, author, 
        posted_date, author_img, hashtags} = blog;
    console.log(blog);
  return (
    <div className='mb-20'>
        <img className='w-full mb-8' src={cover} alt={`cover picture of the title ${title}`} />
        {/* author content */}
        <div className='flex justify-between mb-4'>
            <div className='flex'>
                <img className='w-14' src={author_img} alt="Author image" />
                <div className='ml-6'>
                    <h3 className='text-2xl'>{author}</h3>
                    <p>{posted_date}</p>
                </div>
            </div>
            <div>
                <span>{reading_time} min read</span>
                <button className='ml-2 text-red-400 text-2xl' onClick={handleAddToBookmark}><FaRegBookmark></FaRegBookmark></button>
            </div>

        </div>
        <h2 className="text-4xl">{title}</h2>
        <p>
            {
                hashtags.map((hashtag,index)=> <span key={index}><a href=''>#{hashtag}</a></span>)
            }
        </p>

    </div>
  )
}
