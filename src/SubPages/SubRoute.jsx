import React from 'react';
import ImageSlider from '../Files/ImageSlider/ImageSlider';
import { dineDetails, imageSlides, stayDetails, weddingHalls } from '../Files/Store/Store';

function SubRoute({ route, heading }) {
    const details = stayDetails[route];
    const dining = dineDetails[route];
    const events = weddingHalls[route];

    return (
        <div>
            <h2>{heading}</h2>
            <p>
                Content for {route} - {heading}.
            </p>
            {heading === 'Stay' && details && (
                <>
                 {imageSlides[route] && <ImageSlider images={imageSlides[route]} />}
                    <p>{details.description}</p>
                    <h3>Popular Stays:</h3>
                    <ul>
                        {details.popularStays.map(stay => (
                            <li key={stay}>{stay}</li>
                        ))}
                    </ul>
                    <h3>Tips:</h3>
                    <p>{details.tips}</p>
                </>
            )}

            {heading === 'Dine' && dining && (
                <>
                    <p>{dining.description}</p>
                    <h3>Popular Stays:</h3>
                    <ul>
                        {dining.popularRestaurants.map(stay => (
                            <li key={stay}>{stay}</li>
                        ))}
                    </ul>
                    <h3>Tips:</h3>
                    <p>{dining.tips}</p>
                    {imageSlides[route] && <ImageSlider images={imageSlides[route]} />}
                </>
            )}

            {heading === 'Wedding-Hall' && events && (
                <>
                    <p>{events.description}</p>
                    <h3>Popular Stays:</h3>
                    <ul>
                        {events.popularHalls.map(stay => (
                            <li key={stay}>{stay}</li>
                        ))}
                    </ul>
                    <h3>Tips:</h3>
                    <p>{events.tips}</p>
                    {imageSlides[route] && <ImageSlider images={imageSlides[route]} />}
                </>
            )}
            <p>Here’s some more random content to test the layout and routing for {heading} in {route}.</p>
            <ul>
                <li>Item 1 related to {heading} in {route}</li>
                <li>Item 2 related to {heading} in {route}</li>
                <li>Item 3 related to {heading} in {route}</li>
            </ul>
        </div>
    );
}

export default SubRoute;