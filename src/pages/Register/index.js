import { useBreakpoints } from "react-device-breakpoints";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import Register from '../../components/Register';

const Index = () => {
  const device = useBreakpoints();
  return (
    <>
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
