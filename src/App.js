import './App.css';
import './index.css';
import MotoItem from './components/MotoItem';
import { dataMoto } from './MotoData';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');

    if (nextButton && prevButton) {
      nextButton.onclick = function() {
        let lists = document.querySelectorAll('.item');
        document.getElementById('slide').appendChild(lists[0]);
      };

      prevButton.onclick = function() {
        let lists = document.querySelectorAll('.item');
        document.getElementById('slide').prepend(lists[lists.length - 1]);
      };
    }
  }, []);
  return (
    <div className="app">
      <div className="header">
        <div className="logo">
          <p>
            DEV<span>ILL</span>
          </p>
        </div>
        <ul className="nav">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Category</a>
          </li>
          <li>
            <a>Info</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div id="slide">
        {
          dataMoto.map((item, index)=>{
            return (
              <MotoItem 
              id={item.id}
              image={item.image}
              name={item.name}
              des={item.des}
              year={item.year}
              maxSpeed={item.maxSpeed}
              model={item.model}>

              </MotoItem>
            )
          })
        }
      </div>
      <div className="directional">
        <button id="prev">
          <i
            className="fa-solid fa-caret-left"
            style={{ color: "#4fc4f3" }}
          ></i>
        </button>
        <button id="next">
          <i
            className="fa-solid fa-caret-right"
            style={{ color: "#4fc4f3" }}
          ></i>
        </button>
      </div>
    </div>
    
  );
}

export default App;
