import ElephantClassBasedComponent from './animalsClassBasedComponents/ElephantClassBasedComponent';
import DogClassBasedComponent from './animalsClassBasedComponents/DogClassBasedComponent';
import LionClassBasedComponent from './animalsClassBasedComponents/LionClassBasedComponent';
import TigerClassBasedComponent from './animalsClassBasedComponents/TigerClassBasedComponent';
import CatBasedComponent from './animalsClassBasedComponents/CatClassBasedComponent';
import DeerClassBasedComponent from './animalsClassBasedComponents/DeerClassBasedComponent';
import KingFisherFunctionalComponent from "./birdsFunctionalComponents/KingFisherFunctionalComponent";
import ParrotFunctionalComponent from "./birdsFunctionalComponents/ParrotFunctionalComponent";
import PeacockFunctionalComponent from "./birdsFunctionalComponents/PeacockFunctionalComponent";
import SparrowFunctionalComponent from "./birdsFunctionalComponents/SparrowFunctionalComponent";
import PigeonFunctionalComponent from "./birdsFunctionalComponents/PigeonFunctionalComponent";
import OwlFunctinalComponent from "./birdsFunctionalComponents/OwlFunctionalComponent";
import React from 'react';

class Kingdom extends React.Component{
    render(){
        return(
            <>
              <h1>Kingdom</h1>
                <ElephantClassBasedComponent/>
                <DogClassBasedComponent/>
                <LionClassBasedComponent/>
                <DeerClassBasedComponent/>
                <TigerClassBasedComponent/>
                <CatBasedComponent/>
                <PeacockFunctionalComponent/>
                <SparrowFunctionalComponent/>
                <PigeonFunctionalComponent/>    
                <OwlFunctinalComponent/>
                <KingFisherFunctionalComponent/>
                <ParrotFunctionalComponent/>  
            </>
        )
    }
}
export default Kingdom;