export function Home({user, setUser} ) {
    
    const handleLogout = () => {
        setUser ([])
    }
    return (
        <div>
        <h1> Bienvenido! </h1>
        <h2> {user} </h2>
        <button className="close-btn" onClick={handleLogout}> Cerrar Sesión </button>
        </div>
    )
}