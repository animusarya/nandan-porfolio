import React from 'react';
import styled from 'styled-components';

const Firstpart = styled.div`
  margin-left: 239px;
  padding-top: 105px;
  @media screen and (max-width: 800px) {
    {
      padding-top: 105px;
      margin-left: 5px;
    }
  }
`;

const HBK = styled.strong`
  font-weight:800 !important;
`;
const Creative = styled.h2`
  font-family: sans-serif;
  width: 457px;
  font-size: 20px;
  margin-top: 7px;
  @media screen and (max-width: 800px) {
    {
      font-size: 15px;
      font-weight: 800;
    }
  }
`;

const Heading = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 82px;
  line-height: 109px;
  margin-top: 35px;
  font-weight: 900;
  margin-left: 14px;
  @media screen and (max-width: 800px) {
    { 
      font-family: 'Roboto',sans-serif;
      font-size: 31px;
      line-height: 57px;
      margin-top: 8px;
      font-weight: 900;
    }
  }
`;

const Box = styled.div`
  margin-left: 24px;
  padding-top: 108px;
  @media screen and (max-width: 800px) {
    {
      margin-left: 13px;
      padding-top: 30px;
    }
  }
`;

const SquareIcon = styled.i`
  color: #f14a5a;
  height: 10px;
`;

const Icons = styled.i`
  color: #6d45e1;
  height: 10px;
`;

export default () => (
  <Firstpart id="firstpart">
    <HBK className="has-text-warning has-text-weight-bold is-size-3 is-pulled-left"> &nbsp; HBK</HBK>
    <Creative className="has-text-white has-text-left">  
        &nbsp; - &nbsp; Creative a agency for forward <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; thinking brands.
    </Creative>
    <div>
      <Heading className="has-text-white has-text-left">With knowledge,<br />
        passion ,heart & soul 
      </Heading>
    </div>
    <Box>
      <SquareIcon className="fas fa-square" />&nbsp;&nbsp;&nbsp;&nbsp;
      <Icons className="fas fa-square" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Icons className="fas fa-square" />&nbsp; &nbsp;
    </Box>
  </Firstpart>
);
