import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
  return (
    <div>
      <Nav>
        <h1>Math Magician</h1>
        <Ul>
          <Li to="/">Home</Li>
          <Hr />
          <Li to="/calculator">Calculator</Li>
          <Hr />
          <Li to="/quotes">Quotes</Li>
        </Ul>
      </Nav>
    </div>
  );
}
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100%;
`;
const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:active {
    color: black;
  }
  
`;
const Li = styled(NavLink)`
  list-style: none;
  font-size: 18px;
  color:#4169e1;
  padding-left: 10px;
  font-family: "Oswald", sans-serif;
  &:hover {
    color:#ff6347;
  }
`;
const Hr = styled.hr`
border-style: none solid none none;
margin: 5px;
padding: 8px 1px;
color:black;
`;
export default Header;
