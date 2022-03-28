function NewGoalFormDetails() {
    const frequency = ["day", "week", "month", "year"];
    const icons = ["🏃", "📚", "🏋", "🤓", "🧹", "🛒", "✈️", "​💻​"];
    
    return (
        <div className="FormDetails">
            <form>
                <label>
                    Goal description 
                    <input type="text" placeholder="e.g. Drink 4lts of water" />
                </label>
                <label>
                    Frequency<span>e.g. 2 per week</span>
                    <input type="number" />
                    <select>
                        {frequency.map(option => 
                            <option value={option}>{`Per ${option}`}</option>
                        )}
                    </select>
                </label>
                <label>
                     Final Goal
                    <input type="number" />
                </label>
                <label>
                     Deadline
                    <input type="date" />
                </label>
                <label>
                     How many times have you completed the goal?
                    <input type="number" />
                </label>
                <label>
                     Select an icon
                     <select>
                        {icons.map(option => 
                            <option value={option}>{option}</option>
                        )}
                    </select>
                </label>
            </form>
            <div>
                <button>Add</button>
                <button>Cancel</button>
            </div>
        </div>
    );
}

export default NewGoalFormDetails;