import React from 'react';
import styled, { keyframes } from 'styled-components';
import blueStar from './assets/image/blueStar.svg';

export default function Star() {
  return <BlueStar src={blueStar} />;
}

const spinStar = keyframes` from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}`;

const BlueStar = styled.img`
  animation: ${spinStar} infinite 20s linear;
  width: 20rem;
`;
