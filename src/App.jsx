import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PrimaryButton } from './components/atoms/button/PrimaryButton'
import { SecondaryButton } from './components/atoms/button/SecondaryButton'
import { SearchInput } from './components/molecules/SearchInput'
import { UserCard  } from './components/organisms/user/UserCard'

const user = {
  name: "ユータ",
  image: "https://images.unsplash.com/photo-1585910166082-b505ca55cd14?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  email: "1234@example.com",
  phone: "090-1111-2222",
  company: {
    name: "テスト株式会社"
  },
  website: "http://google.com"
}

function App() {
  return (
    <>
      <div className='App'>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
            
        <SearchInput />
        <UserCard user = {user} />
      </div>
    </>
  )
}

export default App
