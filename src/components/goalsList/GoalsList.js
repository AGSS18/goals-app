import { useContext } from "react";
import { Context } from "../../services/Memory";
import Goal from "./Goal";

function GoalsList() {
    const [state, dispatch] = useContext(Context);

    return (
        <> 
            {state.order.map(id => <Goal {...state.objects[id]} key={id}/>)}
        </>
     );
}

export default GoalsList;