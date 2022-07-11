import { useSearchParams } from "react-router-dom"

const ChampView = () => {
  let [ searchParams,setSearchParams ] = useSearchParams();
  var champName = searchParams.get('champ');
  var champJsonName = convertToJsonName(champName);
  const JsonData = require('../champion_info/'+champJsonName+'.json');
  const skinListData = JsonData["data"][champJsonName]["skins"];
  console.log(skinListData)

  // Match champ name with json file name
  function convertToJsonName(s) {
    if (s == "Wukong") {
      return "MonkeyKing";
    }
    let space = true;
    let result = "";
    for (let i = 0; i < s.length; i++) {
      let c = s.charAt(i);
      if (c === '\'' || c === '.') {
        // Do nothing
      } else if (c === " ") {
        space = true;
      } else if (space) {
        result += c.toUpperCase();
        space = false;
      } else {
        result += c.toLowerCase();
      }
    }
    return result;
  }

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