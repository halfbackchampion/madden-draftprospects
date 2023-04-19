const Attributes = ({attributes}) => {
    return(
        <div>
            <h4>Top 3 Attributes</h4>
            {attributes && attributes.map(attribute => 
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
        </div>
    )
}

export default Attributes