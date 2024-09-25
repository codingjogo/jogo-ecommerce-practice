import React from 'react'
import Navbar from './components/Navbar'

const SetupLayout = ({children} : {
    children: React.ReactNode,
}) => {
  return (
    <>
        <header className='container'>
            <Navbar />
        </header>
        <main className='container'>
            {children}
        </main>
    </>
  )
}

export default SetupLayout