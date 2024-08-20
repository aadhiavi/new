import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ImageSlider from '../../Files/ImageSlider/ImageSlider';
import '../MainRoute.css'

const HomeBody = ({ images, content, imagePosition }) => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    })

    const imageLeft = () => (
        <div className='left'>
            <div data-aos="fade-right"><ImageSlider images={images} /></div>
            <div className='content' data-aos="fade-left">{content}</div>
        </div>
    );

    const imageRight = () => (
        <div className='right'>
            <div className='content' data-aos="fade-right">{content}</div>
            <div data-aos="fade-left"><ImageSlider images={images} /></div>
        </div>
    );

    return imagePosition === 'left' ? imageLeft() : imageRight();
};

export default HomeBody;