import { useEffect } from "react"
import "./Character.css"
import { useCharacter } from "../../hooks/useCharacter"
import { Footer } from "../Footer/footer";

export const AllCharacters = () => {

    const {getAllCharacters,allCharacters} = useCharacter();

            useEffect (()=>{
                getAllCharacters();
            },[]);

                function getEpisodes(episodes){
                    console.log(episodes)
                    episodes.map((episodio) => {
                        const num = episodio.slice(40)
                        console.log(num)
                    })
                }
                
    return(



        //useEffect y useState Hooks
    <>           
        <div className="CAJAGIGANTE">

        
        <ul className="taper">
        
         {
            
                allCharacters.map((personaje,index) =>(
                    
                    <li key ={index}  >
                    <div className="taper2">
                        <img src ={personaje.image} alt = ""/>
                        <div className ="taper3">  
                        <h3>{personaje.name}</h3>                        
                        <p>{personaje.status} - {personaje.species} </p>
                        <p>Last known location: </p>
                        <p> {personaje.origin.name} </p>
                        <p className ="pulsador" onClick= {()=>getEpisodes(personaje.episode)} > episodes </p>
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