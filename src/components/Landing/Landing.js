import React, { useState, useEffect } from 'react';
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

    useEffect(() => {
        const typingTime = headerData.name.length * 25 + 500;
        const timer = setTimeout(() => {
            setShowDescription(true);
        }, typingTime);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={classes.landing} id="home">
            <div className="glitch-background">
                {Array.from({length: 40}).map((_, index) => (
                    <span
                        className="glitch-text"
                        key={index}
                        style={{
                            top: `${Math.random() * 90}vh`,
                            left: `${Math.random() * 90}vw`,
                            animationDelay: `${Math.random() * 2}s`,
                        }}
                    >
                HACKath0n
            </span>
                ))}
            </div>
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
