import "./App.css";
import Login from "./Login";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const name = 'Julian'
  const x = false

  return (
    <div className='container'>
      <h1>Hello From React</h1>
      <h2>Hello {x ? 'Yes' : 'No'}</h2>
    </div>
  )
}

export default App;

/* 
<Router>
      <div className="App">
        <main>
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
        </main>
      </div>
    </Router>
 */