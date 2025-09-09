import React from 'react'
import caretdown from '/caretdown.jpg';

const FormSection = () => {
  return (
    <div className='h-full w-[45%] pl-6 pr-3 overflow-hidden'>

      <div className='mt-[22px]'>
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

      <div className='mt-[16px] flex flex-col'>
        <div className='w-full flex items-start gap-4'>
          <div className='w-full flex flex-col'>
            <div className='font-poppins font-normal text-[18px]'>Company Profile</div>
            <div className='mt-[16px] border-gray-200 border-2 p-4 flex flex-col gap-6 rounded-xl'>

              <div className='flex flex-col gap-3'>
                <div className='font-poppins font-normal text-[13px] leading-relaxed'>Company Headcount</div>
                <div className='w-full flex items-center justify-between rounded-lg px-4 py-2 border-gray-200 border-2'>
                  <div className='font-poppins font-normal text-[13px] leading-relaxed text-[#8c8c8c]'>1-10...</div>
                  <img src={caretdown} className='h-2 w-3' />
                </div>
              </div>
              <div className='flex flex-col gap-3'>
                <div className='font-poppins font-normal text-[13px] leading-relaxed '>Company HQ Locations</div>
                <div className='w-full flex items-center justify-between rounded-lg px-4 py-2 border-gray-200 border-2'>
                  <div className='font-poppins font-normal text-[13px] leading-relaxed text-[#8c8c8c]'>India...</div>
                  <img src={caretdown} className='h-2 w-3' />
                </div>
              </div>
              <div className='flex flex-col gap-3'>
                <div className='font-poppins font-normal text-[13px] leading-relaxed'>Revenue range</div>
                <div className='w-full flex items-center justify-between rounded-lg px-4 py-2 border-gray-200 border-2'>
                  <div className='font-poppins font-normal text-[13px] leading-relaxed text-[#8c8c8c]'>50L - 1Cr...</div>
                  <img src={caretdown} className='h-2 w-3' />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='h-[345px] w-4 rounded-full' style={{ background: "var(--secondary, rgba(220, 220, 220, 1))" }} >
              <div className='h-[100px] w-4 rounded-full' style={{ background: "var(--secondary,rgba(136, 138, 151, 1))" }}></div>
            </div>
          </div>
        </div>

        <div className='font-poppins font-normal text-[18px] mt-[14px]'>Prospect Profile</div>
        <div className='w-[95%] mt-[6px] border-gray-200 border-2 px-6 py-4 flex flex-col gap-6 rounded-xl'>
          <div className='flex flex-col gap-2'>
            <div className='font-poppins font-normal text-[13px]'>Department</div>
            <div className='w-full flex items-center justify-between rounded-lg px-4 py-2 border-gray-200 border-2'>
              <div className='font-poppins font-normal text-[13px] leading-relaxed text-[#8c8c8c]'>Search Department</div>
              <img src={caretdown} className='h-2 w-3' />
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default FormSection
