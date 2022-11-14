import { useSearchParams } from "react-router-dom"
import { ConvertToFileName } from "../tools/ConvertChampName";
import SkinCheckBox from "../components/SkinCheckBox";

const ChampView = () => {
  let [ searchParams,setSearchParams ] = useSearchParams();
  var champName = searchParams.get('champ');
  var champJsonName = ConvertToFileName(champName);
  const JsonData = require('../champion_info/'+champJsonName+'.json');
  const skinListData = JsonData["data"][champJsonName]["skins"].slice(1);

  // Match champ name with json file name
  

  return (
    <div>
      <h1>{champName}</h1>
      {skinListData.map( (item, i) => {
        //return(<h3>{item["name"]}</h3>);
        return(<SkinCheckBox name = {item["name"]}/>);
      })}
    </div>
  )
}

export default ChampView