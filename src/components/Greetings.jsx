import React, { useEffect, useState } from 'react';

const data = [
    "Hello",      
    "Hola",       
    "こんにちは", 
    "Bonjour",     
    "नमस्ते" 
];

function Greetings() {
    const [greetings, setGreetings] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < data.length) {
            const timer = setTimeout(() => {
                setGreetings(data[index]);
                setIndex(index + 1);
            }, 450);
            return () => clearTimeout(timer);
        }
    }, [index]);

    return (
        <div className='greetings'>{greetings}</div>
    );
}

export default Greetings;
