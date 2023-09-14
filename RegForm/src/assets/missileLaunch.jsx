import { useState } from "react";

const MissileLaunchingSequence = ()=>{
    const [openState,setOpenState] = useState(false);
    const statingOn=()=>{
        setOpenState(!openState);
    }

    const [enablePower,setEnablePower] = useState(false);
    const enabling = () =>{
        if(openState){
            setEnablePower(!enablePower);
        }
        
    }

    const [startCountDown,setStartCountDown] = useState(false);
    const startCounting=()=>{
        if(enablePower){
            setStartCountDown(!startCountDown);
        }
    } 

    const [launchMissile,setLaunchMissile] = useState(false);
    const launching = ()=>{
        if(startCountDown){
            setLaunchMissile(!launchMissile)
        }
    }


    return(
      <div>
        <div>
            <p>Open Tunnel</p>
            <button onClick={statingOn}>{openState?"on":"off"}</button>
        </div>
        <div>
            <p>EnablePower</p>
            <button onClick={enabling}>{enablePower?"on":"off"}</button>
        </div>
        <div>
            <p>Start Countdown</p>
            <button onClick={startCounting}>{startCountDown?"on":"off"}</button>
        </div>
        <div>
            <p>Launch Missile</p>
            <button onClick={launching}>{launchMissile?"Missile Launched":"off"}</button>
            {launchMissile && <p>Missile Succesfully Launched</p> }
        </div>
      </div>  
    )

}

export default MissileLaunchingSequence;

