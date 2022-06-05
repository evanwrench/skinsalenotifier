import { Select, Center } from '@mantine/core';

function ChampionSearch() {
  return (
    <Center>
    <Select
      label="Find Champion or skin"
      placeholder="Choose Champion"
      size="lg"
      searchable
      nothingFound = "No Champions/skins match that name"
      data={[
        { value: 'vel', label: 'Velkoz' },
        { value: 'bard', label: 'Bard' },
        { value: 'aphelios', label: 'Aphelios' },
        { value: 'rengar', label: 'Rengar' },
      ]}
    />
    </Center>
  );
}

export default ChampionSearch