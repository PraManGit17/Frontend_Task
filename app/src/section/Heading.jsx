import React from 'react'
import caret from '/caret.jpg';
import edit from '/edit.jpg';

const Heading = () => {
  return (
    <div className='w-full h-[100px] border-b-gray-200 border-b-2 flex items-center justify-between px-10'>

      <div className='h-[40px] mt-2 flex items-center gap-2'>
        <div className='w-[40px] h-full rounded-lg border-gray-200 border-2 flex items-center justify-center'>
          <img src={caret} className='w-2 h-3' />
        </div>
        <div className='w-[190px] h-full rounded-lg border-gray-200 border-2 flex items-center justify-center gap-4'>
          <div className='font-poppins font-normal text-[17px] leading-[28px] tracking-[0]'>Untitled List</div>
          <img src={edit} className='w-4 h-4' />
        </div>
      </div>

      <div className='w-[600px] mt-4 h-[40px] flex items-center gap-4'>

        <div className='w-[180px] h-full flex flex-col items-center justify-center'>
          <div className='w-full h-2.5 rounded-full'
            style={{ background: "linear-gradient(100.93deg, #FFE74E -29.59%, #FFA81C 98.39%)" }}></div>

          <div className='font-poppins font-medium text-[12px] leading-[28px] tracking-[0]
          bg-gradient-to-r from-[#FFC835] to-[#FFA81C] bg-clip-text text-transparent'>Who</div>
        </div>

        <div className='w-[180px] h-full flex flex-col items-center'>
          <div className='w-full h-2.5 rounded-full bg-[#c2c2c2]'></div>
          <div className='font-poppins font-medium text-[12px] leading-[28px] tracking-[0]'>What/Why</div>
        </div>

        <div className='w-[180px] h-full flex flex-col items-center'>
          <div className='w-full h-2.5 rounded-full bg-[#c2c2c2]'></div>
          <div className='font-poppins font-medium text-[12px] leading-[28px] tracking-[0]'>Where</div>
        </div>
        <div className='w-[180px] h-full flex flex-col items-center'>
          <div className='w-full h-2.5 rounded-full bg-[#c2c2c2]'></div>
          <div className='font-poppins font-medium text-[12px] leading-[28px] tracking-[0]'>When</div>
        </div>
      </div>

      <div className='w-[250px] h-[40px] flex items-start justify-center gap-8'>
        <div className='font-poppins font-medium text-[12px] leading-[28px] tracking-[0] text-[#686868]'>Save</div>
        <div className='rounded-sm' style={{ background: "linear-gradient(100.93deg, #FFE74E -29.59%, #FFA81C 98.39%)" }}       >
          <div className='px-3 font-poppins font-medium text-[11px] leading-[28px] tracking-[0] text-white'>Make Campaign</div>
        </div>
      </div>

    </div>
  )
}

export default Heading

