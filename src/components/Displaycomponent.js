import React, { Component } from 'react';

export default class DisplayComponent extends Component {
  render() {
    return (
      <div className="boxedResponse">
        <h3>State, props, children, function, fun!</h3>
        <h4> Your message:</h4>
        <div>
        {this.props.sayWhat}
        </div>
      </div>
    );
  }
}
