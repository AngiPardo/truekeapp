import React, { Component } from "react";

class Inicio_sesion extends Component {
    constructor(){
        super();
        this.state={
            usuario:"",
            cont:""
        }
        this.cambio=this.cambio.bind(this);
    }
    
    cambio(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    render() {
        return (
            <div className="text-center">
                <main className="form-signin w-50 m-auto card bg-primary border-white mt-4 p-4">
                    <form>
                            <h1 className="m-auto text-white mb-3">Inicio de Sesión</h1>

                            <div className="form-floating text-dark">
                                <input type="text" className="form-control" id="floatingInput" placeholder="nombre de usuario" name="usuario" onChange={this.cambio}/>
                                    <label for="floatingInput">nombre de usuario</label>
                            </div>
                            <br/>
                            <div className="form-floating text-dark">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="cont" onChange={this.cambio}/>
                                    <label for="floatingPassword">Contraseña</label>
                            </div>

                            <div class="checkbox mb-3">
                                <label>
                                    <input type="checkbox" value="remember-me"/> Recuerdame
                                </label>
                            </div>
                            <button className="w-100 btn btn-lg btn-dark" type="submit">Iniciar sesión</button>
                            <p className="mt-5 mb-3">TruekeApp &copy; 2022</p>
                    </form>
                </main>

            </div>
        );
    }
}

export default Inicio_sesion;