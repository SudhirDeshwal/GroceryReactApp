import React from 'react';

const Header = (props) => {
  return (
    <header className='Header'>
      <h1>{props.title}</h1>
      <span className='stats'>Items: {props.items}</span>
    </header>
  );
};

export default Header;
