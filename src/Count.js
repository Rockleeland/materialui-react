import React, { Component } from "react";
import WaterView from "./WaterView";
import Button from "@material-ui/core/Button";

export default class Count extends Component {
  state = {
    count: 0,
    view: false
  };

  increment = () => {
    this.setState({
      count: this.state.count + 32
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 32
    });
  };

  toggle = () => {
    this.setState({
      view: !this.state.view
    });
  };

  containerView = () => {
    let style = {
      backgroundColor: "blue"
    };
    if (this.state.count <= 32 && this.state.view) {
      style = {
        backgroundColor: "#aad4e5"
      };
      return (
        //passing props to functional component
        <WaterView
          toggle={this.toggle}
          hideShow="Hide"
          style={style}
          waterForm="Ice"
        />
      );
    }
    if (this.state.view) {
      //passing props to functional component
      return (
        <WaterView
          toggle={this.toggle}
          hideShow="Hide"
          style={style}
          waterForm="Water"
        />
      );
    }
    return <button onClick={this.toggle}>Show div!</button>;
  };

  render() {
    return (
      <div>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={this.increment}
        >
          +32
        </Button>
        <Button 
          variant="contained" 
          color="secondary" 
          onClick={this.decrement}
        >
          -32
        </Button>
        <p>{this.state.count}</p>
        <div>{this.containerView()}</div>
      </div>
    );
  }
}
