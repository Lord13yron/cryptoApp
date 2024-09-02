import React from "react";
import "./Header.css"

function Header(){
    // return (
    //     <header>
    //         <h1>Byron's Crypto</h1>
    //     </header>
    // )

    return (
        <header>
            <nav class="navbar navbar-expand-md fixed-top">
                <div class="nav-container container-fluid justify-content-center">
                    <a class="navbar-brand" href="#">Byron's Crypto</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse flex-grow-0" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link" href="#Favorites">Favorites</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;