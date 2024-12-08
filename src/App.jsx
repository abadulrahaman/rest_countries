import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from './MainLayout'
import { CountryDetails } from './countryDetails'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='details/:id' element={<CountryDetails/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
