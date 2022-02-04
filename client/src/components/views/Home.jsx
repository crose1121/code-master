import React from "react";
import {Link} from 'react-router-dom';
import background from "../../imgs/forge.jpeg"


const Home =()=>{

    return (
        <div className="forge" style={{ backgroundImage: `url(${background})` }}>
            <div>
                
                <button className="button"><Link to={'/equip_select'} className="mainLink"><h1>Select Thy Equipment</h1></Link></button>
            </div>
        </div>
    )
}

export default Home;