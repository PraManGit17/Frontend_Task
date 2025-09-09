import React from 'react'
import star from '/star.jpg';
import photo from '/photo.jpg';
import house from '/house.jpg';
import rocket from '/rocket.jpg';
import note from '/note.jpg';
import user from '/user.png';
import pie from '/pie.jpg';
import mail from '/mail.jpg';
import setting from '/setting.jpg';
import exit from '/exit.jpg';

const Sidebar = () => {
  return (
    <div className='bg-white w-[125px] h-screen bg-screen shadow-md shadow-gray-400 flex flex-col items-center'>

      <div className='w-1/2 py-9 flex flex-col items-center'>
        <img src={star} height={24} width={24} />
        <img src={photo} className='rounded-2xl mt-[32px] h-[45px] w-[45px]' />

        <div className='w-full mt-[40px] flex flex-col gap-7 items-center'>
          <div className='p-4 rounded-full' style={{ background: "var(--secondary, rgba(255, 249, 240, 1))" }}>
            <img src={house} className='h-[18px] w-[16px]' />
          </div>


          <img src={rocket} className='h-[20px] w-[20px]' />
          <img src={note} className='h-[18px] w-[18px]' />
          <img src={user} className='h-[18px] w-[20px]' />
          <img src={pie} className='h-[20px] w-[21px]' />
          <img src={mail} className='h-[18px] w-[20px]' />
        </div>
      </div>

      <div className='w-full h-full py-10 flex flex-col items-center justify-center'>
        <img src={setting} height={18} width={18} />
        <img src={exit} height={18} width={18} className='mt-8' />
      </div>
    </div>
  )
}

export default Sidebar

