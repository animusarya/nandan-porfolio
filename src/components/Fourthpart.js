import React from 'react';
import styled from 'styled-components';


const Fourthpart = styled.div`
  width: 1208px;
  height: 524px;
  margin-left: 87px;
`;

const Agency = styled.div`
  font-weight: 713!important;
  @media screen and (max-width: 800px) {
  {
    float: left !important;
    margin-top: 799px !important;
    margin-left: -208px !important;
  }
}
`;
const Active = styled.div`
  width: 64%;
  margin-top: 48px;
  margin-left: 118px;
  font-weight: 800!important;
`;

const Services = styled.div`    
  width: 74%;
  margin-left: 113px;
  padding-top: 86px;
  margin-top: 173px;
  font-weight: 800!important;
`;

const HeadingAgency = styled.a`
  color: #f5663e !important;
  font-weight: 800!important;
`;

const HeadingService = styled.a`
  color: #bfeb45!important;
  font-weight: 800!important;
`;

const Contact = styled.a`
  color: #3bc4c9 !important;
  font-weight: 800!important;
`;

const Work = styled.a`
  font-weight: 800!important;
`;

const RightColFoarm = styled.div`
  font-weight: 80!important;
`;

const Subscription = styled.div`
  padding-left: 82px;
  padding-top: 55px;
  @media screen and (max-width: 800px) {
    {
      padding-top: 2362px;
      width: 50%;
      margin-left: -346px;
    }
  }
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
  @media screen and (max-width:800px) {
    {
      width: 77%;
    }
  }
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
  <Fourthpart id="home">
    <div className="columns is-gapless">
      <Agency className="column">
        <Active>
          <div className="is-pulled-left">
            <ul className="is-pulled-left">
              <li className="is-size-1 is-size-3-mobile has-text-weight-bold"><HeadingAgency className="has-text-weight-bold">Agency</HeadingAgency></li>
              <li className="is-size-6 has-text-weight-bold"><a className="has-text-white">our Team</a></li>
              <li className="is-size-6 has-text-weight-bold"><a className="has-text-white">Awards</a></li>
              <li className="is-size-6 has-text-weight-bold"><a className="has-text-white">Stories</a></li>
              <li className="is-size-6 has-text-weight-bold"><a className="has-text-white">Leadership</a></li>
            </ul>
          </div>
          <div className="is-pulled-right">
            <ul className="is-pulled-right">
              <li className="is-size-1 is-size-3-mobile has-text-weight-bold"><Work href="#" className="has-text-warning has-text-weight-bold">Work</Work></li>
              <li className="has-text-white is-size-6 has-text-weight-bold"><a href="#" className="has-text-white">Branding</a></li>
              <li className="has-text-white is-size-6 has-text-weight-bold"><a href="#" className="has-text-white">illustration</a></li>
              <li className="has-text-white is-size-6 has-text-weight-bold"><a href="#" className="has-text-white">Digital</a></li>
            </ul>
          </div>
        </Active>
        <Services>
          <div className="is-pulled-left">
            <ul className="is-pulled-left">
              <li className="is-size-1 is-size-3-mobile has-text-weight-bold"><HeadingService>Services</HeadingService></li>
              <li className="is-size-6 has-text-weight-bold"><a a href="#" className="has-text-white">Deisign</a></li>
              <li className="is-size-6 has-text-weight-bold"><a a href="#" className="has-text-white">Startegy</a></li>
              <li className="is-size-6 has-text-weight-bold"><a a href="#" className="has-text-white">Contant</a></li>
            </ul>
          </div>
          <div className="is-pulled-right">
            <ul className="is-pulled-right">
              <li className="is-size-1 is-size-3-mobile has-text-weight-bold"><Contact>Contact</Contact></li>
              <li className="has-text-white is-size-6 has-text-weight-bold"><a a href="#" className="has-text-white">Become A Client</a></li>
              <li className="has-text-white is-size-6 has-text-weight-bold"><a a href="#" className="has-text-white">Find us</a></li>
              <li className="has-text-white is-size-6 has-text-weight-bold"><a a href="#" className="has-text-white">Careers</a></li>
            </ul>
          </div>
        </Services>
      </Agency>
      <RightColFoarm className="column">
        <Subscription>
          <h1 className="has-text-Left has-text-white is-size-2 has-text-weight-bold is-size-3-mobile">We are driven<br />
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
          <SubscribtionForm>
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <Input className="input" type="email" placeholder="Email" />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope" />
                </span>
              </p>
            </div>
          </SubscribtionForm>
          <SubscribeButton className="button is-danger">SUBCRIBE</SubscribeButton>
        </Subscription>
      </RightColFoarm>
    </div>
  </Fourthpart>
);