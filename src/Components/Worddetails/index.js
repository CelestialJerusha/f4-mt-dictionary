import axios from 'axios'
import React,{useState,useEffect } from "react";

const Worddetails = () => {
    const [data,setData] = useState('');
    const searchItem = "horrible"

    useEffect(()=>{
        fetchInfo()
    },[])
     
    
      async function fetchInfo(){
      
        try{
          const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchItem}`)
          console.log(response.data)
          setData(response.data)
        //   console.log(response.data[0].meanings[0].definitions[0].definition)
        }
        catch(err){
          console.log(err);
        }
      }
    
      return(
        <div>
            <h1>details</h1>
            <div>
                <div>{data[0].word}</div>
                <div>{data[0].meanings[0].definitions[0].definition}</div>
            </div>
        </div>
      )
}
        
    




export default Worddetails