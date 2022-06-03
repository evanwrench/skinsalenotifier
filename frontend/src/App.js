import logo from './logo.svg';
import './App.css';
import Testing from './components/Testing'
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider
    theme={{fontFamily: 'Open Sans, sans serif',}}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Testing />
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
    </MantineProvider>
  );
}

export default App;
