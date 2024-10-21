import React from 'react'
import Profile from '../../assets/images/profile.png'

export default function 
() {
  return (
    <header className=' max-w-screen-lg mx-auto flex justify-between items-center p-4 border-b-2'>
         <h1 className='text-6=4xl font-bold'>Knowledge Cafe</h1>
         <img src={Profile} alt="" />
    </header>
  )
}
