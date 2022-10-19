import React from 'react'
import './Navbarinshort.css'
import DrawerInshort from "./DrawerInshort"

const NavbarInshort = ({setCategory}) => {
  return (
    <div className='nav'>
      <div className='icon'><DrawerInshort setCategory={setCategory}/></div>
      <img style={{cursor:"pointer"}} src='https://assets.inshorts.com/website_assets/images/logo_inshorts.png' alt='icon' height='80%'/>
    </div>
  );
};

export default NavbarInshort
