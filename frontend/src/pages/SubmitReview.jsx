import { useState } from "react";
import { addReview } from "../api/query/reviewQuery";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";

const SubmitReview = () => {
  const { id } = useParams();
  const [review, setReview] = useState("");

  const mutation = useMutation({
    mutationFn: addReview,
    onSuccess: () => {
      toast.success("Review submitted successfully!");
      setReview("");
    },
    onError: () => {
      toast.error("Failed to submit the review.");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      bookId: id,
      comment: review,
    };

    mutation.mutate({ payload });
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 h-screen">
      <textarea
        placeholder="Write your review..."
        className="border p-2 w-full mb-4"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      ></textarea>
      <button
        type="submit"
        className="bg-[#ff6023] text-white p-2 rounded rounded-lg"
      >
        Submit Review
      </button>
    </form>
  );
};

export default SubmitReview;
