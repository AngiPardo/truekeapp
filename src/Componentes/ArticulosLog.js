import React, { Component } from "react";

class ArticulosLog extends Component {
    
    constructor(){
        super();
        this.state={
        }
    }
    botones(usuario,contacto, nombre){
        // Cuando está logueado, la edición y eliminación están disponibles
        if (usuario=="Ramiro") {
            return (<div>
                <button formTarget="#formulario1" className="btn btn-primary border mx-auto me-2 mt-1" onClick={this.editar}>Editar</button>
                <button className="btn btn-danger border mx-auto mt-1" onClick={this.eliminar}>Eliminar</button>
            </div>)
        } else {
            const linkWhatsapp = `https://wa.me/57${this.props.contacto}?text=Hola,%20¿todavía%20te%20interesa%20cambiar%20la%20tarjeta%20de%20${this.props.nombre}?`;
            return (<a formTarget="#formulario1" className="btn btn-success border mx-auto mt-1" href={linkWhatsapp}>Contactar por whatsapp</a>)
        }
    }

    editar(){
        alert("Solicitando editar tarjeta al backend...");
    }

    eliminar(){
        alert('Solicitando eliminar tarjeta al backend...')
    }
    
    
    render() {

        return (

            <div className="col-sm-4 text-center">
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
                        {this.botones(this.props.usuario,this.props.contacto)}
                    </div>
                </div>

            </div>);
    }
}

export default ArticulosLog;