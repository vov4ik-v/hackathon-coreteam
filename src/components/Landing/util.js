import React, { useState, useEffect } from 'react';

function TypingText({ text, typeSpeed, tag }) {
    const [displayedText, setDisplayedText] = useState('');
    const Tag = tag || 'span'; // За замовчуванням використовується <span>

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayedText((prev) => prev + text[index]);
            index++;
            if (index === text.length) {
                clearInterval(interval);
            }
        }, typeSpeed);
        return () => clearInterval(interval); // Чистимо таймер при демонтажі
    }, [text, typeSpeed]);

    return <Tag>{displayedText}</Tag>;
}

export default TypingText;
