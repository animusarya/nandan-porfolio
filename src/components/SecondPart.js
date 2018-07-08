import React from 'react';
import styled from 'styled-components';

const  Design  = styled.div`
  margin-left: 137px !important;
  width: 82%;
  background-color: red;
  height: 644px;
  margin-top: 145px!important;
`;

const Illustration = styled.img`
  height: 100%;
  width: 100%;
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
  margin-top: 18px;  
  margin-left: 4px;
  font-weight: 551!important;
  color: #69dde7;
`;

const Branding = styled.img`
  width: 100%;
  height: 350px;
`;

const Card = styled.img`
  width: 100%;
  height: 288px;
`;

const Beyond = styled.div`
  width: 41%;
  height: 76px;
  background-color: #1b6e4ecc !important;
  margin-top: -76px;
  position: absolute;
  line-height: 22px;
  font-family: sans-serif;
`;

const Bix = styled.div`
  width: 302px;
  height: 76px;
  background-color: #1f3db38a!important;
  margin-top: -82px;
  position: absolute;
  line-height: 22px;
  font-family: sans-serif;
`;

const WebDesign = styled.div`
  width: 302px;
  height: 76px;
  background-color: #474342ad!important
  margin-top: -82px;
  position: absolute;
  line-height: 22px;
  font-family: sans-serif;
`;

const Apple = styled.img`
  width: 100%;
  height: 948px;
`;

const SecondPart = styled.div`
  margin-left: 137px !important;
  width: 82%;
  height: 644px;
  margin-top: -24px !important;
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

export default () => (
  <div id="secondpart">
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
            <WebDesign>
              <Tittle className="is-size-6">&nbsp;&nbsp;&nbsp;web design</Tittle>
              <h1 className="is-size-5 has-text-white has-text-weight-bold">&nbsp;&nbsp;&nbsp;SANS AGENCY</h1>
            </WebDesign>
          </div>
        </div>
      </div>
    </Design>
    <SecondPart>
      <div className="columns is-gapless">
        <div className="column">
          <Apple src="images/ios.jpg" />
          <Ios>
            <Tittle className="is-size-6 has-text-warning">&nbsp;&nbsp;&nbsp;iOS Design</Tittle>
            <h1 className="is-size-5 has-text-white has-text-weight-bold">&nbsp;&nbsp;&nbsp;BP&XO CONSULTING</h1>
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
    </SecondPart>
  </div>
);
