import { useEffect } from "react"
import "./Character.css"
import { useCharacter } from "../../hooks/useCharacter"

export const AllCharacters = () => {

    const {getAllCharacters,allCharacters} = useCharacter();

            useEffect (()=>{
                getAllCharacters();
            },[]);



    return(

        //useEffect y useState Hooks
    <>    
        
        
        <div className="CAJAGIGANTE">

        <div className="botones">

            <button className="botones2" > Docs </button>
            <button className="botones2"> About </button>
            <button > SUPPORT US </button>

        </div>
        <div className="titulo"> <h1> Rick and Morty API </h1> </div>

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

         <div className="final">

                



         </div>
         </div>
    </>     
    )

}