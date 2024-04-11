import "../Header/Header.css";
import "./Footer.css";
import {Link} from 'react-router-dom'; 


import HeaderLogo from "/public/header/header_logo.png";
import Line from "/public/header/line.png";
import Lupa from "/public/header/lupa.png";
import Bag from "/public/header/korz.png";
import Likes from "/public/header/likes.png";

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
            <a href="" className="h_link">
              информация
            </a>
          </nav>
          <div className="footer_contacts">
              <a href="" className="h_link">г. кАЗАНЬ, УЛ. бали галеева 3а </a>
              <a href="" className="h_link">+7 (927) 482-09-82</a>
              <a href="" className="h_link">Kuzmakolom@gMAIL.RU</a>
          </div>
        </div>
      </div>
    </header>
  );
}
