import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './MenuElements';
import {
  ShoppingCartOutlined,
} from "@material-ui/icons";
  
const Menu = (props) => {
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
          <NavLink to='/checkout' activeStyle>
          <ShoppingCartOutlined />
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/admin'>Admin</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Menu;