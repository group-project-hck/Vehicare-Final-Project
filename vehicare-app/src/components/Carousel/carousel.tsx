import React, { useState } from 'react';
import CheckHomeButton from "../Button/Check Button/checkHomeBtn";
import CheckSparepartButton from "../Button/Check Button/checkSparepartBtn";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import image1 from "../../Assets/About/background1.svg"
import image2 from "../../Assets/About/background2.svg"

const Carousel: React.FC = () => {
    const [activeSlide, setActiveSlide] = useState<number>(1);

    const images = [
        image1.src,
        image2.src
    ];

    const handleSlideChange = (slideNumber: number) => {
        setActiveSlide(slideNumber);
    };

    const handlePrevious = () => {
        const previousSlide = activeSlide - 1;
        setActiveSlide(previousSlide < 1 ? images.length : previousSlide);
    };

    const handleNext = () => {
        const nextSlide = activeSlide + 1;
        setActiveSlide(nextSlide > images.length ? 1 : nextSlide);
    };

    const goToSlide = (slideNumber: number) => {
        setActiveSlide(slideNumber);
    };

    return (
        <div className="carousel-buttons relative w-full mt-20">
            <div className="carousel carousel-end rounded-box w-full ">
                <div className="carousel-item relative w-full ">
                    {images.map((image, index) => (
                        <div key={index} id={`slide${index + 1}`} className={`carousel-item relative w-full ${activeSlide === index + 1 ? 'block' : 'hidden'}`}>
                            {index === 0 ? <CheckHomeButton/> : <CheckSparepartButton/>}
                            <img src={image} className="w-full" />
                            <div className="absolute inset-0 flex items-center justify-center mx-4">
                                <button onClick={handlePrevious} className="absolute left-0 bg-orange-500 text-white px-3 py-1 rounded-full">
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </button>
                                <button onClick={handleNext} className="absolute right-0 bg-orange-500 text-white px-3 py-1 rounded-full">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center mt-4">
                {images.map((_, index) => (
                    <button key={index} onClick={() => goToSlide(index + 1)} className={`mx-1 px-3 py-1 rounded-lg ${activeSlide === index + 1 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'}`}>{index + 1}</button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
