import "./App.css";
import Login from "./Login";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return(
    <Router>
      <div className="App">
        <main>
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
        </main>
      </div>
    </Router>
  )
}

export default App;