import React from 'react';
import styled from 'styled-components';

import Star from '../components/Star';
import TyperText from '../components/TyperText';

export default function Home() {
  return (
    <Background>
      <Star />
      <TyperText />
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
