import React from 'react'

const FooterComponent = () => {
    return (
        <>

            <div className="footer">
                <div className="contain">
                    <div className="col">
                        <h1>Compañia</h1>
                        <ul>
                            <li>Sobre Nosotros</li>
                            <li>Nuestra Mision</li>
                            <li>Servicios</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h1>Productos</h1>
                        <ul>
                            <li>Descubre nuestros talles</li>
                            <li>Nuestra Mision</li>
                            <li>Nuestra Fabrica</li>
                            <li>Donde Encontrarnos</li>
                            
                        </ul>
                    </div>
                    <div className="col">
                        <h1>Suporte</h1>
                        <ul>
                            <li>Contactanos</li>
                            <li>Nuestro Email</li>
                            <li>Nuestro WhatsApp</li>
                        </ul>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>


        </>
    )
}

export default FooterComponent