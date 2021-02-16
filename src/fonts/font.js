import { createGlobalStyle } from 'styled-components';
import DancingScript from './DancingScript-VariableFont_wght.ttf';

export default createGlobalStyle`		      
  @font-face {
    font-family: 'DancingScript';
    src: local('DancingScript'),
    url(${DancingScript} format('woff');
    font-weight: 800; 		 
    font-style: normal;}
    `;
