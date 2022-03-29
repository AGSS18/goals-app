import { useEffect, useState } from "react";

function NewGoalFormDetails() {
    const [form, setForm] = useState(
        {
            details: "what",
            period: "day",
            events: 1,
            icon: "🏋",
            goal: 365,
            within: "2022-12-31",
            completed: 50
        }
    );
    
    const frequency = ["day", "week", "month", "year"];
    const icons = ["🏃", "📚", "🏋", "🤓", "🧹", "🛒", "✈️", "​💻​"];

    function handleSubmit() {
        console.log(form);
    }

    function handleChange({target}){
        setForm(prev => ({...prev, [target.name]: target.value}))
    }

    useEffect(() => {
        // console.log(form);
    }, [form]);

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
                                <option key={option} value={option}>{`Per ${option}`}</option>
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
                <button onClick={handleSubmit} className="btn" >Add</button>
                <button className="btn cancel-btn" >Cancel</button>
            </div>
        </div>
    );
}

export default NewGoalFormDetails;