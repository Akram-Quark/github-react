import "./App.css";
import Users from "./components/Users";
import Navbar from "./layouts/Navbar";

function App() {
  return (
    <div className="App">
      {/*search bar */}
      <Navbar></Navbar>
      {/*users*/}
      <div className="container">
        <Users></Users>
      </div>
    </div>
  );
}

export default App;
