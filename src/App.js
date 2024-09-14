import "./App.css";
import { Component } from "react";
import axios from "axios";
import CardList from "./Components/card-list/CardList.component";
import SearchBox from "./Components/search-box/SearchBox.component";

class App extends Component {
  //构造函数——初始化state
  constructor() {
    super();
    //this.onSearch = this.onSearch.bind(this);
    this.state = {
      filterText: '',
      robots: [],
    };
  }
  //生命周期函数
  componentDidMount() {
    //挂载函数
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then((res)=> {return res.json()})
    // .then((user)=>{
    //   this.setState(()=>{
    //   return {robots: user};
    // },
    // ()=>{
    //   console.log(this.state);
    // }
    // )})
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      this.setState(
        { robots: res.data }
      );
    });
  }

  onSearch = (e) => {//在类内作为事件处理程序/callback传递的方法必须用箭头函数写法定义，以确保 this 始终指向组件实例。不能用常规写法（除非在构造函数内手动绑定 this.onSearch = this.onSearch.bind(this);），
    console.log(e.target.value);
    this.setState(() => {return {filterText: e.target.value}},()=>{console.log('state',this.state)});
  }

  //渲染函数
  render() {
    //解构赋值
    const {robots, filterText} = this.state;
    const {onSearch: onChange} = this;// 对象解构时如不提供属性名，则变量名需与对象的属性名一样，即：const {onSearch} = this;

    return (
      <div className="App">
        <h1 className="app-title">Robots Rolodex</h1>
        <SearchBox className={"robot-search-box"} placeholder={"search robots"/*传递字符串*/} onChange={onChange/*传递函数*/}  />
        <CardList robots={robots.filter((monster) => monster.name.toLowerCase().includes(filterText.toLowerCase()))/*传递数组*/} />
      </div>
    );
  }
}

export default App;
