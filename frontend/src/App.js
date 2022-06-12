import './App.css';
import Testing from './components/Testing'
import ChampionSearch from './components/ChampionSearch'
import { Space } from '@mantine/core';
import ChampionGrid from './components/ChampionGrid'
// Defenitely an easier way to import icons ^^^

function App() {
  return (
    <div>
      <Testing />
      <Space h="xl"/>
      <ChampionSearch />
      <Space h="xl"/>
      <ChampionGrid />
    </div>
    
  );
}


export default App;
