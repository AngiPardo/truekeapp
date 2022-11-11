import React, { Component } from "react";
import Datos from './Datos.json'
import Articulos from './Articulos';
class Cargar extends Component {
    constructor() {
        super();
        this.state = {Datos}
        console.log(this.state.Datos.length);
    }

    render() {
        let mostrar=this.state.Datos.map((dato)=>{
            return(
                <Articulos nombre={dato.nombre} descripcion={dato.descripcion} cantidad={dato.cantidad} imagen={dato.imagen} cartaACambio={dato.cartaACambio} usuario={dato.usuario} contacto={dato.contacto} />
                
                
            );
        })
        return (
            <div className="row">
                {mostrar}
                <span className="badge badge-pill badge-light ml-2">
                    {this.state.Datos.length}
                </span>
            </div>
        );
    }
}

export default Cargar;