'use client'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='w-full h-16 flex justify-between items-center px-8 max-sm:px-4 bg-white shadow-md'>
      <div className='flex items-center'>
        <Link href='/'>
          <Image
            src='/images/logo.png'
            alt='Logo'
            width={50}
            height={50}
            className='cursor-pointer'
          />
        </Link>
      </div>
      
      <div className='flex items-center gap-8 max-sm:gap-4 '>
        <Link 
          href='/'
          className='text-gray-700 hover:text-blue-600 transition-colors'
        >
          Home
        </Link>
        <Link 
          href='/learning-companions'
          className='text-gray-700 hover:text-blue-600 transition-colors'
        >
          Learning Companions
        </Link>
        <Link 
          href='/my-journey'
          className='text-gray-700 hover:text-blue-600 transition-colors'
        >
          My Journey
        </Link>
        <Link 
          href='/sign-in'
          className='text-gray-700 hover:text-blue-600 transition-colors'
        >
          Sign in
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
