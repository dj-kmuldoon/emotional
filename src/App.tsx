import './App.css';
import { useTheme, css } from '@emotion/react'
import styled from '@emotion/styled'
import NavBar from './components/NavBar'
//https://levelup.gitconnected.com/adding-dark-mode-to-your-react-app-with-emotion-css-in-js-fc5c0f926838

function App() {

  const theme = useTheme()

  const RectButton = styled.button`
    padding: 32px;
    color: ${theme.color.buttonPrimaryTxtDefault};
    background-color: ${theme.color.buttonPrimaryBkgDefault};
    border: none;
    font-size: 24px;
    border-radius: 8px;
    font-weight: 500;
    margin: 24px;
    &:hover {
      color:  ${theme.color.buttonPrimaryTxtHover};
      background-color: ${theme.color.buttonPrimaryBkgHover};
    };
    &:active {
      color:  ${theme.color.buttonPrimaryTxtActive};
      background-color: ${theme.color.buttonPrimaryBkgActive};
    }
`

  const AppHeader = styled.header`
    background-color: ${theme.color.paperNeutralBright};
    min-height: 100vh; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: ${theme.color.inkNeutralBright};
`

const AppLink = styled.a`
   color: ${theme.color.inkSystemDefault};
`

  return (
    <div className="App">
      <NavBar/>
      <AppHeader>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <RectButton>Howdy</RectButton>

        {/* <Button
          border="none"
          color="pink"
          height="200px"
          onClick={() => console.log("You clicked on the pink circle!")}
          radius="50%"
          width="200px"
          children="I'm a pink circle!"
        /> */}


        <AppLink
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppLink>
      </AppHeader>
    </div>
  );
}

export default App;
