import React from 'react'
import HomeBody from './HomeBody'
import { Images } from '../../Files/Store/ImagesStore'
import { HomeContent } from './HomeContent'

const Bangalore = () => {
    return (
        <div>
            <HomeBody images={Images} content={HomeContent[0].content} imagePosition="left" />
            <HomeBody images={Images} content={HomeContent[1].content} imagePosition="right" />
            <HomeBody images={Images} content={HomeContent[2].content} imagePosition="left" />
        </div>
    )
}

export default Bangalore;