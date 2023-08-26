import React from "react";
import { connect } from "react-redux";

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: "INCREMENT" });
  };

  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
  };

  render() {
    return (
      <div>
        <h1 className="text-8xl">Counter</h1>

        <div>
          <button
            class="btn btn-primary my-button-class"
            onClick={this.decrement}
          >
            -
          </button>
          <span className="text-accent">{this.props.count}</span>
          <button
            class="btn btn-secondary my-button-class"
            onClick={this.increment}
          >
            +
          </button>
        </div>
        <div>
          <p>A counter app built with Redux and React.</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

export default connect(mapStateToProps)(Counter);
