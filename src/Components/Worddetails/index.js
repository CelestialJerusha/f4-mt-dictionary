import React,{useState,useEffect} from "react";
import axios from 'axios'

const Worddetails = (props) => {
    const [data,setData] = useState('');
    console.log(props.searchVal)
    // const searchItem = props.searchVal
    useEffect(()=>{
        fetchInfo()
    },[])
     
    
    async function fetchInfo(){
      
        try{
          const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${props.searchVal}`)
          console.log(response.data)
          setData(response.data.word)
        }
        catch(err){
          console.log(err);
        }
      }
      console.log(data)
    
      return(
        <div>
            <h1>details</h1>
            <div>
                {/* <div>{data[0].word}</div>
                <div>{data[0].meanings[0].definitions[0].definition}</div> */}
            </div>
        </div>
      )
}
        
    




export default Worddetails