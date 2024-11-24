import React, { useContext, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { ThemeContext } from '../../contexts/ThemeContext';
import { questionsData } from '../../data/questionsData';
import './Testimonials.css';

function Testimonials() {
    const { theme } = useContext(ThemeContext);
    const sliderRef = useRef();
    const topCanvasRef = useRef();
    const bottomCanvasRef = useRef();

    const setupCanvas = (canvasRef) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        canvas.width = 800;
        canvas.height = 350;

        const characters = 'HACKath0n'.split('');
        const fontSize = 15; // Зменшений шрифт для щільності
        const columns = canvas.width / fontSize;
        const drops = Array.from({ length: columns }, () => 1);

        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#0F0';
            ctx.font = `${fontSize}px monospace`;

            drops.forEach((y, x) => {
                const char = characters[Math.floor(Math.random() * characters.length)];
                ctx.fillText(char, x * fontSize, y * fontSize);

                if (y * fontSize > canvas.height && Math.random() > 0.975) drops[x] = 0;
                drops[x]++;
            });
        };

        const interval = setInterval(draw, 33);
        return () => clearInterval(interval);
    };

    useEffect(() => {
        setupCanvas(topCanvasRef);
        setupCanvas(bottomCanvasRef);
    }, []);

    const settings = {
        dots: true,
        adaptiveHeight: true,
        infinite: true,
        speed: 800,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
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
                    className="testimonials"
                    style={{ backgroundColor: theme.secondary }}
                >
                    {/* Трикутники */}
                    <div className="testimonials--triangle">
                        <canvas ref={topCanvasRef} className="matrix-canvas"></canvas>
                    </div>
                    <div className="testimonials--triangle-bottom-right">
                        <canvas ref={bottomCanvasRef} className="matrix-canvas"></canvas>
                    </div>

                    <div className="testimonials--header">
                        <h1 className="tglitch" data-text="Відповіді на запитання">
                            Відповіді на запитання
                        </h1>
                    </div>
                    <div className="testimonials--body">
                        <div
                            className="testimonials--slider"
                            style={{ backgroundColor: theme.secondary }}
                        >
                            <Slider {...settings} ref={sliderRef}>
                                {questionsData.map((question) => (
                                    <div className="single--testimony" key={question.id}>
                                        <div className="testimonials--container">
                                            <div
                                                className="review--content"
                                                style={{
                                                    backgroundColor: theme.primary50,
                                                    color: theme.tertiary,
                                                }}
                                            >
                                                <h2>{question.title}</h2>
                                                <br />
                                                <h3>{question.text}</h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                            <button
                                className="prevBtn"
                                onClick={gotoPrev}
                                style={{ backgroundColor: theme.primary50 }}
                            >
                                <FaArrowLeft
                                    style={{ color: theme.secondary }}
                                    aria-label="Previous testimonial"
                                />
                            </button>
                            <button
                                className="nextBtn"
                                onClick={gotoNext}
                                style={{ backgroundColor: theme.primary50 }}
                            >
                                <FaArrowRight
                                    style={{ color: theme.secondary }}
                                    aria-label="Next testimonial"
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
