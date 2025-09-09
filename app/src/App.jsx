import React from 'react'
import Sidebar from './components/Sidebar'
import Main from './components/Main'

const App = () => {
  return (
    <div className='h-screen w-full bg-gray-100 flex items-center'>
      <Sidebar />
      <Main />
    </div>
  )
}

export default App
