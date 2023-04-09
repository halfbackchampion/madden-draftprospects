const Position = (props) => {
  const p = props.position

  return(
    <div>
      <h1>{p.name}</h1>
      <img src = {p.imgSrc} alt = {p.name}/>
    </div>
  )
}

export default Position