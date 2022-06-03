const ChampionIcon = (props) => {
  return (
    <div>
      <img src={props.icon} alt=""  />
      <p>{props.name}</p>
    </div>
  )
}

export default ChampionIcon