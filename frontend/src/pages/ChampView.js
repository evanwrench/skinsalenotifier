import { useSearchParams } from "react-router-dom"
import { ConvertToFileName } from "../tools/ConvertChampName";

const ChampView = () => {
  let [ searchParams,setSearchParams ] = useSearchParams();
  var champName = searchParams.get('champ');
  var champJsonName = ConvertToFileName(champName);
  const JsonData = require('../champion_info/'+champJsonName+'.json');
  const skinListData = JsonData["data"][champJsonName]["skins"];
  console.log(skinListData)

  // Match champ name with json file name
  

  return (
    <div>
      <h1>{champName}</h1>
      {skinListData.map( (item, i) => {
        return(<h3>{item["name"]}</h3>);
      })}
    </div>
  )
}

export default ChampView