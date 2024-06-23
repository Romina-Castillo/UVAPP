import "./LoginFormulario.css"
import { useState } from "react"

export function Formulario({setUser}) {
    const [usuario, setUsuario] = useState ("")
    const [contraseña, setContraseña] = useState ("")
    const [error, setError] = useState (false)

    const handleSubmit = (evento) => {
        evento.preventDefault()

        if (usuario === "" || contraseña === "") {
            setError(true)                              //el estado del error esta en falso cuando usuario o contraseña esten vacios pasara a estado true, cuando se presione el boton de iniar sesion saltara el error
            return
        }
    
    setError(false)

    setUser([usuario])


    }

    return (
        <section>
            <h1>Iniciar Sesión</h1>

            <form 
                className="Formulario"
                onSubmit={handleSubmit}
            >
                <input 
                    type="text"
                    placeholder= "Ingrese su correo"
                    value={usuario}
                    onChange={evento=> setUsuario(evento.target.value)}     ///captura lo que pongamos como nombre de usuario en el input
                /> 
                <input 
                    type="password"
                    placeholder= "Ingrese su contraseña"
                    value={contraseña}
                    onChange={evento => setContraseña(evento.target.value)}     ///captura la contraseña que se ingrese en el input
                    />
                <button className="login-btn">Iniciar sesión</button>

                <p className="text"> O iniciar sesión con: </p>

                <div className="alt-login"> 
                    <div className="facebook"></div>
                    <div className="google"></div>
                </div>

            </form>
        {error && <p>Todos los campos son obligatorios.</p>}
        </section>
    )
}