import CompletedLessons from '@/components/CompletedLessons'
import Image from 'next/image'
import React from 'react'

const MyJourney = () => {
  return (
    <div className='w-full flex flex-col items-center py-4  gap-4'>
      <div className='w-full flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <Image 
            src={'/images/avatar.jpg'}
            alt={'avatar'}
            width={60}
            height={60}
            className='rounded-xl'
          />
          <div>
            <h2 className='text-xl font-bold'>Adrian Jarek</h2>
            <p className='text-sm text-gray-500'>adrian@example.com</p>
          </div>
        </div>
        <div className='flex items-center gap-4' >
          <div className='flex flex-col gap-2 p-2 border-2 rounded-lg'>
            <div className='flex items-center gap-4'>
            <Image src={'/icons/check.svg'} alt={'check'} width={20} height={20} className=''/>
             <h3 className='text-xl font-semibold'>23</h3>
            </div>
              <p className='text-sm text-gray-500'>Lessons Completed</p>
          </div>
          <div className='flex flex-col gap-2 p-2 border-2 rounded-lg'>
            <div className='flex items-center gap-4'>
            <Image src={'/icons/cap.svg'} alt={'cap'} width={20} height={20} className=''/>
             <h3 className='text-xl font-semibold'>10</h3>
            </div>
              <p className='text-sm text-gray-500'>Companions Created</p>
          </div>
          
          
        </div>
      </div>
      <CompletedLessons label={'Completed lessons'}/>

    </div>
  )
}

export default MyJourney