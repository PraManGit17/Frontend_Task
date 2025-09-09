import React from 'react'
import Heading from '../section/Heading'
import ChatSection from '../section/ChatSection'

const Main = () => {
  return (
    <div className='w-full h-screen p-5'>
      <div className='w-full h-full border-2 border-gray-200 rounded-2xl'>
        <Heading />

        <div className='w-full h-[588px] '>
          <ChatSection />
        </div>
      </div>
      
    </div>
  )
}

export default Main
