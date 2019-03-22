import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    loading: true,
    data: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:4000/api/project/")
      .then(res => {
        console.log(res);
        this.setState({
          loading: false,
          data: res.data,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    if (this.state.loading) {
      return (
        <div>
          <h2>Loading</h2>
        </div>
      );
    }
    return (
      <div>
        {this.state.data.map(task => (
          <div key={task.id}>
            <h2>{task.name}</h2>
            <h3>{task.description}</h3>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
