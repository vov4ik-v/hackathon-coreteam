import React, { useContext, useState } from 'react';
import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData';
import myPhoto from '../../assets/jpg/my_13_photo.jpg';
import {whyData} from "../../data/whyData";

function About() {
    const { theme } = useContext(ThemeContext);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    return (
        <div className="about" id="about" style={{ backgroundColor: theme.secondary }}>
            <div className="line-styling">
                <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                <div className="style-line" style={{ backgroundColor: theme.primary }}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 className="glitch" data-text={aboutData.title}>
                        {aboutData.title}
                    </h2>
                    <p
                        className={`description-text ${isExpanded ? 'expanded' : ''}`}
                        style={{color: theme.tertiary80}}
                        dangerouslySetInnerHTML={{__html: aboutData.description1}} // Вставка HTML
                    />
                    <button onClick={toggleExpand} className="expand-button">
                        {isExpanded ? 'Згорнути' : 'Показати більше'}
                    </button>
                </div>
                <div className="about-img">
                    <img src={myPhoto} alt="About" style={{borderRadius: '10px', objectFit: 'cover' }} />
                </div>
            </div>
        </div>
    );
}

export default About;
