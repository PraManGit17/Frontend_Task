import React from 'react'
import Heading from '../section/Heading'
import ChatSection from '../section/ChatSection'
import FormSection from '../section/FormSection'

const Main = () => {
  return (
    <div className='w-full h-screen p-5'>
      <div className='w-full h-full border-2 border-gray-200 rounded-2xl'>
        <Heading />

        <div className='w-full h-[588px] flex items-center '>
          <ChatSection />
          <FormSection />
        </div>
      </div>
      
    </div>
  )
}

export default Main
