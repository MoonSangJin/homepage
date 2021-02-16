import React from 'react';
import styled, { keyframes } from 'styled-components';

export default function TyperText() {
  return (
    <TyperContainer>
      <Text>Developer Jin 👋</Text>
    </TyperContainer>
  );
}

const TyperContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const typing = keyframes` 
from {width: 0;}
to {width: 100%;}`;
const blinkCaret = keyframes` 
from {border-right-color: rgba(255, 255, 255, 0.75);}
to {border-right-color: transparent;}`;

const Text = styled.h1`
  overflow: hidden;
  color: white;
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  white-space: nowrap;
  animation: ${typing} 4s steps(44) 1s 1 normal both,
    ${blinkCaret} 400ms steps(44) infinite normal;
`;
