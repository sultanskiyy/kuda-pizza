import React from 'react'
import HeaderMemo from './Header'
import { Outlet } from 'react-router-dom'
import FooterMemo from './Footer'

const Layout = () => {
  return (
    <>
      <HeaderMemo/> 
      <main className='pt-20 mx-auto'>
        <Outlet/>
      </main>
      <FooterMemo/>
    </>
  )
}

export default Layout
