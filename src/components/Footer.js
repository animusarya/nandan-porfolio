import React from 'react';
import styled from 'styled-components';


const Footer = styled.div`
  width: 100%;
  background-color: #4c2ea1;
  height: 117px;
  @media screen and (max-width: 800px) {
    {
      margin-top: 2305px;
      height: 155px;
    }
  }
`;

const LeftFooter = styled.div`
  width: 650px;
  Padding-Left: 227px;
  padding-top: 23px;
  @media screen and (max-width: 800px) {
    {
      width: 650px;
      Padding-Left: 10px;
      padding-top: 13px;
    }
  }
`;

const RightFooter = styled.div`
  width: 500px;
  Padding-Right: 74px;
  padding-top: 23px;
  @media screen and (max-width:800px) {
    {
      padding-top: 8px;
      padding-left: 122px;
      font-weight: 800;
    }
  }
`;

const Brands = styled.h1`
  padding-top: 7px
`;

const Icon = styled.i`
  color: #fac507;
  margin-top: 14px;
  @media screen and (max-width:800px) {
    {
     
    }
  }
`;

const IconTwitter = styled.i`
  color: #fac507;
  margin-top: 14px;
  margin-left: 132px;
  @media screen and (max-width:800px) {
    {
      
    }
  }
`;

const Hbk = styled.h2`
  color: #fac501!important;
  font-weight: 800 !important;
`;

const Para2 = styled.h2`
 
@media screen and (max-width:800px) {
  {
    margin-left: 44px;
  }
}
`;

export default () => (
  <Footer>
    <LeftFooter className="is-pulled-left">
      <Hbk className="has-text-weight-bold is-size-3 is-pulled-left">&nbsp; HBK&nbsp; </Hbk>
      <Brands className="has-text-white has-text-left is-size-5 has-text-weight-normal">  
          &nbsp;&nbsp;-&nbsp;creative a agency for forward <br /> &nbsp;&nbsp;&nbsp;&nbsp; thinking brands.
      </Brands>
    </LeftFooter>
    <RightFooter className="is-pulled-right">
      <Para2 className="has-text-white is-size-6 has-text-weight-normal">@ 2017 HBK. All right Reserved.</Para2>
      <a href="https://twitter.com/Souravarya4u"><IconTwitter className="fab fa-twitter" /></a>&nbsp;&nbsp;&nbsp;
      <a href="https://www.facebook.com/mirza.mahi.90"><Icon className="fab fa-facebook-square" /></a>&nbsp;&nbsp;&nbsp;
      <a href="https://www.linkedin.com/in/sourav-arya-84b93415b/"><Icon className="fab fa-linkedin-in" /></a>&nbsp;&nbsp;&nbsp;
      <a href="https://www.facebook.com/mirza.mahi.90"><Icon className="fab fa-pinterest-p" /></a>&nbsp;&nbsp;&nbsp;
    </RightFooter>
  </Footer>
);
