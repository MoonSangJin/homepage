import React from 'react';
import styled, { keyframes } from 'styled-components';
import sangJin from '../assets/image/sj.jpg';
export default function About() {
  return (
    <Background>
      <Container>
        <Image src={sangJin} />
        <Explain>
          <H1>
            <Span>ABOUT</Span>
            <Span>Me</Span>
          </H1>
          <H1>
            <Loading>Loading</Loading>
          </H1>
          <Text>Welcome to my zone😎</Text>
          <Text>
            💻I'm a student who is interested in web development and design.🎨
          </Text>
          <Text>
            ⭐I'm growing up dreaming of becoming a great developer someday.⭐
          </Text>
        </Explain>
      </Container>
    </Background>
  );
}

const bop = keyframes` 0% {
  transform: scale(0.9);
}
50%,
100% {
  transform: scale(1);
}`;
const bopB = keyframes`0% {
  transform: scale(0.9);
}
80%,
100% {
  transform: scale(1) rotateZ(-3deg);
}`;

const loading = keyframes`
0% {
  transform: scale(0.9);
}
80%,
100% {
  transform: scale(1) rotateZ(5deg);
}`;

const Background = styled.div`
  height: 100vh;
  background: #8ab7f8;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
  margin: 15px;
  padding: 25px;
  width: 100%;

  font-family: 'Luckiest Guy', cursive;
  border-radius: 8px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const Image = styled.img`
  width: 200px;
  height: 200px;

  border-radius: 8px;
  &:hover {
    transform: scale(1.15);
    cursor: pointer;
  }
  transition: all 0.5s linear;
`;
const Explain = styled.div`
  margin: 20px;
  text-align: center;
`;
const Text = styled.div`
  font-family: 'Luckiest Guy';
  font-weight: bold;
  margin: 8px;
`;

const H1 = styled.div`
  margin-bottom: 1rem;
  font-size: 3rem;
  padding: 0;
  color: white;
  text-shadow: 0 0.1em 20px rgba(0, 0, 0, 1), 0.05em -0.03em 0 rgba(0, 0, 0, 1),
    0.05em 0.005em 0 rgba(0, 0, 0, 1), 0em 0.08em 0 rgba(0, 0, 0, 1),
    0.05em 0.08em 0 rgba(0, 0, 0, 1), 0px -0.03em 0 rgba(0, 0, 0, 1),
    -0.03em -0.03em 0 rgba(0, 0, 0, 1), -0.03em 0.08em 0 rgba(0, 0, 0, 1),
    -0.03em 0 0 rgba(0, 0, 0, 1);
`;
const Span = styled.span`
  transform: scale(0.9);
  display: inline-block;
  &:first-child {
    animation: ${bop} 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards
      infinite alternate;
  }
  &:last-child{
    animation: ${bopB} 1s 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards
    infinite alternate;
}
  }

  margin-right:15px;
`;

const Loading = styled.span`
  transform: scale(0.9);
  display: inline-block;
  &:first-child {
    animation: ${bop} 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards
      infinite alternate;
  }
  &:last-child{
    animation: ${loading} 1s 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards
    infinite alternate;
}
  }

  margin-right:15px;
`;
