import { useEffect } from "react"
import "./Character.css"
import { useCharacter } from "../../hooks/useCharacter"
import { Footer } from "../Footer/footer";

export const AllCharacters = () => {

    const {getAllCharacters,allCharacters} = useCharacter();

            useEffect (()=>{
                getAllCharacters();
            },[]);



    return(

        //useEffect y useState Hooks
    <>    
        
        
        <div className="CAJAGIGANTE">

        
        <ul className="taper">
        
         {
            
                allCharacters.map((item,index) =>(
                    
                    <li key ={index}  >
                    <div className="taper2">
                        <img src ={item.image} alt = ""/>
                        <div className ="taper3">  
                        <h3>{item.name}</h3>
                        <p>{item.status}</p>
                        </div>
                    </div>   
                 </li> 
                 
             ))
         }
        </ul>  

        <Footer/>
         </div>
    </>     
    );

};