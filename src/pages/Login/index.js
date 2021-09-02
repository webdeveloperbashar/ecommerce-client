import { useBreakpoints } from "react-device-breakpoints";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Nav from "../../components/Header/Nav";
import Login from "../../components/Login";
const Index = () => {
  // device breakpoints
  const device = useBreakpoints();
  return (
    <>
    <Helmet>
      <title>Login - GreenValleyGrocery Shop</title>
    </Helmet>
      {device.isDesktop && <Nav isShow />}
      <div className="login__wrapper py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Login width="48%" heading="Log In" isShow />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
