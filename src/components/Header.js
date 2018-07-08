/* eslint jsx-a11y/no-redundant-roles: 0 */

import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  width: 100%;
  background-color: #4c2ea1;
  color: #fffeff ;
  font-size : 15px;
  font-weight:600;
  height: 86px;
`;

const Navbar = styled.div`
  margin-top: 23px;
  margin-left: 221px;
  height: 35px;
  width: 100%;
  a:hover { 
    background-color: #4f31a8;
    color: #fff!important;
}`;

const Logo = styled.a`
  margin-right: 351px;
  width: 101px;
  height: 87px;
  background-color: #f14b59 !important;
  border-radius: 0px;
`;

const Menu = styled.a`
  width: 123px;
  height: 31px
  margin-left: 8px;
  padding-left: 34px;
`;

const Icons = styled.i`
  width: 5px !important;
  color: #6d45e1;
  margin-Top: 7px;
`;

export default () => ( 
  <Nav className="navbar-menu">
    <Navbar className="navbar-start has-text-white">
      <Menu href="#firstpart" className="navbar-item has-text-white">HOME</Menu><Icons className="fas fa-square" />
      <Menu href="#secondpart"className="navbar-item has-text-white">WORK</Menu><Icons className="fas fa-square" />
      <Menu href="#Thirdpart"className="navbar-item has-text-white">SERVICES</Menu><Icons className="fas fa-square" />
      <Menu href="#home" className="navbar-item has-text-white">CONTACT</Menu>
    </Navbar>
    <div className="navbar-end">
      <Logo href="https://twitter.com/Souravarya4u" className="button is-danger">
        Lets <br />  TALK
      </Logo>
    </div>
  </Nav>
);
