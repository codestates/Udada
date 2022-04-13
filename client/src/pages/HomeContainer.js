import React from 'react';
import { homeImages } from "../assets/images"
import { mainImages } from "../assets/images"

// import { Carousel } from 'react-responsive-carousel';



function HomeContainer() {


    
    return (

        <div id="main-container">
            <div class="slide">
            <ul>
            {homeImages.map((src, idx) => <li><img src={src} alt={idx} /></li>)}
            </ul>
            </div>
            <div id="main-greetings">
                <img src={mainImages[0]} alt="" />
            </div>
        </div>
    );
}

export default HomeContainer;