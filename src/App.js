import GoalsList from "./components/goalsList/GoalsList";
import NewGoalFormDetails from "./components/newGoal/NewGoalFormDetails";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import Main from "./components/shared/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        {/* <GoalsList /> */}
        <NewGoalFormDetails />
      </ Main>
      <Footer />
    </div>
  );
}

export default App;
