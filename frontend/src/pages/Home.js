import Testing from '../components/Testing'
import ChampionSearch from '../components/ChampionSearch'
import { Space } from '@mantine/core';
import ChampionGrid from '../components/ChampionGrid'

function Home() {
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

export default Home;