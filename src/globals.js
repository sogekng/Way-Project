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
}

.header{
  background-color: ${({ theme }) => theme.headerColor};
}

.navigator{
  background-color: ${({ theme }) => theme.navigatorColor};
}

mark {
  color: ${({ theme }) => theme.colorTextMark};
  background-color: #ff073a;
}

.cls-1{
  fill: ${({ theme }) => theme.colorFillSvg};
}

.cls-2{
  fill:#ee2140;
}

.label{
  background-color: ${({ theme }) => theme.colorLabelIcon};
}

.label .ball {
  transform: translateX(${({ theme }) => theme.varLabel});
  background-color: ${({ theme }) => theme.colorLabelball};
}

.setasEs{
  color: ${({ theme }) => theme.setas};
}

.setasDi{
  color: ${({ theme }) => theme.setas};
}


.content03{
  background-color: ${({ theme }) => theme.ColorBdContent03};
}

.content03 h1{
  color: ${({ theme }) => theme.colorLetras};
}

.content03 p{
  color: ${({ theme }) => theme.colorLetras};
}

.textInputTitle{
  color: ${({ theme }) => theme.corLetras};
}

.textInput{
  color: ${({ theme }) => theme.corLetras};
}

.inputContent04{
  background-color: #e4dcc0;
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

.switch--shadow + label:before {
background-color: ${({ theme }) => theme.switchShadowLabelBefore};
}
.switch--shadow + label:after {
background-color: ${({ theme }) => theme.switchShadowLabelAfter};
}
.switch--shadow:checked + label:before {
    background-color: ${({ theme }) => theme.switchShadowCheckedLabelBefore};
}
.switch--shadow:checked + label:after {
    background-color: ${({ theme }) => theme.switchShadowCheckedLabelAfter};
}

`;