import { createContext, useReducer } from "react";

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

const init = {
    order: [],
    objects: {}
}

function reducer(state, action) {
    switch(action.type) {
        case 'initialize': {
            const goals = action.goals;
            const newState = {
                order: goals.map(goal => goal.id),
                objects: goals.reduce((obj, goal) => ({...obj, [goal.id]: goal}), {})
            };
            return newState;
        }

        case 'add': {
            const id = Math.random(); //action.goals.id;
            const newState = {
                order: [...state.order, id],
                objects: {
                    ...state.objects,
                    [id]: action.goals
                }
            };
            return newState;
        }
        
        case 'update': {
            const id = action.goals.id;
            state.objects[id] = {...action.goals};
            const newState = { ...state };
            return newState;
        }
        
        case 'delete': {
            const id = action.id;
            const newOrder = state.order.filter(item => item != id);
            delete state.objects[id];
            const newState = { 
                order: newOrder,
                objects: state.objects
             };
            return newState;
        }
    }
}

const initGoalsList = reducer(init, {type: 'initialize', goals: goals});

export const Context = createContext(null);

function Memory({children}) {

    const [state, dispatch] = useReducer(reducer, initGoalsList);

    return ( 
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
     );
}

export default Memory;