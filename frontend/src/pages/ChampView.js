import { useSearchParams } from "react-router-dom"

const ChampView = () => {
  let [ searchParams,setSearchParams ] = useSearchParams();
  var champName = searchParams.get('champ');
  var champJsonName = convertToJsonName(champName);

  // Match champ name with json file name
  function convertToJsonName(s) {
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
        <h1>{champJsonName}</h1>
    </div>
  )
}

export default ChampView