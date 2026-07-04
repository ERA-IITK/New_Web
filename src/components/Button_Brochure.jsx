import React from 'react';

const CustomButton = () => {
  const handleHover = (e) => {
    e.target.style.backgroundColor = '#6194fb';
    e.target.style.color = '#fff';
    e.target.style.transform = 'scale(1.1)';
  };

  const handleHoverOut = (e) => {
    e.target.style.backgroundColor = '#d4d4d8';
    e.target.style.color = '#141414';
    e.target.style.transform = 'scale(1)';
  };

  const buttonStyle = {
    fontWeight: 'bold',
    color: '#141414',
    textDecoration: 'none',
    transition: 'color 0.3s, transform 0.3s',
    display: 'inline-block',
    backgroundColor: '#d4d4d8',
    padding: '1px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <button
      style={buttonStyle}
      
      onMouseOver={handleHover}
      onMouseOut={handleHoverOut}
      onClick={() =>
        window.open(
          'https://www.dropbox.com/scl/fi/165w2ovsfg4wlif3zone6/Brochure.pdf?rlkey=wjhej532ayequjvny56ggnpjt&dl=0',
          '_blank'
        )
      }
    >
      Brochure
    </button>
  );
};

export default CustomButton;