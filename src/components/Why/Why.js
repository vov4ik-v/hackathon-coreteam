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
                    <img src={hackPhoto} alt="Why" />
                </div>
                <div className="why-description">
                    <h2 className="glitch" data-text={whyData.title}>
                        {whyData.title}
                    </h2>
                    <p
                        className={`description-text ${isExpanded ? 'expanded' : ''}`}
                        style={{
                            color: theme.tertiary80,
                            maxHeight: isExpanded ? 'none' : '10rem', // Dynamic height
                            overflow: isExpanded ? 'visible' : 'hidden',
                            WebkitLineClamp: isExpanded ? 'unset' : 5, // For Safari compatibility
                            WebkitBoxOrient: 'vertical',
                            display: isExpanded ? 'block' : '-webkit-box',
                            transition: 'max-height 0.5s ease', // Smooth transition
                        }}
                        dangerouslySetInnerHTML={{ __html: whyData.description1 }}
                    />
                    <button
                        onClick={toggleExpand}
                        className="expand-button"
                        data-text={isExpanded ? 'Згорнути' : 'Показати більше'}
                    >
                        {isExpanded ? 'Згорнути' : 'Показати більше'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Why;
