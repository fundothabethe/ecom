import "./style/App.css";
import Admin from "./Admin/Admin";
import { useSelector } from "react-redux";
import Content from "./Admin/Content";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Ecom from "./Ecom";
import Sign from "./Admin/Sign";

function App() {
  const user = useSelector((state) => state);

  console.log(user);
  //
  return (
    <div className="App">
      {user ? (
        <Router>
          <Switch>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/content">
              <Content />
            </Route>
          </Switch>
        </Router>
      ) : (
        <Router>
          <Switch>
            <Route path="/admin">
              <Sign />
            </Route>
            <Route path="/">
              <Ecom />
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
