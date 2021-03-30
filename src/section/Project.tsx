import React from 'react';
import styled from 'styled-components';
import Folder from '../components/Folder';
export default function Project() {
  return (
    <Background>
      <FolderList>
        <Folder>
          <div>children type check</div>
        </Folder>
      </FolderList>
    </Background>
  );
}
const Background = styled.div`
  height: 100vh;
  background: #e4d0c3;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FolderList = styled.div`
  display: flex;
  justify-content: space-around;
`;
