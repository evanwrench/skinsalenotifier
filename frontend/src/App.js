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
        <Testing />
      </header>
    </div>
    </MantineProvider>
  );
}

export default App;
