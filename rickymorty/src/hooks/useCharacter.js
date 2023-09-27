import { useState } from "react";

export function useCharacter(){
        const[allCharacters,setAllCharacters] = useState([]);
    //fetch es una peticion a un servidor por datos 
    //then 
    const getAllCharacters = () => {
        return fetch ('https://rickandmortyapi.com/api/character')
        .then((res) => res.json())
        .then( (data) => setAllCharacters(data.results) );
    };


    return {
        getAllCharacters,allCharacters,
    };

}