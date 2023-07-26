import React, { ChangeEvent, useState } from 'react'
import './App.css'
import Button from './components/Button'
import NavbarLogin from './components/NavbarLogin'
import NavbarLogout from './components/NavbarLogout'
import CounselorCard from './components/CounselorCard'
import Input from './components/Input'

function App(): React.ReactElement {
  const [inputValue, setInputValue] = useState('')
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleClick = () => {
    alert('버튼클릭')
  }
  return (
    <div className="App">
      <h1>버튼</h1>
      <Button
        border={{ radius: '0.625rem', borderColor: '#40BFFF' }}
        size={{ width: '100px', height: '100px' }}
        color={{ background: '#40BFFF', color: 'white' }}
        text="버튼"
        onClick={handleClick}
      />
      <h1>Navbar(로그인)</h1>
      <NavbarLogin />
      <h1>Navbar(로그아웃)</h1>
      <NavbarLogout />
      <h1>상담사 카드</h1>
      <CounselorCard
        name="석민혁"
        startTime="10:30"
        endTime="12:30"
        selectDay={['월', '목']}
        grade={4.8}
      />
      <div>
        <h1>Input</h1>
        <Input
          value={inputValue}
          onChange={handleInputChange}
          placeholder="이메일"
        />
        <p>입력한: {inputValue}</p>
      </div>
    </div>
  )
}

export default App
