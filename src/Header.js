import React from "react";
import logo from "./logo.png";
import styles from "./Header.module.css";
function Header(){
    return(
        <div className="content">
            <header>
                <div className={styles.logo}>
                    <img src={logo}></img>
                </div>
                
            </header>
        </div>
    )
}

export default Header;