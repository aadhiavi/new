import React from 'react'
import './MainRoute.css'
import Booking from '../Files/Booking/Booking';
import { Images } from '../Files/Store/ImagesStore';
import HomeBody from './Components/HomeBody';
import { HomeContent } from './Components/HomeContent';


const SBHR = () => {
    return (
        <div>
            <div className="HomeSlider">
            </div>
            <div className="bookingSection">
                <Booking />
            </div>
            <HomeBody images={Images} content={HomeContent[0].content} imagePosition="left" />
            <HomeBody images={Images} content={HomeContent[1].content} imagePosition="right" />
            <HomeBody images={Images} content={HomeContent[2].content} imagePosition="left" />
        </div>
    )
}

export default SBHR;