import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Attributes from "./Attributes"
import CombineStatistics from "./CombineStatistics"
import Evaluation from "./Evaluation"
import PositionService from "../services/PositionService"


const Position = () => {
  const [p, setPosition] = useState({})
  const id = useParams().id

  useEffect(() => {
    const fetchData = async () => {
      const position = await PositionService().getPosition(id)
      setPosition(position)
    }

    fetchData()
  }, [id])

  return(
    <div className = "flex flex-col">
      <header className = "flex flex-col">
        <h1 className = "text-orange-600">{p.name}</h1>
        <h4>
          For a {p.abbrev} to get selected for the draft board,
          <span className = "text-cyan-500">he must pass <u>ALL</u> of the following criteria:</span>
        </h4>
      </header>
      {p.criteria && <div className = "flex">
        <div className = "flex flex-col flex-1">
          {p.criteria.attributes && <Attributes attributes={p.criteria.attributes}/>}
        </div>
        <div className = "flex flex-col flex-1">
          {p.criteria.combineStats && <CombineStatistics combineStats={p.criteria.combineStats}/>}
        </div>
        <div className = "flex flex-col flex-1">
          <img src = {p.imgSrc} alt = {p.name} width = "256" height = "256"/>
        </div>
      </div>}
      <div className = "flex">
        {p.evaluation && <Evaluation evaluation={p.evaluation}/>}
      </div>
    </div>
  )
}

export default Position