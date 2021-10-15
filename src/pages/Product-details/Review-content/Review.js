import ReactStars from "react-rating-stars-component";
import Avatar from "../../../assets/images/avatar/avatar.png";
import ReviewForm from "./Review-Form";

const Review = ({ getReview, id }) => {
  console.log(getReview)
  return (
    <div className="review__wrapper">
      <div className="row">
        <div className="col-md-6">
          {getReview &&
            getReview.map((review) => (
              <div className="signle__review">
                <div className="d-flex align-items-center">
                  <img
                    src={review.image ? review.image : Avatar}
                    className="img-fluid"
                    alt="avatar"
                  />
                  <div className="reviewer__details">
                    <h2>{review.name}</h2>
                    <span className="d-flex align-items-center">
                      <ReactStars
                        count={5}
                        size={24}
                        value={review.rating}
                        isHalf={true}
                        a11y={false}
                        edit={false}
                        activeColor="#ffd700"
                      />{" "}
                      ({review.rating})
                    </span>
                    <p>{review.reviewDate}</p>
                  </div>
                </div>
                <div className="description">
                  <p>{review.description}</p>
                </div>
              </div>
            ))}
        </div>
        <div className="col-md-6">
          <ReviewForm id={id} />
        </div>
      </div>
    </div>
  );
};

export default Review;
