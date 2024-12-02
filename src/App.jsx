import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PrimaryButton } from './components/atoms/button/PrimaryButton'
import { SecondaryButton } from './components/atoms/button/SecondaryButton'

function App() {
  return (
    <>
      <div className='App'>
        <PrimaryButton>テスト</PrimaryButton>
        <br />
        <br />
        <SecondaryButton>検索</SecondaryButton>
      </div>
    </>
  )
}

export default App
