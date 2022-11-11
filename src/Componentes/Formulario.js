import React,{Component} from "react";

class Formulario extends Component{
    constructor(){
        super();
        this.state={
            nombre:"",
            descripcion:"",
            usuario:"",
            cantidad:0,
            valor:"",
            imagen:"",
            contacto:"",
            cartaACambio:""
        }
        this.cambio=this.cambio.bind(this);
        this.guardar=this.guardar.bind(this);
    }

    cambio(e){
        //console.log(e.target.value,e.target.name)
        this.setState({
            [e.target.name]:e.target.value
        })
        console.log(this.state);
    }

    guardar(){
        alert("Publicando tarjeta...");
    }

    render(){
        return(
            <div className="card w-50 m-auto bg-primary mt-4 mb-4 border-black">
                <h1 className="m-auto text-white">Datos de tu tarjeta Pokemon</h1>
                <form className="card-body">
                    <div className="form-group">
                        <input type="text" placeholder="Nombre del Pokemon" name="nombre" onChange={this.cambio} className="form-control"/>   
                    </div>
                    
                    <div className="form-group">
                        <input type="number" placeholder="Cantidad que tienes de esta misma tarjeta" name="cantidad" className="form-control mt-3" onChange={this.cambio}/>   
                    </div>
                    
                    <div className="form-group">
                        <input type="text" placeholder="Imagen Articulo" name="imagen" className="form-control mt-3" onChange={this.cambio}/>   
                    </div>
                    <h5 className="text-white mt-2 ms-2">Estado de la tarjeta: </h5>
                    <div className="form-group">
                        <select name="valor" className="form-control mt-3" onChange={this.cambio}>
                            <option>Lámina en buen estado</option>
                            <option>Lámina rasgada</option>
                            <option>Lámina desgastada</option>
                        </select>
                    </div>
                    <div className="d-grid gap-2 col-3 mx-auto mt-3">
                        <button className="btn btn-dark" type="button" onClick={this.guardar}>Publicar</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Formulario;