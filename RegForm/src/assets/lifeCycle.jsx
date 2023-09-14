import { Component } from "react";

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    console.log("1. Contructor Loaded");
  }

  componentDidMount() {
    console.log("3.The component is ready to work");
  }

  onIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    console.log("2. I'm rendering now: ", this.state.counter);
    return (
      <div>
        <div>
          <p>Counter: {this.state.counter}</p>
          <button onClick={this.onIncrement}>Increment</button>
          <button onClick={this.onDecrement}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default Lifecycle;
