import { Link } from "react-router-dom";

function Goal({id, details, period, events, icon, goal, completed}) {
    return(
        <Link to={`/list/${id}`} className="Goal card">
            <div className="goal-left">
                <div className="goal-icon flex-hw-align">{icon}</div>
                <p className="goal-frequency">
                    {events}
                    <sub>/ {period}</sub>
                </p>
                <p className="goal-details">{details}</p>
            </div>
            <div className="goal-right">
                <div className="goal-right-statusContent">
                    <p className="goal-status">{completed} of {goal}</p>
                    <div className="goal-StatusBar1">
                        <div className="goal-StatusBar2" style={{width: `${Math.round((completed / goal) * 100)}%`}}></div>
                    </div>
                </div>
                <button className="goal-button btn">Completed</button>
            </div>
        </Link>
    );
}

export default Goal;