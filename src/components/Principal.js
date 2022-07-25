import {Component} from "react";
import data from "./data.json";
import Preference from "./Preference";
import Historial from "./Historial";

class Principal extends Component {

  
  constructor(props) {
    super(props);

    this.state = {
      contabilizador: 0,
      historial : [],
      preferenciaAnterior: "",
      data:[],
      pregunta:"",
      opcionA:"",
      opcionB:"",
      id:"",
      final:false
    };
  }

  componentDidMount(){
    let datos =(data); 
    this.setState({
      pregunta: datos[this.state.contabilizador].historia,
      opcionA :datos[this.state.contabilizador].opciones.a,
      opcionB :datos[this.state.contabilizador].opciones.b,
      id: datos[this.state.contabilizador].id,
      data:data
      }
    )
  }

  handleClick = (e) => {
    const id = e.target; 
    let contadorAuxiliar = this.state.contabilizador +2
    let idAuxiliar = contadorAuxiliar.toString().concat(e.target.outerText.toLowerCase())
    console.log(e.target + "este es el id")
    if(contadorAuxiliar ==6){
      alert ("FIN") 
      return 
    }
    
    let opcionElegida = e.target.outerText
    let objetoElegido = this.state.data.find(element=>{return element.id==idAuxiliar})
    console.log(idAuxiliar)
    console.log(objetoElegido)
    this.setState(() => ({

      preferenciaAnterior:opcionElegida,
      contabilizador:this.state.contabilizador+1,
      pregunta:objetoElegido.historia,
      opcionA: objetoElegido.opciones.a,
      opcionB: objetoElegido.opciones.b,
      historial:[...this.state.historial,opcionElegida]
    }));
  }
  

  render() {
    return (
      <div className="layout">
        <h1 className="historia">{this.state.pregunta}</h1>
        <Preference
          handleClick={this.handleClick}
          texto={this.state.opcionA}
          letra="A"
        />
        <Preference
          handleClick={this.handleClick}
          texto={this.state.opcionB}
          letra="B"
        />
        <Historial
          preferenciaAnterior={this.state.preferenciaAnterior}
          historial={this.state.historial}
        />
      </div>
    );
  }
}


export default Principal;