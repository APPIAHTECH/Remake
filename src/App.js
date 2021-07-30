import TopBar from "./components/nav/top/TopBar";
import Single from "./components/single/Single";
import Home from "./pages/home/Home";
import CreatePost from "./components/create/post/CreatePost";
import Settings from "./components/settings/Settings";
import Login from "./components/login/Login";
import Register from "./components/register/register";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

  const isThereUser = false

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
              {isThereUser ? <Home /> : <Login />}
            </Route>
            <Route path="/register">
              {isThereUser ? <Home /> : <Register />}
            </Route>
            <Route path="/write">
              {isThereUser ? <CreatePost /> : <Login />}
            </Route>
            <Route path="/settings">
              {isThereUser ? <Settings /> : <Login />}
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
