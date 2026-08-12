import { useEffect, useState } from 'react';

const data = ['Hello', 'Hola', 'こんにちは', 'Bonjour', 'नमस्ते'];

function Greetings() {
  const [greetings, setGreetings] = useState(data[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= data.length - 1) return undefined;
    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
      setGreetings(data[index + 1]);
    }, 350);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="greetings-text" aria-live="polite">
      {greetings}
    </div>
  );
}

export default Greetings;
