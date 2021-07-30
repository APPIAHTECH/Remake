import TopBar from "./components/nav/top/TopBar";
import Single from "./components/single/Single";
import Home from "./pages/home/Home";
import CreatePost from "./components/create/post/CreatePost";

function App() {
  return (
    <div className="App">
      <TopBar />
      <CreatePost />

    </div>
  );
}

export default App;
