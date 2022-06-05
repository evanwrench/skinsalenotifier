const ChampionIcon = (props) => {
  return (
    <div>
      <img src={props.icon} alt="Champion Image"  />
      <p>{props.name}</p>
    </div>
  )
}

export default ChampionIcon