import { Route, Routes } from "react-router";
import Layout from "./components/shared/Layout";
import GoalsList from "./components/goalsList/GoalsList";
import NewGoalFormDetails from "./components/newGoal/NewGoalFormDetails";
import NoMatch from "./components/shared/NoMatch";
import Modal from "./components/shared/Modal";
import { useContext, useEffect } from "react";
import { goalsRequest } from "./services/Requests";
import { Context } from "./services/Memory";


function App() {

  const [, dispatch] = useContext(Context);

  useEffect(() => {
    (async function () {
        const goals = await goalsRequest();
        dispatch({type: 'initialize', goals: goals});
    })();
},[]);

  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<GoalsList />} />
        <Route path="/list" element={<GoalsList />}>
          <Route path="/list/:id" element={<Modal><NewGoalFormDetails /></Modal>} />
        </Route>
        <Route path="/create" element={<NewGoalFormDetails />} />
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
