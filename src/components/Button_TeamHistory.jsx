import React from 'react';

const CustomButton3 = () => {
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
          'https://www.canva.com/design/DAGOhAfwSf0/0mRDoO497Mu-Oyv8otnc9A/view?utm_content=DAGOhAfwSf0&utm_campaign=designshare&utm_medium=link&utm_source=editor',
          '_blank'
        )
      }
    >
      click here.
    </button>
  );
};

export default CustomButton3;