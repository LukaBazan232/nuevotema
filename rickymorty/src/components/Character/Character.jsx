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
        
        <ul className="taper">
    
         {
                allCharacters.map((item,index) =>(
                 <li key ={index} >
                     <h3>{item.name}</h3>
                     <p>{item.status}</p>
                      <img src ={item.image} alt = ""/>
                 </li> 
                    
             ))
         }
    
    
         </ul>

    </>     
    )

}