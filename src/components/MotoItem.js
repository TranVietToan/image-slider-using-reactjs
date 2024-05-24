import React from 'react';
const MotoItem = (props) => {
    return (
      <div className="item">
        <div class="image">
          <img src={props.image} alt="no image" />
        </div>
        <div className="content">
          <div class="left">
            <h1>{props.name}</h1>
            <div class="des">
                {props.des}
            </div>
            <button>
              See more
              <i
                class="fa-solid fa-angle-right"
                style={{ color: "#F5F5F5" }}
              ></i>
              <i
                class="fa-solid fa-angle-right"
                style={{ color: "#F5F5F5" }}
              ></i>
              <i
                class="fa-solid fa-angle-right"
                style={{ color: "#F5F5F5" }}
              ></i>
            </button>
          </div>
          <div class="right">
            <h2>CẤU HÌNH</h2>
            <ul>
              <li>
                <p>Năm sản xuất</p>
                <p>{props.year}</p>
              </li>
              <li>
                <p>Tốc độ tối đa</p>
                <p>{props.maxSpeed}</p>
              </li>
              <li>
                <p>Mẫu mã</p>
                <p>{props.model}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default MotoItem;