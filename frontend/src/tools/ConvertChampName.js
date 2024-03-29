
function ConvertToFileName(s) {
    // Special cases
    if (s === "Wukong") {
      return "MonkeyKing";
    } else if (s === "Jarvan IV") {
      return "JarvanIV";
    } else if (s === "Renata Glasc") {
      return "Renata";
    } else if (s === "Rek'Sai") {
      return "RekSai";
    } else if (s === "Kog'Maw") {
      return "KogMaw";
    }
    // Default case
    let space = true;
    let result = "";
    for (let i = 0; i < s.length; i++) {
      let c = s.charAt(i);
      if (c === '\'') {
        // Do nothing
      } else if (c === " " || c === '.') {
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



export {ConvertToFileName};