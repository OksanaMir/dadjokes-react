import React, { useState } from 'react';
import { render } from 'react-dom';
import { jokes } from './jokes.js';
import { Joke } from './Joke/joke';
import './style.css';

const App = () => {
  return (
    <div className="container">
      {jokes.map((joke) => (
        <Joke
          key={joke.id}
          userName={joke.name}
          userAvatar={joke.avatar}
          text={joke.text}
          likes={joke.likes}
          dislikes={joke.dislikes}
        />
      ))}
    </div>
  );
};

render(<App />, document.querySelector('#app'));
