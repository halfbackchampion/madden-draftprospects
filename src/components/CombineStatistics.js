const CombineStatistics = ({combineStats}) => {
    return(
        <div>
            <h4>Combine Statistics</h4>
            {combineStats && combineStats.map(combine => 
                <ul>
                    <li key = {combine.id}>
                        <div><b>{combine.type}</b>: {combine.score}</div>
                    </li>
                </ul>
            )}
        </div>
    )
}

export default CombineStatistics