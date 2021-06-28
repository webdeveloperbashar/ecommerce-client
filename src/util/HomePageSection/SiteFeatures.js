import "bootstrap/dist/css/bootstrap.min.css";
import CateImg1 from "../../assets/Cate-image/cateImg-1.jpg";
import CateImg2 from "../../assets/Cate-image/cateImg-2.jpg";
import CateImg3 from "../../assets/Cate-image/cateImg-3.jpg";
import CateImg4 from "../../assets/Cate-image/cateImg-4.jpg";
import CateImg5 from "../../assets/Cate-image/cateImg-5.jpg";
import HorizontalLine from "../../config/HorizontalLine";
const SiteFeatures = () => {
  return (
    <main className="m-top__4">
      <div className="container">
        <div className="featured__product p__4 box__shadow bg-light">
          <div className="row">
            <div className="col-md-4">
              <div className="grid-left">
                <div className="category__banner">
                  <div
                    className="cate__content"
                    style={{ background: `url(${CateImg1})` }}
                  ></div>
                  <div className="category__content">
                    <h2>Vegetable & Fruits</h2>
                    <HorizontalLine
                      width="50px"
                      height="1px"
                      margin="14px auto"
                      background="white"
                    />
                    <p>25 Products</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row">
                <div className="col-md-12">
                  <div className="grid-middle-1">
                    <div className="category__banner">
                      <div
                        className="cate__content"
                        style={{ background: `url(${CateImg2})` }}
                      ></div>
                      <div className="category__content">
                        <h2>Dairy Bread & Eggs</h2>
                        <HorizontalLine
                          width="50px"
                          height="1px"
                          margin="14px auto"
                          background="white"
                        />
                        <p>9 Products</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row m-top__4">
                <div className="col-md-6">
                  <div className="grid-middle-2">
                    <div className="category__banner">
                      <div
                        className="cate__content"
                        style={{ background: `url(${CateImg3})` }}
                      ></div>
                      <div className="category__content">
                        <h2>Health</h2>
                        <HorizontalLine
                          width="50px"
                          height="1px"
                          margin="14px auto"
                          background="white"
                        />
                        <p>5 Products</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="grid-middle-3">
                    <div className="category__banner">
                      <div
                        className="cate__content"
                        style={{ background: `url(${CateImg4})` }}
                      ></div>
                      <div className="category__content">
                        <h2>Package Food</h2>
                        <HorizontalLine
                          width="50px"
                          height="1px"
                          margin="14px auto"
                          background="white"
                        />
                        <p>10 Products</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="grid-right">
                <div className="category__banner">
                  <div
                    className="cate__content"
                    style={{ background: `url(${CateImg5})` }}
                  ></div>
                  <div className="category__content">
                    <h2>Beverage</h2>
                    <HorizontalLine
                      width="50px"
                      height="1px"
                      margin="14px auto"
                      background="white"
                    />
                    <p>15 Products</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SiteFeatures;
