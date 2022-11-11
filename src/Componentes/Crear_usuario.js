import React,{Component} from "react";

class Crear_usuario extends Component{
    constructor(){
        super();
        this.state={
            nombre:"",
            apellido:"",
            correo:"",
            edad:0,
            ciudad:"",
            clave1:"",
            clave2:""
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
        alert("Creando usuario...");
    }

    render(){
        return(
            <div className="card w-50 m-auto bg-primary mt-4 mb-4 border-white">
                <h1 className="m-auto text-white">Mis datos</h1>
                <form className="card-body">
                    <div className="form-group">
                        <input type="text" placeholder="Nombre de usuario" name="nombre" onChange={this.cambio} className="form-control"/>   
                    </div>
                    
                    <div className="form-group">
                        <input type="email" placeholder="Correo" name="correo" className="form-control mt-3" onChange={this.cambio}/>   
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Contraseña" name="clave1" className="form-control mt-3" onChange={this.cambio}/>   
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Repetir Contraseña" name="clave2" className="form-control mt-3" onChange={this.cambio}/>   
                    </div>
                    <div className="d-grid gap-2 col-3 mx-auto mt-3">
                        <button className="btn btn-dark" type="button" onClick={this.guardar}>Crear mi cuenta</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Crear_usuario;