import React, { Component } from "react";

class Preference extends Component {
  render() {
    return (
        <div className="opcion">
            <button className="botones" onClick={this.props.handleClick}>{this.props.letra.toUpperCase()}</button> 
            <h2>{this.props.texto}</h2>
        </div>
    );
  }
}

export default Preference;