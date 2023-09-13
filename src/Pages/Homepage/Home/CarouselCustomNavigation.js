import React, { useState, useEffect } from "react";

function CarouselSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = ["https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80", "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80", "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"]
    // Function to handle automatic image rotation
    const rotateImages = () => {
        const newIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        // Rotate images automatically every 3 seconds
        const interval = setInterval(rotateImages, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    // Function to handle clicking on a marker
    const handleMarkerClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="carousel-slider">
            <div className="slider-images">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`slide ${index === currentIndex ? "active" : ""}`}
                        style={{ backgroundImage: `url(${image})` }}
                    ></div>
                ))}
            </div>
            <div className="slider-markers">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`marker ${index === currentIndex ? "active" : ""}`}
                        onClick={() => handleMarkerClick(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default CarouselSlider;
