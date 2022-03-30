import { createContext, useReducer } from "react";

const data = localStorage.getItem('goals')
const init = data ?
    JSON.parse(data)
    :{
        order: [],
        objects: {}
    };

function reducer(state, action) {
    switch(action.type) {
        case 'initialize': {
            const goals = action.goals;
            const newState = {
                order: goals.map(goal => goal.id),
                objects: goals.reduce((obj, goal) => ({...obj, [goal.id]: goal}), {})
            };
            localStorage.setItem('goals', JSON.stringify(newState));
            return newState;
        }

        case 'add': {
            const id = Math.random(); //action.goals.id;
            const newState = {
                order: [...state.order, id],
                objects: {
                    ...state.objects,
                    [id]: { ...action.goals, id: id}
                }
            };
            localStorage.setItem('goals', JSON.stringify(newState));
            return newState;
        }
        
        case 'update': {
            const id = action.goals.id;
            state.objects[id] = {...action.goals};
            const newState = { ...state };
            localStorage.setItem('goals', JSON.stringify(newState));
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
            localStorage.setItem('goals', JSON.stringify(newState));
            return newState;
        }
    }
}

export const Context = createContext(null);

function Memory({children}) {

    const [state, dispatch] = useReducer(reducer, init);

    return ( 
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
     );
}

export default Memory;