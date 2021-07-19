import { useState } from "react";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: "99999999",
    overflowY: "scroll",
  },
};
Modal.setAppElement("#root");
const ReactModal = ({ handleClose, handleOpen, text }) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    state: "",
    city: "",
    zip: "",
    address: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <Modal
        isOpen={handleOpen}
        onRequestClose={handleClose}
        style={customStyles}
      >
        <form onSubmit={handleSubmit}>
          <h2 className="text-center font-size__2">{text}</h2>
          <hr />
          <div className="form-group">
            <label htmlFor="name">Name</label> <br />
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="form-control input__field mt-1"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile</label> <br />
            <input
              type="number"
              name="mobile"
              placeholder="Enter your mobile"
              className="form-control input__field mt-1"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label> <br />
            <input
              type="text"
              name="state"
              placeholder="Enter your state"
              className="form-control input__field mt-1"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label> <br />
            <input
              type="text"
              name="city"
              placeholder="Enter your city"
              className="form-control input__field mt-1"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="zip">Zip</label> <br />
            <input
              type="text"
              name="zip"
              placeholder="Enter your zip"
              className="form-control input__field mt-1"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label> <br />
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              className="form-control input__field mt-1"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Add Address" className="btn" />
          </div>
        </form>
      </Modal>
    </>
  );
};

export default ReactModal;
