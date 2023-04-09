import {useEffect, useState} from 'react'
import Position from './components/Position'

const App = () => 
{
  const [positions, setPositions] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/positions")
    .then(response => response.json())
    .then(data => setPositions(data))
  }, [])

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