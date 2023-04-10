const Position = (props) => {
  const p = props.position
  const criteria = p.criteria

  return(
    <div>
      <h1>{p.name}</h1>
      <p>For a {p.abbrev} to get selected for the draft board, he must pass <u>ALL</u> of the following criteria: </p>
      {criteria.attributes && criteria.attributes.map(attribute => 
        <ul>
          <li key = {attribute.id}>
            <div><b>[{attribute.score}]</b>: {attribute.description}</div>
            {attribute.eligibleAttributes && attribute.eligibleAttributes.map(attribute => 
              <ul>
                <li key = {attribute}>
                  {attribute}
                </li>
              </ul>
            )}
          </li>
        </ul>
      )}
      {criteria.combineStats && criteria.combineStats.map(combine => 
        <ul>
          <li key = {combine.id}>
            <div><b>[{combine.score}]</b>: {combine.type}</div>
          </li>
        </ul>
      )}
      <img src = {p.imgSrc} alt = {p.name} width = "256" height = "256"/>
    </div>
  )
}

export default Position