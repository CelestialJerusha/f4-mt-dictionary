import {React,useState} from "react";
import './index.css'
import Worddetails from "../Worddetails";
import Search from "../Search";


const Home = () =>{
    const [searchVal, setSearchVal] = useState('');
    // console.log(searchVal)
    function fetchInfo(){
        searchVal = {searchVal}
    }
    return(
        <div>
            <br/>
            <div className="search-container">
                <input type="text" onChange={e => setSearchVal(e.target.value)}/>
                <button onClick={fetchInfo}>Search</button>
            </div>
            <br/>
            <div>
                <Worddetails searchVal={searchVal}/>
            </div>
            
        </div>
    )
}

export default Home;