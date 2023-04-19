import Attributes from "./Attributes"
import CombineStatistics from "./CombineStatistics"
import Evaluation from "./Evaluation"


const Position = (props) => {
  const p = props.position
  const criteria = p.criteria
  const evaluation = p.evaluation

  return(
    <div>
      <h1>{p.name}</h1>
      <p>For a {p.abbrev} to get selected for the draft board, he must pass <u>ALL</u> of the following criteria: </p>
      <Attributes attributes={criteria.attributes}/>
      <CombineStatistics combineStats={criteria.combineStats}/>
      <Evaluation evaluation={evaluation}/>
      <img src = {p.imgSrc} alt = {p.name} width = "256" height = "256"/>
    </div>
  )
}

export default Position