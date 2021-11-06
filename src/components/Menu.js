import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './MenuElements';
  
const Menu = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/Laptops' activeStyle>
            Laptops
          </NavLink>
          <NavLink to='/annual' activeStyle>
            Tablets
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/admin'>Admin</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Menu;