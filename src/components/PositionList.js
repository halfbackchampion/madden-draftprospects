import {Link} from 'react-router-dom'

const PositionList = ({positions}) => {
    const offense = positions.filter(pos => pos.type === "offense")
    const defense = positions.filter(pos => pos.type === "defense")

    return(
        <div className = "flex flex-col">
            <ul className = "flex flex=row">
                {offense && offense.map(position => 
                <li key = {position.abbrev}>
                    <Link to={`/${position.id}`}><img src = {position.imgSrc} alt = {position.name} width = "256" height = "256"/></Link>
                </li>  
                )}  
            </ul>   
            <ul className = "flex flex-row">
                {defense && defense.map(position => 
                <li key = {position.abbrev}>
                    <Link to={`/${position.id}`}><img src = {position.imgSrc} alt = {position.name} width = "256" height = "256"/></Link>
                </li>  
                )}
            </ul> 
        </div>
    )
}

export default PositionList