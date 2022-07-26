import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useTheme } from '@emotion/react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Button from './components/Button'

//https://levelup.gitconnected.com/adding-dark-mode-to-your-react-app-with-emotion-css-in-js-fc5c0f926838

function App(_isDark: any) {

  const theme = useTheme()

  // function SomeText() {
  //   const theme = useTheme()
  //   return <div css={{ color: theme.background }} {...props} />
  // }

  const RectButton = styled.button`
    padding: 32px;
    background-color: ${theme.color.primary};
    font-size: 24px;
    border-radius: 4px;
    font-weight: bold;
    &:hover {
      color: white;
    }
`

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <RectButton>Howdy</RectButton>


        <Button 
        border="none"
        color="pink"
        height = "200px"
        onClick={() => console.log("You clicked on the pink circle!")}
        radius = "50%"
        width = "200px"
        children = "I'm a pink circle!"
      />






        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
