import { useState, useEffect } from 'react';

const Typewriter = ({ styles }) => {
  const [text, setText] = useState('');
  const strText = 'E-RA';
  const speed = 350; // Adjust the typing speed here (in milliseconds)

  useEffect(() => {
    let charIndex = 0;
    const typingEffect = setInterval(() => {
      if (charIndex < strText.length) {
        setText((prev) => prev + strText.charAt(charIndex));
        charIndex++;
      } else {
        clearInterval(typingEffect);
      }
    }, speed);
    return () => clearInterval(typingEffect);
  }, []);

  return (
    <h1 className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase pr-4 sm:pr-6`} style={{ marginLeft: '-60px' }}>
      Hi, Welcome to{' '}
      <span className="sm:text-battleGray sm:text-[7vw] text-eerieBlack text-[7vw] font-mova font-extrabold uppercase" style={{ color: '#6194fb' }}>
        {text}
      </span>
    </h1>
  );
};

export default Typewriter;
