import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Sliders/Sliders'
import img1 from '/public/SlidersS/1s.jpg'
import img2 from '/public/SlidersS/2s.jpg'
import img3 from '/public/SlidersS/3s.jpg'

export default function SliderS(){
    const setting = {
        dots: true,
        infinite: true,
        speed: 400,
        sliderToShow: 1,
        sliderToScroll: 1,
    }
    return(
        <><br /><br />
   
        <div className="slider">
            
            <div className="container">
            <h2>Слайдер</h2>
            <br /> <br /> 
                <div className="slider-content">
                    <div className="slider-place">
                        <Slider className="sliderr" {...setting}>
                            <div className="slide">
                                <img className="slide-img" src={img1}/>
                            </div>
                            <div className="slide">
                                <img className="slide-img"  src={img2}/>
                            </div>
                            <div className="slide">
                                <img className="slide-img"  src={img3}/>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div><br /><br />
        </>
    )
}