import ReactStars from "react-rating-stars-component";
import Avatar from "../../../assets/images/avatar/avatar.png";
import ReviewForm from "./Review-Form";

const Review = () => {
  return (
    <div className="review__wrapper">
      <div className="row">
        <div className="col-md-6">
          <div className="signle__review">
            <div className="d-flex align-items-center">
              <img src={Avatar} className="img-fluid" alt="avatar" />
              <div className="reviewer__details">
                <h2>MD Younus Ali Akash</h2>
                <span className="d-flex align-items-center">
                  <ReactStars
                    count={5}
                    size={24}
                    value={4.5}
                    isHalf={true}
                    a11y={false}
                    edit={false}
                    activeColor="#ffd700"
                  />{" "}
                  (4.5)
                </span>
                <p>19 July, 2021</p>
              </div>
            </div>
            <div className="description">
              <p>Kashmiri apple it's so very sweet</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <ReviewForm />
        </div>
      </div>
    </div>
  );
};

export default Review;
