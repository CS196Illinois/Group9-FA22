import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavLink, NavBtn, NavBtnLink
} from './navcomponents';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to='/about' activeStyle>
                About 
            </NavLink>
            <NavLink to='/home' activeStyle>
                Home
            </NavLink>
            <NavLink to='/albums' activeStyle>
                Your Albums
            </NavLink>
            <NavLink to='/sign-in' activeStyle>
                Sign In
            </NavLink>
            <NavLink to='/explore' activeStyle>
                Explore
            </NavLink>
        </NavMenu>
        <NavBtn>
           <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}

export default Navbar
