import './index.css'
import {useEffect, useState} from 'react'
import Position from './components/Position'

const App = () => 
{
  const [positions, setPositions] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:5000/")
    .then(response => response.json())
    .then(data => setPositions(data))
  }, [])

  const offense = positions.filter(pos => pos.type === "offense")
  const defense = positions.filter(pos => pos.type === "defense")

  return(
    <div>
      <ul>
        {positions && positions.map(position => (
          <li key = {position.id}>
            <Position position = {position}/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App