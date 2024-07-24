import Image from 'next/image'
import Link from 'next/link'
import React,{useState} from 'react'

function ImageCards({link,image,text}) {
    const [viewMore, setViewMore] = useState(false)
  return (
    <div className='flex flex-col items-center justify-center'>
        <Link  target='blank' onMouseEnter={() => setViewMore(true)}  onMouseLeave={() => setViewMore(false)} href={link}>
        <Image alt='' className='' src={image}/>
        </Link>
        <p className={`md:hidden text-sm text-blue-50 ${viewMore && 'hidden'}`}>{text}</p>
        {viewMore && <p className=' text-blue-50'>{text}</p> }
       
    </div>
  )
}

export default ImageCards