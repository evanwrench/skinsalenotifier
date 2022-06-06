import './App.css';
import Testing from './components/Testing'
import ChampionSearch from './components/ChampionSearch'
import { Grid, Space } from '@mantine/core';
import ChampionIcon from './components/ChampionIcon';
import bard from './images/BardSquare.webp'
import aphe from './images/ApheliosSquare.webp'
import reng from './images/RengarSquare.webp'
import velk from './images/VelKozSquare.webp'
// Defenitely an easier way to import icons ^^^

function App() {
  return (
    <div>
      <Testing />
      <Space h="xl"/>
      <ChampionSearch />
      <Space h="xl"/>
      <Grid justify = "space-around">
      <Grid.Col span={1}>
          <ChampionIcon name="Aphelios" icon={aphe}/>
        </Grid.Col>
        <Grid.Col span={1}>
          <ChampionIcon name="Bard" icon={bard}/>
        </Grid.Col>
        <Grid.Col span={1}>
          <ChampionIcon name="Rengar" icon={reng}/>
        </Grid.Col>
        <Grid.Col span={1}>
          <ChampionIcon name="Velkoz" icon={velk}/>
        </Grid.Col>
      </Grid>
    </div>
    
  );
}


export default App;
