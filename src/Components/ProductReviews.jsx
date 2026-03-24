import React, { useState } from "react";
import ChevronDown from "../Icons/ChevronDown";
import ChevronUp from "../Icons/ChevronUp";

const ProductReviews = ({ reviews }) => {
  const [showReview, setShowReview] = useState(null);
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>

      <div className="space-y-6">
        {reviews?.map((review, index) => {
          return <ReviewAccordian key={index} review={review} index={index} showReview={showReview} setShowReview={setShowReview} />;
        })}
      </div>
    </div>
  );
};

export default ProductReviews;

const ReviewAccordian = ({ review, index, showReview, setShowReview }) => {
  let { reviewerName, rating, comment } = review;
  return (
    <div key={index} className="border rounded-lg p-4 bg-gray-50">
      <div
        onClick={() => {
          showReview == index ? setShowReview(null) : setShowReview(index);
        }}
        className="flex justify-between"
      >
        <div className="flex">
          <h4 className="font-semibold pr-5">{reviewerName}</h4>
          <span className="text-yellow-500">⭐ {rating}</span>
        </div>
        {index == showReview ? <ChevronUp /> : <ChevronDown />}
      </div>
      {index == showReview && <p className="text-gray-600 mt-2">{comment}</p>}
    </div>
  );
};