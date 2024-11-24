import React, { useContext, useRef } from 'react';

import Slider from 'react-slick';

import { FaQuoteLeft, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import { ThemeContext } from '../../contexts/ThemeContext';
import {questionsData} from '../../data/questionsData';

import './Testimonials.css';
import {aboutData} from "../../data/aboutData";

function Testimonials() {
    const { theme } = useContext(ThemeContext);
    const sliderRef = useRef();

    const settings = {
        dots: true,
        adaptiveHeight: true,
        infinite: true,
        speed: 800,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        margin: 3,
        loop: true,
        autoplaySpeed: 6000,
        draggable: true,
        swipeToSlide: true,
        swipe: true,
    };

    const gotoNext = () => {
        sliderRef.current.slickNext();
    };

    const gotoPrev = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <>
            {questionsData.length > 0 && (
                <div
                    id="answers"
                    className='testimonials'
                    style={{ backgroundColor: theme.primary }}
                >
                    <div className='testimonials--header'>
                        <h1 className="tglitch" data-text="Відповіді на запитання">
                            Відповіді на запитання
                        </h1>
                    </div>
                    <div className='testimonials--body'>
                        <div
                            className='testimonials--slider'
                            style={{ backgroundColor: theme.primary }}
                        >
                            <Slider {...settings} ref={sliderRef}>
                                {questionsData.map((question) => (
                                    <div
                                        className='single--testimony'
                                        key={question.id}
                                    >
                                        <div className='testimonials--container'>
                                            <div
                                                className='review--content'
                                                style={{
                                                    backgroundColor:
                                                        theme.secondary,
                                                    color: theme.tertiary,
                                                }}
                                            >
                                                <h2>{question.title}</h2>
                                                <br/>
                                                <h3>{question.text}</h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                            <button
                                className='prevBtn'
                                onClick={gotoPrev}
                                style={{ backgroundColor: theme.secondary }}
                            >
                                <FaArrowLeft
                                    style={{ color: theme.primary }}
                                    aria-label='Previous testimonial'
                                />
                            </button>
                            <button
                                className='nextBtn'
                                onClick={gotoNext}
                                style={{ backgroundColor: theme.secondary }}
                            >
                                <FaArrowRight
                                    style={{ color: theme.primary }}
                                    aria-label='Next testimonial'
                                />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Testimonials;
