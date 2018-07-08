import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import FirstPart from '../components/FirstPart';
import SecondPart from '../components/SecondPart';
import ThirdPart from '../components/ThirdPart';

const Body = styled.div`
  width: 100%;
  background-color: #5031a9;
  height: 3857px;
`;

const Fourthpart = styled.div`
  width: 1208px;
  height: 524px;
  margin-left: 137px;
`;

const DesignerWork = styled.nav`
  width: 366px;
  margin-left: 103px;
  margin-top: 69px;
  font-weight: 600;
  line-height: 29px;
`;

const TableHead = styled.th`
  color: #f76540;
  font-size: 48px;
  padding-bottom: 22px;
`;

const TableBody = styled.tbody`
  font-weight: 600px !important;
`; 

const LevelRight = styled.div`
  margin-left: 69px;
`;

const TableheadServices = styled.th`
  color: #bdeb47;
  font-size: 48px;
  padding-bottom: 22px;
`;

const Subscription = styled.th`
  padding-left: 71px;
  padding-top: 60px;
`;

const SubscribeButton = styled.a`
  margin-top: 29px;
  width: 128px;
  height: 43px;
  font-size: 14px;
  background-color: #f14b59 !important;
`;

const SubscribtionForm = styled.div`
  padding-top: 29px;
`;

const DesignerMarketing = styled.div`
  padding-bottom: 22px;
`;

const Footer = styled.div`
  width: 100%;
  background-color: #4c2ea1;
  height: 117px;
`;

const LeftFooter = styled.div`
  width: 650px;
  Padding-Left: 227px;
  padding-top: 23px;
`;

const RightFooter = styled.div`
  width:500px;
  Padding-Right: 74px;
  padding-top: 23px;

`;

const Brands = styled.h1`
  padding-top: 7px
`;

const Icon = styled.i`
  color: #fac507;
  margin-top: 14px;
`;

const IconTwitter = styled.i`
  color: #fac507;
  margin-top: 14px;
  margin-left: 132px;
`;

const Hbk = styled.h2`
  color: #fac501!important;
`;

const Input = styled.input`
  background-color: transparent;
  border-bottom: 1px solid white;
  border-top: none;
  border-right: none;
  border-left: none;
  border-radius: 0;
  box-shadow: none;
  color: #ffff;
  ::placeholder {
    color: #afafaf;
  }
}
`;
export default () => (
  <Body>
    <Helmet />
    <FirstPart />
    <SecondPart />
    <ThirdPart />
    <Fourthpart id="home">
      <div className="columns is-gapless">
        <div className="column">
          <DesignerWork className="level">
            <div className="level-left" >
              <table>
                <thead>
                  <tr>
                    <TableHead className="is-size-1">Agency</TableHead>
                  </tr>
                </thead>
                <TableBody className="has-text-centered has-text-white">
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
                </TableBody>
              </table>
            </div>
            <DesignerMarketing className="level-right">
              <table>
                <th>
                  <tr>
                    <TableHead className="has-text-warning is-size-1">Work</TableHead>
                  </tr>
                </th>
                <TableBody className="Skiphas-text-centered	has-text-white">
                  <tr>
                    <td>Branding</td>
                  </tr>
                  <tr>
                    <td>illustration</td>
                  </tr>
                  <tr>
                    <td>Digital</td>
                  </tr>
                </TableBody>
              </table>
            </DesignerMarketing>
          </DesignerWork>
          <DesignerWork className="level">
            <div className="level-left" >
              <table>
                <thead>
                  <tr>
                    <TableheadServices className="is-size-1">Services</TableheadServices>
                  </tr>
                </thead>
                <TableBody className="has-text-centered	has-text-white">
                  <tr>
                    <td>Design</td>
                  </tr>
                  <tr>
                    <td>Startegy</td>
                  </tr>
                  <tr>
                    <td>Contant</td>
                  </tr>
                </TableBody>
              </table>
            </div>
            <LevelRight className="level-right" >
              <table>
                <thead>
                  <tr>
                    <TableHead className="has-text-info is-size-1">Contact</TableHead>
                  </tr>
                </thead>
                <TableBody className="has-text-centered	has-text-white">
                  <tr>
                    <td>Become A Client</td>
                  </tr>
                  <tr>
                    <td>Find Us</td>
                  </tr>
                  <tr>
                    <td>Careers</td>
                  </tr>
                </TableBody>
              </table>
            </LevelRight>
          </DesignerWork>
        </div>
        <div className="column">
          <Subscription>
            <h1 className="has-text-Left	has-text-white is-size-2 has-text-weight-semibold">We are driven<br />
                to deliver results<br />
                for business
            </h1>
            <SubscribtionForm className="field">
              <p className="control has-icons-left has-icons-right">
                <Input className="input" type="email" placeholder="NAME" />
                <span className="icon is-small is-left">
                  <i className="fas fa-user" />
                </span>
              </p>
            </SubscribtionForm>
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <Input className="input" type="email" placeholder="Email" />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope" />
                </span>
              </p>
            </div>
            <SubscribeButton className="button is-danger">SUBCRIBE</SubscribeButton>
          </Subscription>
        </div>
      </div>
    </Fourthpart>
    <Footer>
      <LeftFooter className="is-pulled-left">
        <Hbk className="has-text-weight-bold is-size-3 is-pulled-left">&nbsp; HBK&nbsp; </Hbk>
        <Brands className="has-text-white has-text-left is-size-5 has-text-weight-normal">  
           &nbsp;&nbsp;&nbsp;-&nbsp;creative a agency for forward <br /> &nbsp;&nbsp;&nbsp;&nbsp; thinking brands.
        </Brands>
      </LeftFooter>
      <RightFooter className="is-pulled-right">
        <h1 className="has-text-white is-size-6 has-text-weight-normal">@ 2017 HBK. All right Reserved.</h1>
        <a href="https://twitter.com/Souravarya4u"><IconTwitter className="fab fa-twitter" /></a>&nbsp;&nbsp;&nbsp;
        <a href="https://www.facebook.com/mirza.mahi.90"><Icon className="fab fa-facebook-square" /></a>&nbsp;&nbsp;&nbsp;
        <a href="https://www.linkedin.com/in/sourav-arya-84b93415b/"><Icon className="fab fa-linkedin-in" /></a>&nbsp;&nbsp;&nbsp;
        <a href="https://www.facebook.com/mirza.mahi.90"><Icon className="fab fa-pinterest-p" /></a>&nbsp;&nbsp;&nbsp;
      </RightFooter>
    </Footer>
  </Body>
);
