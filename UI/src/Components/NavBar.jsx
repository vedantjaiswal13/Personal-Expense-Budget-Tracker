import React from 'react'
import { Settings, Weight } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
const NavBar = () => {
  return (
    <div className='flex  w-full shadow-xs h-10 justify-between items-center '>
      <div className='flex justify-between gap-2 flex-wrap px-4'> 
        <h1 className='font-bold'>Finance Tracker</h1>
        <h3>| Month Year</h3>
        </div>
      <div className='flex justify-between gap-5 flex-wrap px-4'>
            <Settings />
            <CircleUserRound />
      </div>
    </div>
  )
}

export default NavBar
