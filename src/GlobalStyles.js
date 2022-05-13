import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  line-height:1.1;
  color:${({ theme }) => theme.color};
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-weight: 500;
  outline:none;
  border:none;
  font-family: 'Roboto', sans-serif;
  user-select: none !important;
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
}
:is(h1,h2,h3,h4,h5,h6){
  font-family: "Poppins", sans-serif;
}
*::-webkit-scrollbar {
  display: none;
}
*:not(html, body, div#root) {
  transition: background-color 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55),color 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) ;
}

img{
  pointer-events:none;
}

.touchableOpacity:active{
  filter: opacity(0%);
}
 .hasCursorPointer {
  cursor: pointer;
}
.hasShadow {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}
.hasShadowTwo {
  box-shadow: 0 2px 6px rgb(0 0 0 / 30%);
}

@media only screen and (max-width: 550px) {
  .wontShowOnMobile {
    display: none;
  }
}

@media only screen and (min-width: 550px) and (max-width: 768px) {
  .wontShowOnTablet {
    display: none;
  }
}

@media only screen and (min-width: 769px) {
  .wontShowOnDesktop {
    display: none;
  }
}
`;
