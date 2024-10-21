import React, { useEffect, useState } from 'react'
import Blog from '../Blog/Blog';

export default function Blogs() {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('Blogs.json')
        .then(res => res.json())
        .then(data=> setBlogs(data))
    },[])
  return (
    <div className='md:w-2/3'>
      <h1 className="text-4xl">Blogs {blogs.length}</h1>
      {
        blogs.map(blog=> <Blog 
            blog={blog} 
            key={blog.id}
            ></Blog>)
      }

    </div>
  )
}
