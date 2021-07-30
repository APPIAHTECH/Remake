import TopBar from "./components/nav/top/TopBar";
import Single from "./components/single/Single";
import Home from "./pages/home/Home";
import CreatePost from "./components/create/post/CreatePost";
import Settings from "./components/settings/Settings";
import Login from "./components/login/Login";
import Register from "./components/register/register";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Register />

    </div>
  );
}

export default App;
