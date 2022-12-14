import React from 'react';
import { BiSearch} from "react-icons/bi";
import { BsStarFill} from "react-icons/bs";
import './Style/Home.css';
// import {AllFillStart} from "react-icons/bi";


function About() {
    return (
    
    <>
    {/* *********************Navbar area************************************** */}
        <nav class="navbar navbar-expand-lg bg-light px-5">
            <div class="container-fluid">
            <a class="navbar-brand fw-bold" href="/#">HOME</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav gap-3">
                    <li class="nav-item">
                    <a class="nav-link active fw-bold" href="/#">PLACES</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active fw-bold" href="/#">TOP-PICTURE</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active fw-bold" href="/#">CONTAC US</a>
                    </li>
                    <div class="nav-item">
                    <form class="d-flex float-start fw-bold" role="search">
                        <input class="col-12 rounded-start fw-bold border border-2 text-md" type="search" placeholder="Search" aria-label="Search"/>
                        <button class=" border-start fw-bold-0 border border-2 rounded-end" type="submit"><BiSearch size="2rem" class="text-secondary"/></button>
                    </form>  
                    </div>
                </ul>
                
                <div class="d-flex flex-row-reverse gap-1 collapse navbar-collapse mt-2">
                    <button type="button" class="btn btn-secondary btn-sm">Log in</button>
                    <button type="button" class="btn btn-primary btn-sm ">Sign in</button> 
                </div>
                </div>
            </div> 
        </nav>
    {/* *********************Main area************************************** */}
        <main class="body">
           <div class="main" >
           <div class="container d-flex justify-content-center gap-3">

                <div class="card" >
                <img src="https://picsum.photos/200/250" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <div class="d-flex flex-column">
                        <div><h4 class="font-weight-bold float-start fw-bold">Angkor Wat</h4></div>
                        <div><p>Posted by Nara</p></div>
                        <div class="d-flex flex-row gap-1">
                            <div><BsStarFill size="1.5rem" class="text-warning"/></div>
                            <div class="mt-1"><strong>1234</strong></div>
                        </div>
                    </div>
                </div>
                </div>

                <div class="card" >
                <img src="https://picsum.photos/200/250" class="card-img-top" alt="..."/>
                <div class="card-body">
                <div class="d-flex flex-column">
                        <div><h4 class="font-weight-bold float-start fw-bold">Phnom Penh</h4></div>
                        <div><p>Posted by Bopha</p></div>
                        <div class="d-flex flex-row gap-1">
                            <div><BsStarFill size="1.5rem" class="text-warning"/></div>
                            <div class="mt-1"><strong>1234</strong></div>
                        </div>
                    </div>
                </div>
                </div>

                <div class="card" >
                <img src="https://picsum.photos/200/250" class="card-img-top" alt="..."/>
                <div class="card-body">
                <div class="d-flex flex-column">
                        <div><h4 class="font-weight-bold float-start fw-bold">Siemrep</h4></div>
                        <div><p>Posted by Narith</p></div>
                        <div class="d-flex flex-row gap-1">
                            <div><BsStarFill size="1.5rem" class="text-warning"/></div>
                            <div class="mt-1"><strong>1234</strong></div>
                        </div>
                    </div>
                </div>
                </div>

                <div class="card" >
                <img src="https://picsum.photos/200/250" class="card-img-top" alt="..."/>
                <div class="card-body">
                <div class="d-flex flex-column">
                        <div><h4 class="font-weight-bold float-start fw-bold">Kep</h4></div>
                        <div><p>Posted by Linda</p></div>
                        <div class="d-flex flex-row gap-1">
                            <div><BsStarFill size="1.5rem" class="text-warning"/></div>
                            <div class="mt-1"><strong>1234</strong></div>
                        </div>
                    </div>
                </div>
                </div>
           </div>
           </div>

           <div class="text">
                <h1 class="text-center h1 fw-bold">Your next aventure start here</h1>
                <p class="text-center h2">Take a relexing forest walk, shop irish chrismas gift from around the <br/> 
                    country, cosy up in local pub and plan your next short break. There's so <br/> much to discover
                    in this winter.                </p>
                    <div class="image">
                        <img src="../Assets/pp.jpg" class="img-fluid" alt="" />
                    </div>
            </div>
            
            
        </main>

    </>
    );
}

export default About;

