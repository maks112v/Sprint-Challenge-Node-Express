import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  componentDidMount() {
    axios
      .get("http://localhost:4000/api/project/")
      .then(res => {
        console.log(res);
      })
      .error(err => {
        console.log(err);
      });
  }
  render() {
    return <div />;
  }
}

export default App;
