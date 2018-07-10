import React from 'react';
import styled from 'styled-components';

const Thirdpart = styled.div`
  margin-left: 137px !important;
  width: 82%;
  height: 948px;
  margin-top: 304px;
`;

const RightCol = styled.div`
  width:100%;
  background-color:#fff;
  height: 948px;
  margin-top: 304px;
  @media screen and (max-width: 800px) {
    {
      margin-left: -105px !important;
      margin-top: -9px !important;
      height: 829px;
    }
  }
`;

const Apple = styled.img`
  width: 100%;
  height: 948px;
  @media screen and (max-width: 800px) {
    {
      width: 100%;
      height: 639px;
      margin-left: -105px;
      margin-top: 1305px;
    }
  }
`;

const DesignerLogo = styled.img`
  margin-left: 13px !important;
  width: 100px;
  height: 85px;
  float: left;
  margin-top: -3px;
  @media screen and (max-width: 800px) {
    {
      margin-left: -61px !important;
      width: 100px;
      height: 85px;
      float: left;
      margin-top: -3px;
    }
  }
`;

const DesignerInfobox = styled.div`
  width: 280px;
  height: 91px;
  margin-left: 81px;
  padding-top: 86px;
  font-family: serif;
  @media screen and (max-width: 800px) {
    {
      padding-top: 11px;
    }
  }
`;
const DesignerName = styled.h1`
  font-family: serif;
  margin-top: 14px;
  color: #ababaa;
`;

const DesignerDob = styled.h4`
  font-size: 10px;
  margin-top: 122px;
  margin-left: 104px;
  color: #ababaa;
  @media screen and (max-width: 800px) {
    {
      font-size: 10px;
      margin-top: 0px;
      margin-left: 114px;
      color: #ababaa;
    }
  }
`; 

const DotIcone = styled.h3`
  font-size: 4px;
  margin-bottom: 3px!important;
  color: #ababaa;
}
`;

const GernalDesign = styled.h1`
  margin: 0px 109px 0px;
  padding-top: 25px;
`;

const DesignProudact = styled.h2`
  margin-left: 95px;
  margin-top: 30px;
  @media screen and (max-width: 800px) {
    {
      margin-left: 5px;
    }
  }
`; 

const  Proudact = styled.a`
  margin-left: 15px;
  border: hidden;
  background-color: #f5f5f5;
  font-size: 13px;
  font-weight: 400;
  color:#bdbdbc!important;
`;

const Para1 = styled.p`
  margin-top: 47px;
  margin-left: 114px;
  color: #8d8d8d;
  font-family: sans-serif;
  @media screen and (max-width: 800px) {
    {
      margin-left: 27px;
    }
  }
`;

const ButtonFull = styled.a`
  margin-left: 116px;
  margin-top: 60px;
  background-color: #f14b59!important;
  font-size: 15px;
  width: 153px;
  height: 47px;
  font-weight: 1000!important;
  color: #ffffff!important;
  font-family: 'Roboto', sans-serif;
  @media screen and (max-width: 800px) {
    {
      margin-left: 27px;
    }
  }
`;

export default () => (
  <Thirdpart id="Thirdpart">
    <div className="columns is-gapless">
      <div className="column">
        <Apple src="images/leftsideimage.png" />
      </div>
      <RightCol className="column">
        <DesignerInfobox>
          <DesignerLogo src="images/nlogo.jpg" />
          <DesignerName className="is-size-5 has-text-black">Nandan designer</DesignerName>
          <h2 className="has-text-link">Graphic designer</h2>
        </DesignerInfobox>
        <DesignerDob  className="has-text-weight-semibold">&nbsp;&nbsp;JAN 5, 2016&nbsp;&nbsp;&nbsp; &nbsp;<DotIcone className="fas fa-circle"  />&nbsp;&nbsp;&nbsp;&nbsp;3 MIN READ</DesignerDob>
        <GernalDesign className="has-text-weight-semibold has-text-black is-size-2 is-size-4-mobile">2017 Gernal<br />
          Designed Trends
        </GernalDesign>
        <DesignProudact>
          <Proudact className="button is-hovered">Design</Proudact>  
          <Proudact className="button is-hovered">UX</Proudact>  
          <Proudact className="button is-hovered">Proudact design</Proudact>
        </DesignProudact>
        <Para1 className="has-text-left">
          Digital design always solves a problem,otherwise
          it would be pixel art, understanding the problem,
          throughly is essential to design successful solutions
          Thoroighly research the problem before coming
          up with suitable solutions.<br /><br /><br />
          Crative fewer features,but make them <br />
          instead of just good.
        </Para1>
        <ButtonFull className="button is-hovered has-text-weight-bold">FULL ARTICLE</ButtonFull>
      </RightCol>
    </div>
  </Thirdpart>
);