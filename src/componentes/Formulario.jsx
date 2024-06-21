import "./Formulario.css"
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
            <h1>Login</h1>

            <form className="Formulario">
                <input 
                    type="text"
                    value={usuario}
                    onChange={evento=> setUsuario(evento.target.value)}     ///captura lo que pongamos como nombre de usuario en el input
                /> 
                <input 
                    type="password"
                    value={contraseña}
                    onChange={evento => setContraseña(evento.target.value)}     ///captura la contraseña que se ingrese en el input
                    />
                <button>Iniciar sesión</button>
            </form>
            {error && <p>Todos los campos son obligatorios.</p>}
        </section>
    )
}