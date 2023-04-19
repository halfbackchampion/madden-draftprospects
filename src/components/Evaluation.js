const Evaluation = ({evaluation}) => {
    return(
        <div>
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
        </div>
    )
}

export default Evaluation