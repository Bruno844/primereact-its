import React from 'react'
import { TabView, TabPanel } from 'primereact/tabview';
import ShowInicio from '../pages/ShowInicio';
import ShowAboutUs from '../pages/ShowAboutUs';
import ShowRegister from '../pages/ShowRegister'
//import 'Styles.css'

const HeaderComponent = () => {
    return (
        <div className="card">
            <TabView>
                <TabPanel header="Inicio">
                    <p className="m-0">
                        <ShowInicio />
                    </p>
                </TabPanel>
                <TabPanel header="About Us">
                    <p className="m-5">
                        <ShowAboutUs />
                    </p>
                </TabPanel>
                <TabPanel header="Log In">
                    <p className="m-0">
                       <ShowRegister />
                    </p>
                </TabPanel>
            </TabView>
        </div>
    )
}

export default HeaderComponent