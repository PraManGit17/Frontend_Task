import React from 'react'
import star from '../../public/star.jpg';
import photo from '../../public/photo.jpg';
import house from '../../public/house.jpg';
import rocket from '../../public/rocket.jpg';
import note from '../../public/note.jpg';
import user from '../../public/user.png';
import pie from '../../public/pie.jpg';
import mail from '../../public/mail.jpg';
import setting from '../../public/setting.jpg';
import exit from '../../public/exit.jpg';

const Sidebar = () => {
  return (
    <div className='bg-white w-[130px] h-screen bg-screen shadow-md shadow-gray-400 flex flex-col items-center'>

      <div className='w-1/2 py-9 flex flex-col items-center'>
        <img src={star} height={24} width={24} />
        <img src={photo} className='rounded-2xl mt-[32px] h-[48px] w-[48px]' />

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
