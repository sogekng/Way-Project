import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
*,
*::after,
*::before {
box-sizing: border-box;  
}
body {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  margin: 0;    
  padding: 0;    
  font-family: sans-serif;    
  transition: all 0.25s linear;
}

.header{
  background-color: ${({ theme }) => theme.headerColor};
}

.navigator{
  background-color: ${({ theme }) => theme.navigatorColor};
}

::-webkit-scrollbar-track {
  background: ${({ theme }) => theme.scrollbarTrack}; 
}

::-webkit-scrollbar-thumb {
background: ${({ theme }) => theme.scrollbarThumb}; 
}

::-webkit-scrollbar-thumb:hover {
background: ${({ theme }) => theme.scrollbarThumbHover}; 
}

.bloco1 a{
  color: ${({ theme }) => theme.textMenu};
}

.bloco2 a{
  color: ${({ theme }) => theme.textMenu};
}

.bloco3 a{
  color: ${({ theme }) => theme.textMenu};
}

.bloco4 a{
  color: ${({ theme }) => theme.textMenu};
}

.bloco5 a{
  color: {}
}

`;