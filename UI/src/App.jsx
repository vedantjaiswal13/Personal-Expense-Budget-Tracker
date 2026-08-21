import React from 'react'
import NavBar from './Components/NavBar'
import SidBar from './Components/SidBar'
const App = () => {
  return (
    <div className='h-screen w-screen'>
      <NavBar/>
      <main className='h-full flex flex-wrap w-full '>
        {/* <sideBar/> */}
        <SidBar/>
        <div> Hi</div>
      </main>
    </div>
  )
}

export default App
