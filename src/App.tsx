import "./App.css";

import AddAndHandle from "./components/add-and-handle";
import RandomAndScroll from "./components/random-and-scroll";
import UnknownAndNever from "./components/unknown-and-never";
import OOP from "./components/oop";

function App() {
  return (
    <div
      className="App"
      style={{ height: "120vh", paddingTop: "30vh", boxSizing: "border-box" }}
    >
      <RandomAndScroll />
      <AddAndHandle />
      <UnknownAndNever />
      <OOP />
    </div>
  );
}

export default App;
