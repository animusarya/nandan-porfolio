import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

const Body = styled.div`
  width: 100%;
  background-color: #5031a9;
  height:4200px;
`;

const Creative = styled.h1`
  font-family: sans-serif;
  width: 457px;
  font-size: 20px;
`;

const Hbk = styled.div`
  width: 858px;
  margin-left: 239px;
  padding-top: 105px;
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

const  Design  = styled.div`
  margin-left: 137px !important;
  width: 82%;
  background-color: red;
  height: 644px;
  margin-top: 145px!important;
`;

const Illustration = styled.img`
  width: 100%;
  height: 100%;
`;

const Geometry = styled.div`
  width: 41%;
  height: 76px;
  background-color: #dd35687a;
  margin-top: -82px;
  position: absolute;
  line-height: 22px;
  font-family: sans-serif;
`;

const Tittle = styled.h1`
  margin-top:18px;  
  margin-left: 4px;
  font-weight: 551!important
`;

const Branding = styled.img`
  width: 100%;
  height:350px;
`;

const Card = styled.img`
  width: 100%;
  height:288px;
`;

const Beyond = styled.div`
  width: 41%;
  height: 76px;
  background-color:#1b6e4ecc !important;
  margin-top: -76px;
  position: absolute;
  line-height: 22px;
  font-family: sans-serif;
`;

const Bix = styled.div`
  width: 302px;
  height: 76px;
  background-color: #1f3db38a!important;
  margin-top: -83px;
  position: absolute;
  line-height: 22px;
  font-family: sans-serif;
`;

const Web = styled.div`
  width: 302px;
  height: 76px;
  background-color: #474342ad!important
  margin-top: -83px;
  position: absolute;
  line-height: 22px;
  font-family: sans-serif;
`;

const Apple = styled.img`
  width:100%;
  height:948px;
`;

const Secondpart = styled.div`
  margin-left: 137px !important;
  width: 82%;
  height: 644px;
  margin-top: -24px!important;
`;

const Ios = styled.div`
  width: 41%;
  height: 76px;
  background-color: #6c758794;
  margin-top: -82px;
  position: absolute;
  line-height: 22px;
  font-family: sans-serif;
`;

const Art = styled.div`
  width: 41%;
  height: 76px;
  background-color: #cf393aa3;
  margin-top: -82px;
  position: absolute;
  line-height: 22px;
  font-family: sans-serif;
`;

const Thirdpart = styled.div`
  margin-left: 137px !important;
  width: 82%;
  background-color: #ffffff;
  height: 948px;
  margin-top: 304px;
`;

const DesignerLogo = styled.img`
  margin-left: 13px !important;
  width: 100px;
  height: 85px;
  float:left;
  margin-top: -3px;
`;

const DesignerInfobox = styled.div`
  width: 280px;
  height: 91px;
  margin-left: 81px;
  padding-top: 86px;
  font-family: serif;
`;
const DesignerName = styled.h1`
  font-family: serif;
  margin-top:14px;
  color:#ababaa;
`;

const DesignerDob = styled.h1`
  font-size: 10px;
  margin-top: 122px;
  margin-left: 104px;
  color:#ababaa;
`; 

const DotIcone = styled.h1`
  font-size: 4px;
  margin-bottom: 3px!important;
  color:#ababaa;
}
`;

const GernalDesign = styled.h1`
  margin: 0px 109px 0px;
  padding-top: 25px;
`;

const DesignProudact = styled.h1`
  margin-left: 95px;
  margin-top: 30px;
`; 

const  Proudact = styled.a`
  margin-left: 15px;
  border: hidden;
  background-color: #f5f5f5;
  font-size: 13px;
  font-weight: 400;
  color:#bdbdbc!important;
`;

const Digitaldesign = styled.p`
  margin-top:47px;
  margin-left:114px;
  color: #8d8d8d;
  font-family: sans-serif;
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
`;

const Fourthpart = styled.div`
  width:1208px;
  height:744px;
  background-color:red;
  margin-left:137px;
`;
const DesignerWorak = styled.nav`
width: 366px;
margin-left: 103px;
margin-top: 69px;
`;

const TableHead = styled.th`
  color: #f6663e;
  font-size: 48px;
`;
export default () => (
  <Body>
    <Helmet />
    <Hbk>
      <strong className="has-text-warning has-text-weight-bold is-size-3 is-pulled-left"> &nbsp; HBK</strong>
      <Creative className="has-text-white has-text-left">  
      &nbsp;  - &nbsp; creative a agency for forward <br /> &nbsp;&nbsp;&nbsp;&nbsp; thinking brands.
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
    </Hbk>
    <Design className="columns is-gapless">
      <div className="column">
        <Illustration src="images/fast.jpeg" />
        <Geometry>
          <Tittle className="is-size-6 has-text-warning">&nbsp;&nbsp;&nbsp;illustration</Tittle>
          <h1 className="is-size-5 has-text-white has-text-weight-semibold">&nbsp;&nbsp;&nbsp;GEOMETRY KINGS</h1>
        </Geometry>
      </div>
      <div className="column">
        <Branding src="images/branding.jpg" />
        <Beyond>
          <Tittle className="is-size-6 has-text-success">&nbsp;&nbsp;&nbsp;Branding</Tittle>
          <h1 className="is-size-5 has-text-white has-text-weight-semibold">&nbsp;&nbsp;&nbsp;BEYOND</h1>
        </Beyond>
        <div className="columns is-gapless">
          <div className="column">
            <Card src="images/card.jpeg" />
            <Bix>
              <Tittle className="is-size-6 has-text-warning">&nbsp;&nbsp;&nbsp;Branding</Tittle>
              <h1 className="is-size-5 has-text-white has-text-weight-semibold">&nbsp;&nbsp;&nbsp;BIX CONSULTING</h1>
            </Bix>
          </div>
          <div className="column">
            <Card src="images/web-design.jpg" />
            <Web>
              <Tittle className="is-size-6 has-text-warning">&nbsp;&nbsp;&nbsp;web design</Tittle>
              <h1 className="is-size-5 has-text-white has-text-weight-semibold">&nbsp;&nbsp;&nbsp;SANS AGENCY</h1>
            </Web>
          </div>
        </div>
      </div>
    </Design>
    <Secondpart>
      <div className="columns is-gapless">
        <div className="column">
          <Apple src="images/ios.jpg" />
          <Ios>
            <Tittle className="is-size-6 has-text-warning">&nbsp;&nbsp;&nbsp;iOS  Design</Tittle>
            <h1 className="is-size-5 has-text-white has-text-weight-semibold">&nbsp;&nbsp;&nbsp;BP&XO CONSULTING</h1>
          </Ios>
        </div>
        <div className="column">
          <Apple src="images/dwring.jpg" />
          <Art>
            <Tittle className="is-size-6 has-text-warning">&nbsp;&nbsp;&nbsp;Art Book</Tittle>
            <h1 className="is-size-5 has-text-white has-text-weight-semibold">&nbsp;&nbsp;&nbsp;COMMON TIME</h1>
          </Art>
        </div>
      </div>
    </Secondpart>
    <Thirdpart>
      <div className="columns is-gapless">
        <div className="column">
          <Apple src="images/leftsideimage.png" />
        </div>
        <div className="column">
          <DesignerInfobox>
            <DesignerLogo src="images/nlogo.jpg" />
            <DesignerName className="is-size-5 has-text-black  ">Nandan designer</DesignerName>
            <h2 className="has-text-link">Graphic designer</h2>
          </DesignerInfobox>
          <DesignerDob  className="has-text-weight-semibold">&nbsp;&nbsp;JAN 5, 2016&nbsp;&nbsp;&nbsp; &nbsp;<DotIcone className="fas fa-circle"  />&nbsp;&nbsp;&nbsp;&nbsp;3 MIN READ</DesignerDob>
          <GernalDesign className="has-text-weight-semibold has-text-black is-size-2">2017 Gernal<br />
              Designed Trends
          </GernalDesign>
          <DesignProudact>
            <Proudact className="button is-hovered">Design</Proudact>  
            <Proudact className="button is-hovered">UX</Proudact>  
            <Proudact className="button is-hovered">Proudact design</Proudact>
          </DesignProudact>
          <Digitaldesign> Digital design always solves a problem,otherwise<br />
            it would be pixel art, understanding the problem,<br />
            throughly is essential to design successful solutions<br />
            Thoroighly research the problem before coming<br />
            up with suitable solutions.<br /><br /><br /><br />
            Creative fewer features,but make them great<br />
            instead of just good.
          </Digitaldesign>
          <ButtonFull className="button is-hovered has-text-weight-bold">FULL ARTICLE</ButtonFull>
        </div>
      </div>
    </Thirdpart>
    <Fourthpart>
      <div className="columns is-gapless">
        <div className="column">
          <DesignerWorak className="level">
            <div className="level-left" >
              <table>
                <thead>
                  <tr>
                    <TableHead className="has-text-danger is-size-1">Agency</TableHead>
                  </tr>
                </thead>
                <tbody  className="has-text-centered	has-text-white has-text-weight-semibold">
                  <tr>
                    <td>our Team</td>
                  </tr>
                  <tr>
                    <td>Awards</td>
                  </tr>
                  <tr>
                    <td>Stories</td>
                  </tr>
                  <tr>
                    <td>Leadership</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="level-right" >
              <table>
                <thead>
                  <tr>
                    <th className="has-text-danger is-size-1">Work</th>
                  </tr>
                </thead>
                <tbody   className="has-text-centered	has-text-white has-text-weight-semibold">
                  <tr>
                    <td>Branding</td>
                  </tr>
                  <tr>
                    <td>illustration</td>
                  </tr>
                  <tr>
                    <td>Digital</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </DesignerWorak>
          <DesignerWorak className="level">
            <div className="level-left" >
              <table>
                <thead>
                  <tr>
                    <TableHead className="has-text-danger is-size-1">Services</TableHead>
                  </tr>
                </thead>
                <tbody  className="has-text-centered	has-text-white has-text-weight-semibold">
                  <tr>
                    <td>Design</td>
                  </tr>
                  <tr>
                    <td>Startegy</td>
                  </tr>
                  <tr>
                    <td>Contant</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="level-right" >
              <table>
                <thead>
                  <tr>
                    <th className="has-text-danger is-size-1">Contact</th>
                  </tr>
                </thead>
                <tbody  className="has-text-centered	has-text-white has-text-weight-semibold">
                  <tr>
                    <td>Become A Client</td>
                  </tr>
                  <tr>
                    <td>Find Us</td>
                  </tr>
                  <tr>
                    <td>Careers</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </DesignerWorak>
        </div>
        <div className="column">
            no gap
        </div>
      </div>
    </Fourthpart>
  </Body>
);
