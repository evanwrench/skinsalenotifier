import ChampionIcon from './ChampionIcon';
import { Grid, Button } from '@mantine/core';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ChampionGrid = () => {

  const JsonData = require('../champion.json');
  const data = JsonData["data"];
  var ListData = [];

  for(var i in data)
    ListData.push([i, data[i]]);
  
  return (
    <Grid>
      {ListData.map( (item, i) => {
      const searchName = "champ=" + item[1]["name"];
      return(
      <Grid.Col span={2}>
        <Link to={{pathname: "/champview", search: searchName }} >
          {/* <ChampionIcon name = {item[1]["name"]} /> */}
          <ChampionIcon name = {item[1]["name"]} id = {item[1]["id"]} /> 
        </Link>
      </Grid.Col>
      )})};
    </Grid>
  )
}

export default ChampionGrid