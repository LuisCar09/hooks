import { useEffect, useState } from "react";

const useFetch = (urlPokemon) => {
    const [data,setData] = useState('')
   
    
    const fetchData = async () => {
        try {
            const getData = await fetch(urlPokemon)
            const response = await getData.json()
            
            setData(response)
            
            
        } catch (error) {  
            console.error(error.message);
            setData(error.message)
            
        }
    }

    useEffect(()=> {
        fetchData()
    },[])

    return{
        
        data
    }
    
}

export default useFetch