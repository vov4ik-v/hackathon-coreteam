import React, { useContext, useState } from 'react';
import './Why.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { whyData } from '../../data/whyData';
import hackPhoto from '../../assets/jpg/hack_photo.JPG';
import {aboutData} from "../../data/aboutData";

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
                    {/*<div className="glitch-img">*/}
                        <img src={hackPhoto} alt="Why"/>
                    {/*</div>*/}
                </div>

                <div className="why-description">
                    <h2 className="glitch" data-text={whyData.title}>
                        {whyData.title}
                    </h2>
                    <p
                        className={`description-text ${isExpanded ? 'expanded' : ''}`}
                        style={{color: theme.tertiary80}}
                        dangerouslySetInnerHTML={{__html: whyData.description1}}
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
