import React, { useContext, useState } from 'react';
import './Why.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { whyData } from '../../data/whyData';
import hackPhoto from '../../assets/jpg/hack_photo.JPG';

function Why() {
    const { theme } = useContext(ThemeContext);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    return (
        <div className="why" id="why" style={{ backgroundColor: theme.secondary }}>
            <div className="line-styling">
                <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                <div className="style-line" style={{ backgroundColor: theme.primary }}></div>
            </div>
            <div className="why-body">
                <div className="why-img">
                    <img src={hackPhoto} alt="Why" style={{ borderRadius: '10px', objectFit: 'cover' }} />
                </div>
                <div className="why-description">
                    <h2 style={{ color: theme.primary }}>{whyData.title}</h2>
                    <p
                        className={`description-text ${isExpanded ? 'expanded' : ''}`}
                        style={{ color: theme.tertiary80 }}
                    >
                        {whyData.description1}
                    </p>
                    <button onClick={toggleExpand} className="expand-button">
                        {isExpanded ? 'Згорнути' : 'Показати більше'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Why;
