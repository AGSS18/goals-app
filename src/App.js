import GoalsList from "./components/goalsList/GoalsList";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import Main from "./components/shared/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <GoalsList />
      </ Main>
      <Footer />
    </div>
  );
}

export default App;
