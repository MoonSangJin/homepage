import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
export default function Header() {
  return (
    <Container>
      <Wrapper>
        <Link to="home" smooth="true">
          <MenuButton>Home</MenuButton>
        </Link>
        <Link to="about" smooth="true">
          <MenuButton>About</MenuButton>
        </Link>
        <Link to="project" smooth="true">
          <MenuButton>Project</MenuButton>
        </Link>
        <Link to="contact" smooth="true">
          <MenuButton>Contact</MenuButton>
        </Link>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  width: 100vw;
  top: 0;
  background: transparent;

  z-index: 9999;
`;
const Wrapper = styled.div`
  background: transparent;
  width: fit-content;
  display: flex;
  margin: 0 auto;

  margin-top: 5px;
`;
const MenuButton = styled.div`
  font-size: 1.5rem;
  text-align: center;
  color: white;
  margin-right: 10px;

  font-family: 'Luckiest Guy';
  font-weight: bold;
  &:hover {
    color: grey;
    cursor: pointer;
  }
`;
