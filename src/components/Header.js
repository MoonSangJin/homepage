import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
export default function Header() {
  return (
    <Container>
      <Link to="home" smooth="true">
        <MenuButton>Home</MenuButton>
      </Link>
      <Link to="about" smooth="true">
        <MenuButton>About</MenuButton>
      </Link>
      <Link to="skill" smooth="true">
        <MenuButton>Skill</MenuButton>
      </Link>
      <Link to="contact" smooth="true">
        <MenuButton>Contact</MenuButton>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  width: 100vw;
  top: 0;
  background: transparent;
  display: flex;
  justify-content: center;
  z-index: 9999;
`;

const MenuButton = styled.div`
  font-size: 1.5rem;
  text-align: center;
  color: grey;
  margin: 8px;

  &:hover {
    color: white;
    cursor: pointer;
  }
`;
