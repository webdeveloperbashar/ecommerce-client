import React from "react";
import ReactStars from "react-rating-stars-component";

const ReviewForm = () => {
  const ratingChanged = (newRating) => {
    alert(`You have rating ${newRating}`);
  };
  const handleChange = (e) => {};
  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  return (
    <div className="review__form">
      <h2>Write A Review</h2>
      <h5>Be the first to review "Kashmiri fruits "</h5>
      <form onSubmit={handleSubmit}>
        <div className="form-group rating__field d-flex align-items-center">
          <label htmlFor="rating" className="ratings">
            Your Rating <span className="text-danger">*</span>
          </label>{" "}
          <ReactStars
            count={5}
            onChange={ratingChanged}
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
            name="review"
            cols="30"
            rows="5"
            className="form-control mt-1"
            onChange={handleChange}
            placeholder="Write your review..."
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="name">
            Name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            name="name"
            className="form-control input__field mt-1"
            onChange={handleChange}
            placeholder="Your name"
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn w-100">Submit Review</button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
