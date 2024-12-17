import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from './MainLayout'
import CountryDetails from './components/CountryDetails'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const turnDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout darkMode={darkMode} setDarkMode={turnDarkMode} />
            }
          >
            <Route index element={<Home darkMode={darkMode} />} />
            <Route path="details/:id" element={<CountryDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
