import { createGlobalStyle } from 'styled-components';

export const darkMode = {
  body: 'black',
  fontColor: 'white'
};

export const lightMode = {
  body: 'white',
  fontColor: 'black'
};

export const GlobalStyles = createGlobalStyle`
    body{
        background-color: ${(props) => props.theme.body};
        color: ${(props) => props.theme.fontColor}
    }
`;
