import "./Header.css";
import "././Header.css";
import HeaderLogo from "/public/header/header_logo.png";
import Line from "/public/header/line.png";
import Lupa from "/public/header/lupa.png";
import Bag from "/public/header/korz.png";
import Likes from "/public/header/likes.png";
import {Link} from 'react-router-dom'; 

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="h_content">
          <nav>
            <a href="" className="">
              <img src={HeaderLogo} alt="" className="logo" />
            </a>
            <img src={Line} alt="" />
            <Link to="/" className="h_link">
              главная
            </Link>
            <Link to="/catalog" className="h_link">
              каталог
            </Link>
            <img src={Line} alt="" />
            <Link to="/" className="h_link">информация</Link>
            <Link to="/users" className="h_link">
              ПОЛЬЗОВАТЕЛИ
            </Link>
            <Link to="/create" className="h_link">ДОБАВЛЕНИЕ</Link>
            <Link to="/basket" className="h_link">Корзина</Link>
          </nav>
          <div className="header_actions">
            <a href="">
              <img src={Lupa} alt="" />
            </a>
            <a href="">
              <img src={Bag} alt="" />
            </a>
            <a href="">
              <img src={Likes} alt="" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
