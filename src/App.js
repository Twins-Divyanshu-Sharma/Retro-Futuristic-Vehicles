import React, { useState, Suspense} from "react";
import { Canvas } from "@react-three/fiber";

import "./App.css";
import { OrbitControls } from "@react-three/drei";
import {CapsuleBus }  from "./CapsuleBus";
import { Podjet } from "./Podjet";

export default function App() {

const vehicles = [[0,"Podjet"], [1,"CapsuleBus"]];

const [model, setModel] = useState(0);

const nextModel = () => {
    setModel(model+1);
 
}

const prevModel = () => {
    setModel(model-1);
}

  return(

    <div id='TurbineCanvas'>

    <h1> {vehicles[model][1]} </h1>
   
    <Canvas shadows style={{ background: "#aab9f0" }}>
      <ambientLight intensity={1} />
      <directionalLight position={[1,1,1]} intensity={1} />
      <Suspense fallback={null}>
       <Podjet displayNo={model} position={[0,-5,-5]} scale={[0.5,0.5,0.5]}/>
       <CapsuleBus displayNo={model} position={[0,-5,-5]} scale={[2,2,2]}/>
      <OrbitControls target={[0,-5,-5]}/> 
     </Suspense>
    </Canvas> 
    <br/> <br/>    
    
    <button onClick={prevModel}> Previous </button>
    <button onClick={nextModel}> Next </button>

    </div>
    
    


    );

}
