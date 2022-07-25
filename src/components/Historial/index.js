import React, { Component } from "react";

class Historial extends Component {
  render() {
    return (
      <div className="recordatorio">
        <h3>Selección anterior: {this.props.preferenciaAnterior}</h3>
        <h4>Historial de preferencias elegidas: </h4>
        <ul>{this.props.historial.map((element,indice) => (<li key={indice}>{element}</li>))}</ul>
      </div>
    );
  }
}

export default Historial;