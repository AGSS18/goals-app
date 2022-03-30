import { useContext } from "react";
import { Outlet } from "react-router";
import { Context } from "../../services/Memory";
import Goal from "./Goal";

function GoalsList() {
    const [state, dispatch] = useContext(Context);

    return (
        <> 
            {state.order.map(id => <Goal {...state.objects[id]} key={id}/>)}
            <Outlet />
        </>
     );
}

export default GoalsList;