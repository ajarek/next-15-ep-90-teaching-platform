'use client'

import React from 'react'
import dataCompanions from '@/data/companions.json'
import CardCompanion from '@/components/CardCompanion'
import { Input } from '@/components/ui/input'

const LearningCompanions = () => {
  const [search, setSearch] = React.useState('')
  return (
    <div className='min-h-screen flex flex-col items-center  p-4 max-sm:px-4  gap-6'>
      <div className='w-full flex flex-wrap items-center justify-between gap-4'>
        <h1 className='text-3xl font-bold'>Companion Library</h1>
        <Input
          type='text'
          placeholder='Search for a companion'
          className='w-full max-w-sm'
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          autoFocus
        />
      </div>
      <div className='w-full grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4'>
        {dataCompanions
          .filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((item) => (
            <CardCompanion
              key={item.id}
              topic={item.topic}
              name={item.name}
              subject={item.subject}
              duration={item.duration}
              style={item.style}
              completed={item.completed}
            />
          ))}
      </div>
    </div>
  )
}

export default LearningCompanions
