import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './component/Header';

function Layout() {
  return (
    <>
        <Header />
        {/* dynamic componen push kr rhe h */}
        <Outlet />  
    </>
  )
}

export default Layout