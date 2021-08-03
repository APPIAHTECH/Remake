import TopBar from "./components/nav/top/TopBar";
import Single from "./components/single/Single";
import Home from "./pages/home/Home";
import CreatePost from "./components/create/post/CreatePost";
import Settings from "./components/settings/Settings";
import Login from "./components/login/Login";
import Register from "./components/register/register";
import { Context } from "./context/Context"
import { useContext } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

  const { user } = useContext(Context)

  return (
    <div className="App">
      <Router>
        <TopBar />

        <div>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/login">
              {user ? <Home /> : <Login />}
            </Route>
            <Route path="/register">
              {user ? <Home /> : <Register />}
            </Route>
            <Route path="/write">
              {user ? <CreatePost /> : <Login />}
            </Route>
            <Route path="/settings">
              {user ? <Settings /> : <Login />}
            </Route>

            <Route path="/post/:postID">
              <Single />
            </Route>

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
