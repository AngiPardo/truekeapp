import React, { Component } from "react";
//import img1 from "./img1.png";

class Articulos extends Component {
    
    constructor(){
        super();
        this.state={
            btn1:
            <div>
                <button formTarget="#formulario1" className="btn btn-primary border mx-auto me-2 mt-1" onClick={this.editar}>Editar</button>
                <button className="btn btn-danger border mx-auto mt-1" onClick={this.eliminar}>Eliminar</button>
            </div>,
            btn2:<button formTarget="#formulario1" className="btn btn-success border mx-auto mt-1" onClick={this.enviarMensajeaWhatsapp}>Contactar por whatsapp</button>
        }
    }
    botones(usuario,contacto){
        // Cuando no está logueado, la edición y eliminación no están disponibles
        if (usuario=="Ramiro") {
            return this.state.btn1;
        } else {
            return this.state.btn2;
        }
    }

    editar(){
        alert("Solicitando editar tarjeta al backend...");
    }

    enviarMensajeaWhatsapp (contacto) {
        // alert(contacto);
        var stringFinalaEnviar = `https://wa.me/573146840184?text=Hola,%20¿todavía%20te%20interesa%20cambiar%20la%20tarjeta?`;
        window.open(stringFinalaEnviar);
        alert(stringFinalaEnviar);
    }

    eliminar(){
        alert('Solicitando eliminar tarjeta al backend...')
    }

    

    
    
    render() {
        
        return (

            <div className="col-sm-4 text-center">
                {/* //row-cols-1 row-cols-md-3 g-4 */}
                <div className="card mt-4 bg-dark b border-red">
                    <img height="300" width="100" src={process.env.PUBLIC_URL+this.props.imagen} className="card-img-top" alt={this.props.numero} />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.nombre}</h5>
                        <p className="card-text">{this.props.descripcion}</p>
                        <span>Cambio por: {this.props.cartaACambio}</span>
                        <br/>
                        <span>Usuario: {this.props.usuario}</span>
                        <br/>
                        <span>Contáctame al: {this.props.contacto}</span>
                        <br/>
                        <span>Cantidad: {this.props.cantidad}</span>
                        <br/>
                        {this.botones(this.props.usuario)}
                    </div>
                </div>

                <div className="modal fade" id="formulario1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>);
    }
}

export default Articulos;