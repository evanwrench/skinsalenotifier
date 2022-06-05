import './App.css';
import Testing from './components/Testing'
import ChampionSearch from './components/ChampionSearch'
import { Space } from '@mantine/core';
import ChampionIcon from './components/ChampionIcon';

function App() {
  return (
    <div>
      <Testing />
      <Space h="xl"/>
      <ChampionSearch />
      <Space h="xl"/>
      <ChampionIcon name="Champion" icon=""/>
    </div>
    
  );
}

export default App;
