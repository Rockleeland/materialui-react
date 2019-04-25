import React, { Component } from "react";
import WaterView from "./WaterView";
import Button from "@material-ui/core/Button";
import Ice from './images/ice.jpg';
import Water from './images/water.jpg'
import Steam from './images/steam.jpg'

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
    if (this.state.count <= 32 && this.state.view) {
      return (
        //passing props to functional component
        <WaterView
          toggle={this.toggle}
          hideShow="Hide"
          waterForm="Ice"
          description="This is Ice"
          photo={Ice}
          firstLetter='I'
        >
        Ice Ice baby
        </WaterView>
      );
    } else if (this.state.count > 212 && this.state.view) {
      return (
        //passing props to functional component
        <WaterView
          toggle={this.toggle}
          hideShow="Hide"
          waterForm="Steam"
          description="This is steam"
          photo={Steam}
          firstLetter='S'
        >
        Hissssssss
        </WaterView>
      );
    }
    if (this.state.view) {
      //passing props to functional component
      return (
        <WaterView
          toggle={this.toggle}
          hideShow="Hide"
          waterForm="Water"
          description="This is water"
          photo={Water}
          firstLetter='W'
        >
          Elixir of life
        </WaterView>
      );
    }
    return <Button variant="contained" onClick={this.toggle}>Show div!</Button>;
  };

  render() {
    return (
      <div>
        <Button 
          variant="contained" 
          color="secondary" 
          onClick={this.increment}
        >
          +32
        </Button>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={this.decrement}
        >
          -32
        </Button>
        <p><b>Temperature:</b> {this.state.count}</p>
        <p><b>Steam temperature:</b> 212 °F</p>
        <p><b>Ice temperature:</b> 32 °F</p>
        <div>{this.containerView()}</div>
      </div>
    );
  }
}
