import React, { useContext } from 'react';
import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData';

// Import the custom image
import myPhoto from '../../assets/jpg/my_13_photo.jpg';

function About() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="about" id="about" style={{ backgroundColor: theme.secondary }}>
            <div className="line-styling">
                <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                <div className="style-line" style={{ backgroundColor: theme.primary }}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{ color: theme.primary }}>{aboutData.title}</h2>
                    <p style={{ color: theme.tertiary80 }}>
                        {aboutData.description1}
                    </p>
                </div>
                <div className="about-img">
                    <img
                        src={myPhoto} // Use the imported custom image here
                        alt="About"
                        style={{ borderRadius: '10px', objectFit: 'cover' }} // Added styling for slight rounding
                    />
                </div>
            </div>
        </div>
    );
}

export default About;
