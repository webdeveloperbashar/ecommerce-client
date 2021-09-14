import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import getDataFromLocalhost from "../../../config/GetLocalhostData";
import { ProductReviewAction } from "../../../Store/Actions/ProductReviewAction";

const ReviewForm = ({ id }) => {
  const user = getDataFromLocalhost("user");
  const [rating, setRating] = useState(0);
  const [reviewer, setReviewer] = useState();
  const handleChange = (e) => {
    setReviewer({
      ...reviewer,
      [e.target.name]: e.target.value,
    });
  };
  // react-redux hooks
  const dispatch = useDispatch();
  // product review submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const review = {
      productId: id,
      name: user?.name,
      username: user?.username,
      image: user?.profile,
      rating,
      ...reviewer,
    };
    dispatch(ProductReviewAction(review));
  };
  return (
    <div className="review__form">
      <h2>Write A Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group rating__field d-flex align-items-center">
          <label htmlFor="rating" className="ratings">
            Your Rating <span className="text-danger">*</span>
          </label>{" "}
          <ReactStars
            count={5}
            onChange={(newRating) => setRating(newRating)}
            size={24}
            isHalf={true}
            activeColor="#ffd700"
          />
        </div>
        <div className="form-group comment__field">
          <label htmlFor="comment">
            Your Review <span className="text-danger">*</span>
          </label>
          <textarea
            name="description"
            type="text"
            cols="30"
            rows="5"
            className="form-control mt-1"
            onChange={handleChange}
            placeholder="Write your review..."
          ></textarea>
        </div>
        <div className="form-group">
          <button type="submit" className="btn w-100">
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
