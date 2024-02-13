import React from 'react'

import Header from '../component/Header/Header';
import Footer from '../component/Footer/Footer';
import Routers from '../router/Routers';

const Layout= () => {
  return <>
  <Header/>
  <main>
    <Routers/>
  </main>
  <Footer/>
  </>
}

export default Layout

