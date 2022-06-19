import Testing from '../components/Testing'
import ChampionSearch from '../components/ChampionSearch'
import { Space } from '@mantine/core';
import ChampionGrid from '../components/ChampionGrid'
import ChampView from './ChampView';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function Home() {
  return (
    <div>
        <Testing />
        <Link to="/champview">TEST</Link>
        <Space h="xl"/>
        <ChampionSearch />
        <Space h="xl"/>
        <ChampionGrid />
    </div>
  );
}

export default Home;