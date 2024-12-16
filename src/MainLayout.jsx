import React from 'react'
import { Header } from './components/Header'
import { Outlet } from 'react-router-dom'

export const MainLayout = (props) => {
  console.log(props)

  return (
    <div>
      <Header darkMode={props.darkMode} setDarkMode={props.setDarkMode} />
      <Outlet />
    </div>
  )
}
