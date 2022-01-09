import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
	}
  html{
    -webkit-font-smoothing: antialiased;
  }
  body{
    background: #FAFAFA;
  }
	a {
		text-decoration: none;
		cursor: pointer;
	}
  ul{
    list-style: none;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
  }
	button {
    border: none;
    background: none;
    cursor: pointer;
  }
  input{
    border: none;
  }
  .noScroll{
    position: fixed; 
    overflow-y: scroll;
    width: 100%;
  }
`;

export default GlobalStyle;
