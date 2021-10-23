import { navigate } from "@reach/router";
import axios from "axios";
import { useEffect, useState } from "react";
import { useBreakpoints } from "react-device-breakpoints";
import { Helmet } from "react-helmet";
import { AiOutlineCloudUpload, AiOutlineUnorderedList } from "react-icons/ai";
import { FaKey, FaRegUser, FaTruck } from "react-icons/fa";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { toast } from "react-toastify";
import Avatar from "../../assets/images/avatar/avatar.png";
import Footer from "../../components/Footer";
import getDataFromLocalhost from "../../config/GetLocalhostData";
import Nav from "./../../components/Header/Nav";
import ChangePassword from "./ChangePassword";
import Info from "./Info";
import OrderList from "./OrderList";
import OrderTracking from "./OrderTracking";
const Index = () => {
  const user = getDataFromLocalhost("user");
  // react hooks
  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user]);
  // user personal information functionalities
  const [upload, setUpload] = useState({
    profile: "",
  });
  // get data from react-redux store
  const [formData, setFormData] = useState({
    name: user?.name,
    phone: user?.phone,
    gender: user?.gender,
    dateofbirth: user?.dateofbirth,
    membersince: user?.memberSince,
    email: user?.Email,
  });
  // profile image upload
  const handleFileUpload = async (e) => {
    const uploadFile = new FormData();
    uploadFile.append("file", e.target.files[0]);
    uploadFile.append("upload_preset", "green_valley");
    const res = await axios.post(
      `https://api.cloudinary.com/v1_1/green-valley-grocery/image/upload`,
      uploadFile
    );
    setUpload({
      profile: res.data.secure_url,
    });
    if (res.data.secure_url) {
      const { data } = await axios.put(
        `https://vast-coast-81152.herokuapp.com/api/userImage/${formData.email}`,
        {
          profile: res.data.secure_url,
        }
      );
      localStorage.setItem("user", JSON.stringify(data));
      toast.success("Image uploaded successfully !", {
        pauseOnHover: false,
      });
    }
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.put(
      `https://vast-coast-81152.herokuapp.com/api/user/${formData.email}`,
      formData
    );
    localStorage.setItem("user", JSON.stringify(data));
    if (data.update === true) {
      toast.success("User update successfully !", {
        pauseOnHover: false,
      });
    }
  };
  // device breakpoints
  const device = useBreakpoints();
  return (
    <>
      <Helmet>
        <title>My Account - GreenValleyGrocery Shop</title>
      </Helmet>
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
                        {!user?.profile && !upload?.profile ? (
                          <img src={Avatar} alt="img" />
                        ) : (
                          <img src={upload?.profile || user?.profile} alt="img" />
                        )}
                        <form encType="multipart/form-data">
                          <label
                            htmlFor="upload-photo"
                            className="upload__photo"
                          >
                            <AiOutlineCloudUpload />
                          </label>
                          <input
                            type="file"
                            onChange={handleFileUpload}
                            name="profile"
                            id="upload-photo"
                          />
                        </form>
                      </div>
                      <div className="loggedIn__username">
                        <h2>{formData.name}</h2>
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
                      <Info
                        formData={formData}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                      />
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="panel-content">
                      <OrderList />
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="panel-content">
                      <OrderTracking />
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="panel-content">
                      <ChangePassword />
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
