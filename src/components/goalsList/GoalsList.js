import Goal from "./Goal";

const goals = [
    {
        id: 1,
        details: "Run for 50 minutes",
        period: "day",
        events: 1,
        icon: "🏃",
        goal: 365,
        within: "2022-12-31",
        completed: 50
    },
    {
        id: 2,
        details: "Read 75 books",
        period: "year",
        events: 75,
        icon: "📚",
        goal: 75,
        within: "2022-12-31",
        completed: 12
    },
    {
        id: 3,
        details: "1hr of strenght exercise",
        period: "day",
        events: 1,
        icon: "🏋",
        goal: 365,
        within: "2022-12-31",
        completed: 50
    },
    {
        id: 4,
        details: "Logic exercises",
        period: "day",
        events: 3,
        icon: "🤓",
        goal: 345,
        within: "2022-12-31",
        completed: 33
    },

];

function GoalsList() {
    return (
        <> 
            {goals.map(goal => <Goal {...goal} key={goal.id}/>)}
        </>
     );
}

export default GoalsList;