import { useEffect } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

function App() {
  useEffect(() => {
    console.log("loo");
    axios.get("/posts/list").then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p
        // onClick={() => setYussur()}
        >
          Hello this is Yussur Alani
        </p>
      </header>
    </div>
  );
}

export default App;
