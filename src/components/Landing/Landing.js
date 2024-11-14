import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
import mainHackathonImage from '../../assets/jpg/main_hackathon.jpg';

const useStyles = makeStyles((theme) => ({
    landing: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: (props) => `linear-gradient(90deg, ${props.theme.primary} 35%, ${props.theme.secondary} 65%)`,
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        maxWidth: '1200px',
        padding: '2rem',
    },
    image: {
        maxHeight: '500px',
        width: 'auto',
        marginRight: '2rem',
        objectFit: 'cover',
        borderRadius: '15px',
        transition: 'transform 0.3s',
        '&:hover': {
            transform: 'scale(1.05)',
        },
    },
    text: {
        color: (props) => props.theme.tertiary,
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
    const { theme, drawerOpen } = useContext(ThemeContext);
    const classes = useStyles({ theme });

    return (
        <div className={classes.landing}>
            <div className={classes.content}>
                <img
                    src={mainHackathonImage}
                    alt=""
                    className={classes.image}
                    style={{
                        opacity: `${drawerOpen ? '0' : '1'}`,
                    }}
                />
                <div className={classes.text}>
                    <h2>{headerData.name}</h2>
                    <p>{headerData.desciption}</p>
                </div>
            </div>
        </div>
    );
}

export default Landing;
