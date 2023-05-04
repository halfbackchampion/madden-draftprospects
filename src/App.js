import './index.css'
import {useEffect, useState} from 'react'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import Position from './components/Position'
import PositionList from './components/PositionList'
import PositionService from './services/PositionService'

const App = () => 
{
  const [positions, setPositions] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await PositionService().getAll()
      setPositions(data)
    }

    fetchData()
  }, [])

  return(
    <Router>
      <div>
        <Link to="/">home</Link>
      </div>
      <Routes>
        <Route path = "/" element = {<PositionList positions = {positions}/>}/>
        <Route path = "/:id" element = {<Position/>}/>
      </Routes>
    </Router>
  )
}

export default App