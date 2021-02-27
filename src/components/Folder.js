import React from 'react';
import styled from 'styled-components';
export default function Folder({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;
