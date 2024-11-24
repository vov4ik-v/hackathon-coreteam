import React, {useState, useEffect, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { headerData } from '../../data/headerData';
import mainHackathonImage from '../../assets/jpg/main_hackathon.jpg';
import TypingText from './util';
import './Landing.css';

const useStyles = makeStyles(() => ({
    landing: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#212121", // Black background
        position: 'relative',
        overflow: 'hidden', // Prevent overflow for glitch animation
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        maxWidth: '1200px',
        padding: '2rem',
        zIndex: 1, // Ensure content is above the glitch background
    },
    image: {
        maxHeight: '500px',
        width: 'auto',
        marginRight: '2rem',
        objectFit: 'cover',
        borderRadius: '15px',
        transition: 'transform 0.3s', // Smooth scaling on hover
        opacity: 1, // No animation, image is fully visible
        '&:hover': {
            transform: 'scale(1.05)', // Slight zoom on hover
        },
    },
    text: {
        color: '#FFFFFF',
        fontFamily: 'var(--primaryFont)',
        maxWidth: '500px',
    },
    '@media (max-width: 900px)': {
        content: {
            flexDirection: 'column',
            textAlign: 'center',
        },
        image: {
            marginRight: 0,
            marginBottom: '1rem',
            maxHeight: '300px',
        },
    },
    '@media (max-width: 600px)': {
        image: {
            maxHeight: '230px',
        },
        text: {
            maxWidth: '90%',
        },
    },
}));

function Landing() {
    const classes = useStyles();
    const [showDescription, setShowDescription] = useState(false);
    const [glitchCount, setGlitchCount] = useState(20); // Default count for large screens
    const canvasRef = useRef();

    // Adjust glitch count based on screen size
    useEffect(() => {
        const updateGlitchCount = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth <= 600) {
                setGlitchCount(5); // Small screens
            } else if (screenWidth <= 900) {
                setGlitchCount(10); // Medium screens
            } else {
                setGlitchCount(20); // Large screens
            }
        };

        updateGlitchCount();
        window.addEventListener('resize', updateGlitchCount);

        return () => window.removeEventListener('resize', updateGlitchCount);
    }, []);

    useEffect(() => {
        const typingTime = headerData.name.length * 25 + 500;
        const timer = setTimeout(() => {
            setShowDescription(true);
        }, typingTime);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Set canvas size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const characters = 'HACKath0n'.split('');
        const fontSize = 15;
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

                // Reset drop to top
                if (y * fontSize > canvas.height && Math.random() > 0.975) drops[x] = 0;
                drops[x]++;
            });
        };

        const interval = setInterval(draw, 33);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={classes.landing} id="home">
            <canvas
                ref={canvasRef}
                className="matrix-canvas"
            ></canvas>
            {/*<div className="glitch-background">*/}
            {/*    {Array.from({ length: glitchCount }).map((_, index) => (*/}
            {/*        <span*/}
            {/*            className="glitch-text"*/}
            {/*            key={index}*/}
            {/*            style={{*/}
            {/*                top: `${Math.random() * 90}vh`,*/}
            {/*                left: `${Math.random() * 90}vw`,*/}
            {/*                animationDelay: `${Math.random() * 2}s`,*/}
            {/*            }}*/}
            {/*        >*/}
            {/*            HACKath0n*/}
            {/*        </span>*/}
            {/*    ))}*/}
            {/*</div>*/}
            <div className={classes.content}>
                <img src={mainHackathonImage} alt="Hackathon" className={classes.image}/>
                <div className="text-container">
                    <TypingText text={headerData.name} typeSpeed={25} tag="h2"/>
                    {showDescription && (
                        <TypingText text={headerData.description} typeSpeed={25} tag="p"/>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Landing;
