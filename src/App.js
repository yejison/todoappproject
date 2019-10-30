import React, { Component } from 'react';

class App extends Component {
  state={
    tasks:[
      {todo:'할일 1'},
      {todo:'할일 2'},
      {todo:'할일 3'},
      {todo:'할일 4'},
    ],
    task:''
  }
  onClickHandler = (e) => {
    const task = {todo:this.state.task};
    this.setState({
      tasks:[task],
      task:''
    })
  }
  onChangeHandler = (e) => {
    this.setState({
      task:e.target.value
    })
  }
  render() {
  return (
    <div className="App">
      <div>
        <input value={this.state.task} onChange={this.onChangeHandler}></input>
        <button onClick={this.onClickHandler}>저장</button>
        </div>
    <div>
    <p>{this.state.tasks[0]['todo']}</p>
    <button>삭제</button>
    <p>{this.state.tasks[1]['todo']}</p>
    <button>삭제</button>
    <p>{this.state.tasks[2]['todo']}</p>
    <button>삭제</button>
    <p>{this.state.tasks[3]['todo']}</p>
    <button>삭제</button>
    </div>
   </div> 

  );
 }
}

export default App;
