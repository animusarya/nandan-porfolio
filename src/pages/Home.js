import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import FirstPart from '../components/FirstPart';
import SecondPart from '../components/SecondPart';
import ThirdPart from '../components/ThirdPart';
import Fourthpart from '../components/Fourthpart';
import Footer from '../components/Footer';

const Body = styled.div`
  width: 100%;
  background-color: #5031a9;
  height: 3857px;
  @media screen and (max-width: 800px) {
    {
    width: 100%;
    height: 5857px;
    }  
  }
`;

export default () => (
  <Body>
    <Helmet />
    <FirstPart />
    <SecondPart />
    <ThirdPart />
    <Fourthpart />
    <Footer />
  </Body>
);
