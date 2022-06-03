const ChampionIcon = (name, icon) => {
  return (
    <div>
      <img src={icon} alt="" />
      <p>{name}</p>
    </div>
  )
}

export default ChampionIcon