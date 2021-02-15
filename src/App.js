import './App.css';
import React from 'react';
import styled, { keyframes } from 'styled-components';

import Star from './Star';

export default function App() {
  return (
    <Background>
      <Star />
      <TyperContainer>
        <TyperText>Developer Jin's zone 👋</TyperText>
      </TyperContainer>
    </Background>
  );
}

const Background = styled.div`
  background: #242526;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const typing = keyframes` 
from {width: 0;}
to {width: 100%;}`;
const blinkCaret = keyframes` 
from {border-right-color: rgba(255, 255, 255, 0.75);}
to {border-right-color: transparent;}`;

const TyperText = styled.h1`
  overflow: hidden;
  color: white;
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  white-space: nowrap;
  animation: ${typing} 4s steps(44) 1s 1 normal both,
    ${blinkCaret} 400ms steps(44) infinite normal;
`;

const TyperContainer = styled.div`
  margin-top: 20px;
`;
