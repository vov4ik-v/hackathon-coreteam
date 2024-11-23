import React, { useContext, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
import mainHackathonImage from '../../assets/jpg/main_hackathon.jpg';
import TypingText from "./util";

const useStyles = makeStyles(() => ({
    landing: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(90deg, #3fc337, #212121)', // Кольори градієнта
        backgroundSize: '200% 200%', // Великий розмір фону для плавної анімації
        animation: `$gradientAnimation 15s ease infinite`, // Довга анімація для плавності
    },
    '@keyframes gradientAnimation': {
        '0%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
        '100%': { backgroundPosition: '0% 50%' },
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        maxWidth: '1200px',
        padding: '2rem',
        zIndex: 1, // Зміщує контент над фоном
    },
    image: {
        maxHeight: '500px',
        width: 'auto',
        marginRight: '2rem',
        objectFit: 'cover',
        borderRadius: '15px',
        transition: 'transform 0.3s',
        opacity: 0,
        animation: `$flyIn 2s ease-out forwards`,
        '&:hover': {
            transform: 'scale(1.05)',
        },
    },
    '@keyframes flyIn': {
        from: {
            transform: 'translateX(-100vw)',
            opacity: 0,
        },
        to: {
            transform: 'translateX(0)',
            opacity: 1,
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
            <div className={classes.content}>
                <img src={mainHackathonImage} alt="Hackathon" className={classes.image} />
                <div className={classes.text}>
                    <TypingText text={headerData.name} typeSpeed={25} tag="h2" />
                    {showDescription && (
                        <TypingText text={headerData.description} typeSpeed={25} tag="p" />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Landing;
