import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import CardList from "./Components/card-list/CardList.component";
import SearchBox from "./Components/search-box/SearchBox.component";

function App() {
  console.log('render----------begin');
  //初始化state
  let [filterText, setFilterText] = useState("");
  let [robots, setRobots] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setRobots(res.data);
    });
  }, []);

  function onSearch(e)  {
    setFilterText(e.target.value);
    //console.log('filterText',filterText);//这里打印的是前值， React 会在下次渲染时用新的状态值替换它
  };

  return (
    <div className="App">
      <h1 className="app-title">Robots Rolodex</h1>
      <SearchBox
        className={"robot-search-box"}
        placeholder={"search robots" /*传递字符串*/}
        onChange={onSearch /*传递函数*/}
      />
      <CardList
        robots={
          robots.filter((robot) =>
            robot.name.toLowerCase().includes(filterText.toLowerCase())
          ) /*传递数组*/
        }
      />
    </div>
  );
}

export default App;
