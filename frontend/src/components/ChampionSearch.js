import { Select } from '@mantine/core';

function ChampionSearch() {
  return (
    <Select
      label="very good search bar"
      placeholder="Choose Champion"
      data={[
        { value: 'vel', label: 'Velkoz' },
        { value: 'bard', label: 'Bard' },
        { value: 'aphelios', label: 'Aphelios' },
        { value: 'rengar', label: 'Rengar' },
      ]}
    />
  );
}

export default ChampionSearch