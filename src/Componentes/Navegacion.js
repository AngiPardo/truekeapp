import React, { Component } from "react";
import Cargar from "./Cargar";
//import App from "../App";
import Crear_usuario from "./Crear_usuario";
import Formulario from "./Formulario";
import Inicio_sesion from "./Inicio_sesion";
class Navegacion extends Component {
    render() {
        return (
            <div>
                <div className="nav bg-dark d-flex justify-content-center">
                    <ul className="nav nav-tabs nav-pills mt-1 mb-1" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active text-white" id="home-tab" data-bs-toggle="tab" data-bs-target="#enlace1" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">{this.props.enlace1}</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link text-white" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">{this.props.enlace3}</button>
                        </li>
                        <li className="nav-item text-white" role="presentation">
                            <button className="nav-link text-white" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">{this.props.enlace4}</button>
                        </li>

                    </ul>

                    <form class="d-flex ms-5" role="search">
                        <input id="criterioDeBusqueda" class="form-control me-2" type="search" placeholder="buscar tarjeta" aria-label="Search" onChange={this.filtrarTarjetas}/>
                    </form>
                </div>

                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active text-white" id="enlace1" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                        <Cargar/>
                    </div>
                    <div className="tab-pane fade text-white" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                        <Formulario/>
                    </div>
                    <div className="tab-pane fade text-white" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                        <Inicio_sesion/>
                    </div>
                    <div className="tab-pane fade text-white" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
                        <Crear_usuario/>
                    </div>
                </div>
            </div>
        );
    }

    filtrarTarjetas(e){
        // let mostrar=this.state.Datos.map((dato)=>{
        //     nombre = {dato.nombre};
        //     if((e.target.value,e.target.name)==nombre)
        // })
        alert(e.target.value,e.target.name);
        this.setState({
            [e.target.name]:e.target.value
        })
        // alert("Filtrando...")
    }
}

export default Navegacion;