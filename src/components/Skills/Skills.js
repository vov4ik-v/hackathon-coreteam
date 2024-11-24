import React, { useContext, useRef } from 'react';
import Marquee from "react-fast-marquee";

import './Skills.css';

import { ThemeContext } from '../../contexts/ThemeContext';
import { skillsData } from '../../data/skillsData';
import { skillsImage } from '../../utils/skillsImage';
import {aboutData} from "../../data/aboutData";

function Skills() {
    const { theme } = useContext(ThemeContext);
    const scrollRef = useRef(null); // Референція для обгортки скролу

    // Обробка горизонтального скролу за допомогою коліщатка миші
    const handleScroll = (e) => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += e.deltaY; // Горизонтальний скрол пропорційно вертикальному
        }
    };

    const skillBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 30px ${theme.primary30}`
    };

    return (
        <div id="skills" className="skills" style={{ backgroundColor: theme.secondary }}>
            <div className="skillsHeader">
                <h2 className="glitch" data-text="Skills">
                   Skills
                </h2>
            </div>
            <div
                className="skillsContainer"
                ref={scrollRef} // Додаємо референцію для контейнера
                onWheel={handleScroll} // Додаємо горизонтальний скрол мишкою
            >
                <div className="skill--scroll">
                    <Marquee
                        gradient={false}
                        speed={110}
                        pauseOnHover={true}
                        pauseOnClick={true}
                        direction="left"
                        drag={true} // Дозволяє перетягування елементів
                    >
                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 style={{ color: theme.tertiary }}>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    );
}

export default Skills;
