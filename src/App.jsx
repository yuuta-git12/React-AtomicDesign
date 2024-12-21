import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { AppRouter } from './rounter/AppRouter'
import { UserProvider } from './providers/ UserProvider'

function App() {
  return (
    <>
      <UserProvider>
        <AppRouter />
      </UserProvider>
    </>
  )
}

export default App
