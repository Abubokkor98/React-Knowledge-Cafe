import React from 'react'

export default function Blog({blog}) {
    const {title, cover, reading_time, author, 
        posted_date, author_img, hashtags} = blog;
    console.log(blog);
  return (
    <div>
        <img src={cover} alt={`cover picture of the title ${title}`} />
        {/* author content */}
        <div className='flex justify-between'>
            <div className='flex'>
                <img className='w-14' src={author_img} alt="Author image" />
                <div className='ml-6'>
                    <h3 className='text-2xl'>{author}</h3>
                    <p>{posted_date}</p>
                </div>
            </div>
            <div>
                <span>{reading_time} min read</span>
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
