import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import background from "./img/background.jpg";

const App = () => (
  <div>
    <header>
      <nav>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="active">
              <a href="#">Главная</a>
            </li>
            <li>
              <a href="#">Каталог</a>
            </li>
            <li>
              <a href="#">Доставка</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <img src={background} className="backpicture" alt="MarkoVelly"></img>
  </div>
);

export default App;
