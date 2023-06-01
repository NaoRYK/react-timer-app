import React from 'react'
import "./modes.css"



function Modes(propIsDark, propSetIsDark,styleRoot){

var sheet = document.styleSheets[0];
    



    if(propIsDark.propIsDark === true){

        document.documentElement.style.setProperty('--backgroundWhite',"#303030");
        document.documentElement.style.setProperty('--defaultBlack',"#FFFFFF");
       
        return(


            <div className='modes' onClick={()=>{

                propIsDark.propSetIsDark(false)
            }}>

                <p>Modo claro</p>
                <div alt="imagen_sol" id='sol'></div>
            </div>
        )
    }
    else if(propIsDark.propIsDark === false){
        document.documentElement.style.setProperty('--backgroundWhite',"#D9D9D9");
        document.documentElement.style.setProperty('--defaultBlack',"#000000");

        return(

            <div className='modes' onClick={()=>{
            
                propIsDark.propSetIsDark(true)
            }}>

                <p>Modo oscuro</p>
                    
                <div alt="imagen_luna" id='luna'></div>
            
            </div>
        )
    }

    
}

export {Modes};