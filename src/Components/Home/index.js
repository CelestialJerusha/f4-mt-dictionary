import React from "react";
import {useState} from "react";
import './index.css'
import Worddetails from "../Worddetails";


const Home = () =>{
    const [searchVal, setSearchVal] = useState(""); 
    
    function handleSearchClick() {

        
        console.log(searchVal)
    }
    return(
        <div>
            <br/>
            <div className="search-container">
                <input type="text" onChange={e => setSearchVal(e.target.value)} />
                <button onClick={handleSearchClick}>Search</button>
            </div>
            <br/>
            <div>
                <Worddetails />
            </div>
            
        </div>
    )
}

export default Home;