import React from 'react'




function Modes(propIsDark, propSetIsDark,styleRoot){

var sheet = document.styleSheets[0];
    
    console.log(propIsDark)
    console.log(propSetIsDark)


    console.log( styleRoot)
    console.log( document.documentElement.style.removeProperty("--backgroundWhite"))
    if(propIsDark.propIsDark === true){

       
        return(
            <div className='modes' onClick={()=>{
                console.log("A")
                propIsDark.propSetIsDark(false)
            }}>

                <p>Modo claro</p>
                <div alt="imagen_sol" id='sol'></div>
            </div>
        )
    }
    else if(propIsDark.propIsDark === false){
        return(
            <div className='modes' onClick={()=>{
                console.log("A")
                propIsDark.propSetIsDark(true)
            }}>

                <p>Modo oscuro</p>
                <img src="./Vector.png" id='moon' alt="moon_images" />
            </div>
        )
    }

    
}

export {Modes};