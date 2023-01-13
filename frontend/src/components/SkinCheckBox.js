import { Checkbox } from "@mantine/core"
import '../styling/SkinCheckBox.css'

const SkinCheckBox = (props) => {
  return (
    <div className = 'alignHorizontal'>
        <Checkbox /> {/*onChange={(event) => console.log("hello")}*/}
        <h3>{props.name}</h3>
    </div>
  )
}

export default SkinCheckBox