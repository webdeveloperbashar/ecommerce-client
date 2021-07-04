import { useBreakpoints } from "react-device-breakpoints";
import Footer from "../../components/Footer";
import Login from "../../components/Login";
import Nav from "../../components/Nav";
const Index = () => {
  // device breakpoints
  const device = useBreakpoints();
  return (
    <>
      {device.isDesktop && <Nav isShow />}
      <div className="login__wrapper py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Login width="48%" heading="Login Form" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
