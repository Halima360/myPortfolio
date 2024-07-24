'use client'
import Link from 'next/link'
import { Divide as Hamburger } from 'hamburger-react'
import React, { useState } from 'react'

function Nav({about,projects,skills,contact}) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <main className='flex bg-blue-950 w-full fixed justify-end items-right'>
        <div className='flex w-full  justify-end items-right'>
        <div className=' hidden md:flex p-3 space-x-5'>
        <a href={about}><p className='font-bold text-purple-100'>About Me</p></a>
        <a href={projects}>< p className='font-bold text-purple-100 '>Projects</p></a>
        <Link href={skills}><p className='font-bold text-purple-100'>Skills</p></Link>
        <Link href={contact}><p className='font-bold text-purple-100'>Contact</p></Link>
        </div>
        {/* mobile */}
          <div className='md:hidden'>
            <div className='pr-4'><Hamburger toggled={isOpen} toggle={setIsOpen} rounded color='#475569'easing='ease-in' /></div>
            
            { isOpen  ?
            (  <div className='flex flex-col items-right justify-center px-10 bg-red  space-y-5' >
              <Link href={about}><p className='font-bold text-purple-50'>About Me</p></Link>
             <Link href={projects}>< p className='font-bold text-purple-50 '>Projects</p></Link>
             <Link href={skills}><p className='font-bold text-purple-50'>Skills</p></Link>
             <Link href={contact}><p className='font-bold text-purple-50'>Contact</p></Link>
              </div>) : ''
            }
       
            
          </div>

        </div>
    </main>
  )
}

export default Nav