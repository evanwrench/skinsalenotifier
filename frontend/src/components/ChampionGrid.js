import ChampionIcon from './ChampionIcon';
import { Grid, Button } from '@mantine/core';
import { useEffect, useState } from 'react';
import bard from '../images/BardSquare.webp'

const ChampionGrid = () => {
  const JsonData = require('../champion.json');
  const data = JsonData["data"];
  var ListData = [];

  for(var i in data)
    ListData.push([i, data[i]]);
  
  
  return (
    <Grid>
      {ListData.map( (item, i) => 
      <Grid.Col span={2}><ChampionIcon name = {item[1]["name"]} icon = {bard} /> </Grid.Col>)};
      {/* ICON: {"../assets/champion-tiles/" + item[1]["image"]["full"]}*/ }
      
      </Grid>
  )
}

export default ChampionGrid