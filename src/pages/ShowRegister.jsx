import React from 'react'

const ShowRegister = () => {
  return (
    < div className="container seccion-grl" >
      <div className="wrapper">
        <div className="title"><span>Iniciar Sesion</span></div>
        <form action="#">
          <div className="row">
            <input type="text" placeholder="Email o telefono" required />
          </div>
          <div className="row">
            <input type="password" placeholder="Contraseña" required />
          </div>
          <div className="pass"><a href="#">Olvido su contraseña?</a></div>
          <div className="row button">
            <input type="submit" value="Iniciar sesion" />
          </div>
          <div className="signup-link">No tiene cuenta? <a href="#">Registrarse</a></div>
        </form>
      </div>
    </div >
  )
}

export default ShowRegister