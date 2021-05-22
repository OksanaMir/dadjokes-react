import React, { useState } from 'react';
import { render } from 'react-dom';
import { jokes } from './jokes.js';
import './style.css';

const App = () => {
  const [upLikes, setUpLikes] = useState(0);
  const [downLikes, setDownLikes] = useState(0);

  const randJoke = jokes[Math.floor(Math.random() * (jokes.length - 1))];

  return (
    <div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src={randJoke.avatar} />
            <p className="user-name">{randJoke.name}</p>
          </div>

          <p className="joke__text">{randJoke.text}</p>
        </div>
        <div className="joke__likes">
          <button
            id="btn-up"
            className="btn-like btn-like--up"
            onClick={() => setUpLikes(upLikes + 1)}
          ></button>
          <span id="likes-up" className="likes-count likes-count--up">
            {upLikes}
          </span>
          <button
            id="btn-down"
            className="btn-like btn-like--down"
            onClick={() => setDownLikes(downLikes + 1)}
          ></button>
          <span id="likes-down" className="likes-count likes-count--down">
            {downLikes}
          </span>
        </div>
      </div>
    </div>
  );
};

render(<App />, document.querySelector('#app'));
