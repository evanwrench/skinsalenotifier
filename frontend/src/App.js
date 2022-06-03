import logo from './logo.svg';
import './App.css';
import Testing from './components/Testing'
import ChampionSearch from './components/ChampionSearch'
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <div>
      <Testing />
      <ChampionSearch />
    </div>
    
  );
}

export default App;
