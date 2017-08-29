import React, { Component } from 'react';

export default class ChildComponent extends Component {
  render() {
    return (
      <div>
        <div>
          <input className="button" type="submit" onClick={this.props.onClick}/>
        </div>
      </div>
    );
  }
}
