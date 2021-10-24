import { useEffect } from "react";
import { useBreakpoints } from "react-device-breakpoints";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Nav from "../../components/Header/Nav";
import Register from '../../components/Register';

const Index = () => {
  const device = useBreakpoints();
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
    <Helmet>
      <title>Registration - GreenValleyGrocery Shop</title>
    </Helmet>
      {device.isDesktop && <Nav isShow />}
      <div className="login__wrapper py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Register />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
