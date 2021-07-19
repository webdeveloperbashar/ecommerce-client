import { FaStar } from "react-icons/fa";
import Avatar from "../../../assets/images/avatar/avatar.png";

const Review = () => {
  return (
    <div className="review__wrapper">
      <div className="signle__review d-flex align-items-center">
        <img src={Avatar} className="img-fluid" alt="avatar" />
        <div className="reviewer__details">
          <h2>Abul Bashar</h2>
          <span className="text-warning">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </span>
          <p>19 July, 2021</p>
        </div>
      </div>
      <div className="description">
        <p>
         Kashmiri fruits it's so very sweet
        </p>
      </div>
    </div>
  );
};

export default Review;
