import React from 'react';
import { homeImages } from "../assets/images"
import { Carousel } from 'react-responsive-carousel';


function HomeContainer() {

    return (
        <div id="main-container">
            <div id="main-body">
                <div id="main-carousel">
                    <Carousel infiniteLoop useKeyboardArrows autoPlay>
                        {homeImages.map((src, idx) => <img key={idx} src={src} alt={idx} />)}

                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default HomeContainer;