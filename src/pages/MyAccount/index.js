import { useBreakpoints } from "react-device-breakpoints";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { FaKey, FaRegUser, FaTruck } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Footer from "../../components/Footer";
import Nav from "./../../components/Header/Nav";
import Address from "./Address";
import ChangePassword from "./ChangePassword";
import Info from "./Info";
import OrderList from "./OrderList";
import OrderTracking from "./OrderTracking";
const Index = () => {
  // device breakpoints
  const device = useBreakpoints();
  return (
    <>
      {device.isDesktop && <Nav isShow />}
      <div className="myAccount__wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="account__details mt-5">
                <Tabs>
                  <TabList>
                    <div className="account__sidebar">
                      <div className="image">
                        <img
                          src="https://cdn.pixabay.com/photo/2015/01/08/18/30/entrepreneur-593371__340.jpg"
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                      <div className="loggedIn__username">
                        <h2>MD Abul Bashar</h2>
                      </div>
                    </div>
                    <Tab>
                      <p>
                        <FaRegUser /> Personal Information
                      </p>
                    </Tab>
                    <Tab>
                      <p>
                        <AiOutlineUnorderedList /> Order List
                      </p>
                    </Tab>
                    <Tab>
                      <p>
                        <MdLocationOn /> Address
                      </p>
                    </Tab>
                    <Tab>
                      <p>
                        <FaTruck /> Order Tracking
                      </p>
                    </Tab>
                    <Tab>
                      <p>
                        <FaKey /> Change Password
                      </p>
                    </Tab>
                  </TabList>

                  <TabPanel>
                    <div className="panel-content">
                      <Info />
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="panel-content">
                      <OrderList />
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="panel-content">
                      <Address />
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="panel-content">
                      <OrderTracking />
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="panel-content">
                      <ChangePassword/>
                    </div>
                  </TabPanel>
                </Tabs>
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
