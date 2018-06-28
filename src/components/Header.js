/* eslint jsx-a11y/no-redundant-roles: 0 */

import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  width: 100%;
  background-color: #4c2ea1;
  color: #fffeff !important;
  font-size :15px;
  font-weight:600;
  height: 86px;
`;

const Navbar = styled.div`
  padding-top: 23px;
  margin-left: 221px;
  height: 35px;

`;

const Logo = styled.a`
  margin-right:351px;
  width: 101px;
  height: 87px;
`;

const  Menu  =  styled.a`
  width: 124px;
  height: 31px;
  margin-left: 16px;
`;

const Icone = styled.i`
  width: 5px !important;
  color: #6d45e1;
  margin-left: 32px;
`;



export default () => ( 
  <Nav className="navbar-menu">
    <Navbar className="navbar-start has-text-white">
      <Menu className="navbar-item has-text-white">HOME <Icone className="fas fa-circle" /></Menu>
      <Menu className="navbar-item has-text-white">WORK <Icone className="fas fa-circle" /></Menu>
      <Menu className="navbar-item has-text-white">SERVICES <Icone className="fas fa-circle" /></Menu>
      <Menu className="navbar-item has-text-white">CONTACT</Menu>
    </Navbar>
    <div className="navbar-end">
      <Logo  className="button is-danger">
        LeT's <br />  TALK
      </Logo>
    </div>
  </Nav>
);
