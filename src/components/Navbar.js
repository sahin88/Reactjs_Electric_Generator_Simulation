import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';

import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from 'react-icons/gr'


function Navbar() {
    const [clicked, setClicked] = useState(true)

    const handleClick = () => {
        setClicked(!clicked)
    }




    return (
        <nav class="navigatin-bar">
            <div class="navigation-bar-logo">
                Generator Simulation
            </div>
            <div className={clicked ? "navigation-bar-routes backing" : "navigation-bar-routes forward"}>
                <Link style={{ color: 'white', textDecoration: 'None' }} to="/">Simulation</Link>
            


            </div>
            <div className="navigation-bar-hamburgerbtn">
                {clicked ? (<GiHamburgerMenu onClick={(e) => { handleClick() }} style={{ width: "100%", height: "100%" }} />) : (<GrClose onClick={(e) => { handleClick() }} style={{ width: "100%", height: "100%", color: "white" }} />)}
            </div>
        </nav>
    )
}

export default Navbar
