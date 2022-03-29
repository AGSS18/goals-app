import { Route, Routes } from "react-router";
import Layout from "./components/shared/Layout";
import GoalsList from "./components/goalsList/GoalsList";
import NewGoalFormDetails from "./components/newGoal/NewGoalFormDetails";
import NoMatch from "./components/shared/NoMatch";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<GoalsList />} />
        <Route path="/list" element={<GoalsList />} />
        <Route path="/create" element={<NewGoalFormDetails />} />
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
