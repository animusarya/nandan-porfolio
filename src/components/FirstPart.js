import React from 'react';
import styled from 'styled-components';

const Firstpart = styled.div`
  width: 858px;
  margin-left: 239px;
  padding-top: 105px;
`;

const Creative = styled.h1`
  font-family: sans-serif;
  width: 457px;
  font-size: 20px;
  margin-top: 7px;
`;

const Heading = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 82px;
  line-height: 109px;
  margin-top: 35px;
  font-weight: 900;
  margin-left: 14px;
`;

const Box = styled.div`
  margin-left: 24px;
  padding-top: 108px;
`;
const SquareIcone = styled.i`
  color: #f14a5a;
  height: 10px;
`;

const Icons = styled.i`
  color: #6d45e1;
  height: 10px;
`;

export default () => (
  <Firstpart>
    <strong className="has-text-warning has-text-weight-bold is-size-3 is-pulled-left"> &nbsp; HBK</strong>
    <Creative className="has-text-white has-text-left">  
  &nbsp;  - &nbsp; Creative a agency for forward <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; thinking brands.
    </Creative>
    <div>
      <Heading className="has-text-white has-text-left">With knowledge,<br />
        passion ,heart & soul 
      </Heading>
    </div>
    <Box>
      <SquareIcone className="fas fa-square" />&nbsp;&nbsp;&nbsp;&nbsp;
      <Icons className="fas fa-square" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Icons className="fas fa-square" />&nbsp; &nbsp;
    </Box>
  </Firstpart>
);
