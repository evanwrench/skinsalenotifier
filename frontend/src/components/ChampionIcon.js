import { ConvertToFileName } from "../tools/ConvertChampName";

const ChampionIcon = (props) => {
  const fileName = ConvertToFileName(props.name);
  const champIcon = require('../assets/champion-tiles/'+props.id+'.png');

  return (
    <div>
      <img src={champIcon} alt="Champion Image"  />
      <p>{props.name}</p>
    </div>
  )
}

export default ChampionIcon