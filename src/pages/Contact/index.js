import { useBreakpoints } from "react-device-breakpoints";
import { Helmet } from "react-helmet";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Footer from "../../components/Footer";
import Nav from "../../components/Header/Nav";
const Index = () => {
  const device = useBreakpoints();
  return (
    <>
      <Helmet>
        <title>Contact us - GreenValleyGrocery Shop</title>
      </Helmet>
      {device.isDesktop && <Nav isShow />}
      <div className="contact__wrapper py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading text-center">
                <h2>Contact Us</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Exercitationem quia nisi dolore voluptate accusamus illo est
                  similique dolorum vel velit.
                </p>
              </div>
            </div>
          </div>
          <div className="row contact__form__row align-items-center">
            <div className="col-md-6">
              <div className="contact__left mt-5">
                <ul className="addressList">
                  <li>
                    <span className="address__icon">
                      <FaMapMarkerAlt />
                    </span>
                    <span>
                      <h3>Address</h3>
                      <p>Rajshahi, Bangladesh</p>
                    </span>
                  </li>
                  <li>
                    <span className="address__icon">
                      <FaPhoneAlt />
                    </span>
                    <span>
                      <h3>Contact</h3>
                      <p>(+1)123456789</p>
                    </span>
                  </li>
                  <li>
                    <span className="address__icon">
                      <SiGmail />
                    </span>
                    <span>
                      <h3>Gmail</h3>
                      <p>support@greenvalley.com</p>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact__right mt-5">
                <div className="contact__form">
                  <h2 className="font-size__3 text-center text-white">
                    Send Message
                  </h2>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control message__input"
                        name="name"
                        autoComplete="off"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control message__input"
                        name="email"
                        autoComplete="off"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="number"
                        className="form-control message__input"
                        name="number"
                        autoComplete="off"
                        placeholder="Enter your phone"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        name="message"
                        autoComplete="off"
                        className="form-control message__input"
                        cols="30"
                        rows="5"
                        placeholder="Write your message..."
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="form-control mt-3 btn text-white"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;

// https://i.ibb.co/C9bG8jz/contact-page.png
// https://i.ibb.co/M82WvWb/contact-page-overlay.jpg
