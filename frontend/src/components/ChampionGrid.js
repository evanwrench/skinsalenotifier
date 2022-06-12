import ChampionIcon from './ChampionIcon';
import bard from '../images/BardSquare.webp'
import aphe from '../images/ApheliosSquare.webp'
import reng from '../images/RengarSquare.webp'
import velk from '../images/VelKozSquare.webp'
import { Grid, Button } from '@mantine/core';
import { useEffect, useState } from 'react';

const ChampionGrid = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Hello World");
  }, [count]);

  return (
    <Grid justify = "space-around">
      <Button onClick={() => setCount(count + 1)}>
        {count}
      </Button>
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
  )
}

export default ChampionGrid