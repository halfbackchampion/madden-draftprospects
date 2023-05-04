const Evaluation = ({evaluation}) => {
    return(
        <div className = "bg-gray-500">
            <h1>Statistical Confidence Evaluation</h1>
            <div className = "flex">
                <div className="flex flex-col">
                    <div>
                        <p><h1 className = "text-green-700">Bust Rate</h1>: {evaluation.bustRate}</p>
                        <p>Probability of saying we have a stud and they end up being less than a 76</p>
                    </div>
                    <div>
                        <p><h1 className = "text-red-700">False Alarm Rate</h1>: {evaluation.falseAlarmRate}</p>
                        <p>Probability of rejecting a player who actually is above 78 overall</p>
                    </div>
                </div>
                <div className = "flex flex-col">
                    <div>
                        <h1>Comments</h1>
                        <p>{evaluation.comments}</p>
                    </div>
                    <div>
                        <h1>High Risk/High Reward or Late Rounds</h1>
                        <p>{evaluation.riskAssessment}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Evaluation