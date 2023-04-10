const Position = (props) => {
  const p = props.position
  const criteria = p.criteria
  const evaluation = p.evaluation

  return(
    <div>
      <h1>{p.name}</h1>
      <p>For a {p.abbrev} to get selected for the draft board, he must pass <u>ALL</u> of the following criteria: </p>
      <h4>Top 3 Attributes</h4>
      {criteria.attributes && criteria.attributes.map(attribute => 
        <ul>
          <li key = {attribute.id}>
            <div><b>{attribute.description}</b>: {attribute.score}</div>
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
      <h4>Combine Statistics</h4>
      {criteria.combineStats && criteria.combineStats.map(combine => 
        <ul>
          <li key = {combine.id}>
            <div><b>{combine.type}</b>: {combine.score}</div>
          </li>
        </ul>
      )}
      <h4>Statistical Confidence Evaluation</h4>
      <div>
        <p><b>Bust Rate</b>: {evaluation.bustRate}</p>
        <p><b>False Alarm Rate</b>: {evaluation.falseAlarmRate}</p>
        <div>
          <h4>Comments</h4>
          <p>{evaluation.comments}</p>
        </div>
        <div>
          <h4>High Risk/High Reward or Late Rounds</h4>
          <p>{evaluation.riskAssessment}</p>
        </div>
      </div>
      <img src = {p.imgSrc} alt = {p.name} width = "256" height = "256"/>
    </div>
  )
}

export default Position