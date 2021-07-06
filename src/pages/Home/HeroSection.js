import "bootstrap/dist/css/bootstrap.min.css";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import sliderImg1 from "../../assets/slider-img/slider-img.jpg";
import sliderImg2 from "../../assets/slider-img/sliderImg2.png";
import sliderImg3 from "../../assets/slider-img/sliderImg3.jpg";
import SubMenuCategory from "../../components/Header/Sub-Menu-Category";
const AutoplaySlider = withAutoplay(AwesomeSlider);
const HeroSection = () => {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-md-3 p-right__0">
            <SubMenuCategory />
          </div>
          <div className="col-md-9 hero__slider">
            <div className="courosel__slider">
              <AutoplaySlider
                play={true}
                cancelOnInteraction={false}
                bullets={false}
                interval={6000}
              >
                <div data-src={sliderImg1} />
                <div data-src={sliderImg2} />
                <div data-src={sliderImg3} />
              </AutoplaySlider>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
