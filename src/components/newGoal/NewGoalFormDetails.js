import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Context } from "../../services/Memory";

function NewGoalFormDetails() {

    const { id } = useParams();

    const [form, setForm] = useState(
        {
            details: "",
            period: "",
            events: "",
            icon: "",
            goal: "",
            within: "",
            completed: ""
        }
    );

    const [state, dispatch] = useContext(Context);
    
    const frequency = ["", "day", "week", "month", "year"];
    const icons = ["", "🏃", "📚", "🏋", "🤓", "🧹", "🛒", "✈️", "​💻​"];
    const navigate = useNavigate();
    
    function handleSubmit() {
        dispatch({type: 'add', goals: form});
        setForm({
            details: "",
            period: "",
            events: "",
            icon: "",
            goal: "",
            within: "",
            completed: ""
        });
        navigate("/list");
    }

    function handleUpdate() {
        dispatch({type: 'update', goals: form});
        navigate('/list');
    }
    
    function handleDelete() {
        dispatch({type: 'delete', id});
        navigate('/list');
    }

    function handleChange({target}){
        setForm(prev => ({...prev, [target.name]: target.value}));
    }

    function handleClose() {
        navigate('/list');
    }

    useEffect(() => {
        const isGoal = state.objects[id];
        if(!id) return navigate('/create');
        if(!isGoal) return navigate('/list');
        setForm(isGoal);
    }, [id]);

    return (
        <div className="FormDetails card">
            <form>
                <label>
                    Goal description 
                    <input onChange={handleChange} value={form.details} name="details" type="text" placeholder="e.g. Drink 4lts of water" />
                </label>
                <label>
                    Frequency<span> (e.g. 2 per week)</span>
                    <div className="frequency-inputs">
                        <input onChange={handleChange} value={form.events} name="events" type="number" />
                        <select onChange={handleChange} name="period" value={form.period} >
                            {frequency.map(option => 
                                <option key={option} value={option}>{option}</option>
                            )}
                        </select>
                    </div>
                </label>
                <label>
                     Final Goal
                    <input onChange={handleChange} value={form.goal} name="goal" type="number" />
                </label>
                <label>
                     Deadline
                    <input onChange={handleChange} value={form.within} name="within" type="date" />
                </label>
                <label>
                     How many times have you completed the goal?
                    <input onChange={handleChange} value={form.completed} name="completed" type="number" />
                </label>
                <label>
                     Select an icon
                     <select onChange={handleChange} name="icon" value={form.icon} >
                        {icons.map(option => 
                            <option key={option} value={option}>{option}</option>
                        )}
                    </select>
                </label>
            </form>
            <div className="form-details__btns" >
                {id ?
                    <> 
                    <button onClick={handleUpdate} className="btn" >Update</button>
                    <button onClick={handleDelete} className="btn cancel-btn" >Delete</button>
                    </>
                :
                    <button onClick={handleSubmit} className="btn" >Add</button>
                }
                <button onClick={handleClose} className="btn cancel-btn" >Cancel</button>
            </div>
        </div>
    );
}

export default NewGoalFormDetails;