'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { IoLogoGithub } from "react-icons/io";
import wavingHand from '../../public/images/handwave.jpg'
import next from '../../public/images/nextjs.jpg'
import html from '../../public/images/html.png'
import react from '../../public/images/react.png'
import javaScript from '../../public/images/js.png'
import CSS from '../../public/images/css.png'
import realtor from '../../public/images/realtor.png'
import catchup from '../../public/images/catchup.png'
import quiz from '../../public/images/quiz.png'
import rgs from '../../public/images/rgs.png'
import { IoMdDownload } from "react-icons/io";
import { MdWavingHand } from "react-icons/md";
import Link from 'next/link'
import { FaLinkedin } from "react-icons/fa";
import ImageCards from './imageCards'
import Nav from './navbar'

function Body() {
  const phoneNumber = '07080707822';
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  const email = 'halimatuibrahim360@gmail.com'
  return (
    <div>
       <div><Nav  about={'#about'} contact={'#contact'} projects={'#projects'} skills={'#skills'} /></div>
    <main className=' py-5 px-10 m-auto bg-blue-900'>
        <div className=''>
        
        <div className='text-blue-100   w-full p-10 rounded'>
        <p className='font-bold font-mono text-4xl italic flex'>Hi,<span><MdWavingHand color='white' direction={'right'} /></span></p>
        <p className='font-bold font-mono text-4xl italic'>I&apos;m Halima,</p>
        <p className='font-bold font-mono text-4xl italic'>Frontend web developer</p>
        </div>
        

        
    </div>
    <div id='about' className='bg-blue-950 text-white flex pb-4 flex-col items-center justify-center rounded-md'>
          <h1 className='font-mono text-4xl font-bold pt-5'>About Me</h1>
          <p className='p-10  '>My Name is Halima Ibrahim, I am a dedicated and skilled Frontend Web Developer
             with three years of professional experience, I have honed my ability to create dynamic, 
             user-friendly, and visually appealing web applications. My expertise lies in leveraging modern 
             frontend technologies and frameworks such as HTML, CSS, JavaScript, React, and NextJs to deliver
              high-quality, responsive designs and seamless user experiences. I possess a strong understanding of
               web development best practices, including responsive design, cross-browser compatibility,
                and performance optimization. 
          </p>
          <Link href={'./ResumeTech.docx'} download={'/ResumeTech.docx'}><button className='bg-cyan-400 px-5 py-3 flex items-center justify-center space-x-4'><span>Download CV </span><span><IoMdDownload color='white' /></span></button></Link>
          
        </div>
<br></br>
        <div id='projects' className='bg-blue-950 mt-5 flex flex-col items-center justify-center rounded-md'>
           <h1 className='text-center pt-5  text-white text-4xl font-bold font-mono '>My Projects</h1> 
           <div className='flex flex-col space-y-5 md:flex-row py-10 px-5 space-x-5'>
            <ImageCards link={'https://royalgroceryshoppa.com/'} image={rgs} 
             text={'Royal Grocery Shoppa is e-commerce website for selling agricultural products and is created using NextJs'}/>
             <ImageCards link={'https://quiz-app-five-lake.vercel.app/'} image={quiz} text={'A quiz app created with JavaScript'}/>
             <ImageCards link={'https://realtor-clonebyhalima.netlify.app/'} image={realtor} text={'An application for connecting buyers and sellers of houses. Created with React'} />
            <ImageCards link={'http://prybar.vercel.app/'} image={catchup} text={'Meetings scheduling app, created with React'} />
           </div>
          
           
        </div>
        <div id='skills'>
        <h1 className='text-center mt-16 text-4xl text-white font-bold  pb-5 font-serif,Georgia'>My Skills</h1> 
        <div className='flex flex-col sm:flex-row sm:items-top items-center justify-center
         md:flex-wrap md:space-x-20 pb-10 space-y-10'>
            <Image alt='' className='hover:shadow-md hover:shadow-white  hover:scale-96'  src={html} width={150}/>
            <Image alt='' className='hover:shadow-md hover:shadow-white '  src={CSS} width={160} />
            <Image alt='' className='hover:shadow-md hover:shadow-white hover:scale-96'  src={javaScript} width={200}/>
            <Image alt='' className='hover:shadow-md hover:shadow-white hover:scale-96'  src={react} width={200} />
            <Image alt='' className='hover:shadow-md hover:shadow-white hover:scale-96' src={next} width={200} />
        </div>
        </div>
        
        <div id='contact' className='bg-blue-950 text-white mt-5 py-5 rounded-md'>
          
          <h1 className='font-mono md:text-4xl  text-3xl font-bold text-center'>Contact Me</h1>
          <div className='px-5 flex-col space-y-4 md:flex-row flex md:items-center items-left md:justify-between justify-center'>
            <div>
            <p>Email: <Link className='text-sm' href={`mailto:${email}`}>halimatuibrahim360@gmail.com</Link></p>
            <Link className='' href={whatsappLink} target='blank'> <button className='bg-green-400 px-5 py-3 rounded-lg'>Chat on WhatsApp</button></Link>
            </div>
            <div> 
              <p>Phone: <span>08138136870</span> </p>
              <div className='flex '>
              <Link href={'https://github.com/Halima360'} target='blank'><IoLogoGithub size={30}/> 
            </Link>
            <Link href={''}><FaLinkedin size={30} /></Link>
              </div>
           
            </div>
         
          </div>
         

        </div>
    </main>
    </div>
      
  )
}

export default Body