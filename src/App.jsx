
import HeaderComponent from './components/HeaderComponent';

//theme
import "primereact/resources/themes/md-dark-deeppurple/theme.css";
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';


import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import {useState } from 'react';
import FooterComponent from './components/FooterComponent';


function App() {

  const [visible, setVisible] = useState(false);


  return (

    <>
      <div className="card flex justify-content-center">
        <Sidebar visible={visible} onHide={() => setVisible(false)}>
          <h2>Nuestras categorias</h2>
          <ul className='mx-4'>
            <li>Ropa de hombre</li>
            <li>Ropa de mujer</li>
            <li>jewelery</li>
          </ul>
        </Sidebar>
        <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} />
      </div>
      <HeaderComponent />
      <FooterComponent />
    </>
  )
}

export default App
