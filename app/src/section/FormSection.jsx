import React from 'react'
import caretdown from '/caretdown.jpg';

const FormSection = () => {
  return (
    <div className='h-full w-[40%] px-8'>

      <div className='mt-[28px]'>
        <div className='font-poppins font-medium text-[26px] flex items-center gap-2'>
          Lets define your
          <div className='bg-gradient-to-r from-[#FFC835] to-[#FFA81C] bg-clip-text text-transparent'>
            targets
          </div>
        </div>

        <div className='font-poppins font-normal mt-1 text-[12px] text-[#888787] leading-[28px] tracking-[0]'>
          Focus on the most relevant fields to shape your ICP — all fields are optional
        </div>
      </div>

      <div className='mt-[24px] flex flex-col'>
        <div className='font-poppins font-normal text-[18px]'>Company Profile</div>

        <div className='mt-[16px] border-gray-200 border-2 p-6 flex flex-col gap-6 rounded-xl'>
          <div className='flex flex-col gap-2'>
            <div className='font-poppins font-normal text-[13px] leading-relaxed text-[#505050]'>Company Headcount</div>
            <div className='w-full flex items-center justify-between rounded-lg px-4 py-2 border-gray-200 border-2'>
              <div className='font-poppins font-normal text-[13px] leading-relaxed text-[#6b6b6b]'>1-10...</div>
              <img src={caretdown} className='h-2 w-3' />
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='font-poppins font-normal text-[13px] leading-relaxed text-[#505050]'>Company HQ Locations</div>
            <div className='w-full flex items-center justify-between rounded-lg px-4 py-2 border-gray-200 border-2'>
              <div className='font-poppins font-normal text-[13px] leading-relaxed text-[#6b6b6b]'>India...</div>
              <img src={caretdown} className='h-2 w-3' />
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='font-poppins font-normal text-[13px] leading-relaxed text-[#505050]'>Revenue range</div>
            <div className='w-full flex items-center justify-between rounded-lg px-4 py-2 border-gray-200 border-2'>
              <div className='font-poppins font-normal text-[13px] leading-relaxed text-[#6b6b6b]'>50L - 1Cr...</div>
              <img src={caretdown} className='h-2 w-3' />
            </div>
          </div>
        </div>


      </div>

    </div>
  )
}

export default FormSection
