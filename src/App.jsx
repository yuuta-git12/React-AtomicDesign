import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PrimaryButton } from './components/atoms/button/PrimaryButton'
import { SecondaryButton } from './components/atoms/button/SecondaryButton'
import { SearchInput } from './components/molecules/SearchInput'

function App() {
  return (
    <>
      <div className='App'>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
            
        <SearchInput />
      </div>
    </>
  )
}

export default App
