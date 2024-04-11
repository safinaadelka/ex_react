import "./Banner.css";
import HeaderLogo from "/public/banner/header_logo.png";
import BannerImage from "/public/banner/banner_foto.png";
export default function Banner() {
  return (
    <>
      <div className="banner">
        <div className="banner_content">
          <img src={HeaderLogo} alt="" className="banner_logo" />
          <p className="banner_text">БРЕНД ОДЕЖДЫ</p>
          <a href="" className="button">
            Перейти в категории
          </a>
        </div>
    
      </div>
    </>
  );
 
}
