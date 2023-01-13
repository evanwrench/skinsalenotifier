import { Select, Center } from '@mantine/core';

function ChampionSearch() {
  const JsonData = require('../champion.json');
  const data = JsonData["data"];
  var ListData = [];

  for(var i in data)
    ListData.push([i, data[i]]);
  
  var ListNames = ListData.map( (item, i) => item[1]["name"]);

  return (
    <Center>
    <Select
      label="Find Champion or skin"
      placeholder="Choose Champion"
      size="lg"
      searchable
      nothingFound = "No Champions/skins match that name"
      data={ListNames}
    />
    </Center>
  );
}

export default ChampionSearch