import React from 'react'
import star from '/star.jpg';
import copy from '/copy.png';
import reload from '/reload.jpg';
import search from '/search.jpg';
import mic from '/mic.jpg';

const ChatSection = () => {
  return (
    <div className='w-[55%] h-full border-r-2 border-r-gray-200 rounded-bl-2xl
    flex flex-col items-center py-7'>

      <div className='flex items-center gap-2'>
        <img src={star} className='h-5' />
        <div className='font-poppins font-normal text-[32px]'>
          Oslo chat
        </div>
      </div>

      <div className='w-[85%] mt-[45px] max-h-full flex flex-col gap-8'>
        <div className='w-full'>
          <div className='font-poppins font-normal text-[16px]'>Hello Im Oslo. Tell me whats on your mind</div>
          <div className='flex items-center gap-2 mt-[12px]'>
            <img src={copy} className='h-3' />
            <img src={reload} className='h-3' />
          </div>
        </div>

        <div className='w-full flex justify-end'>
          <div className='px-5 py-2 rounded-2xl bg-gray-200/50'>
            <div className='font-poppins font-medium text-[16px] text-[#313c51]'>Create leads on Tech targets</div>
          </div>
        </div>

        <div className='w-[75%]'>
          <div className='font-poppins font-normal text-[16px]'>ICP updated to target Tech Companies. If you want to specify roles,
            locations, or other criteria for decision-makers, please let me know</div>
          <div className='flex items-center gap-2 mt-[12px]'>
            <img src={copy} className='h-3' />
            <img src={reload} className='h-3' />
          </div>
        </div>
      </div>

      <div className='w-[80%] mt-[135px] bg-gray-50 flex items-center justify-between rounded-xl px-4 py-3 border-gray-200 border-2
      shadow-gray-200 shadow-lg'>
        <img src={search} className='h-4 w-4' />
        <img src={mic} className='h-4 w-3' />
      </div>


    </div>
  )
}

export default ChatSection
