"use client";
import { useState } from "react";

// CommentSection Component
export default function CommentSection() {
  const [comments, setComments] = useState<string[]>([]); // Manage comments
  const [newComment, setNewComment] = useState<string>(""); // Manage new comment input

  // Function to handle adding a new comment
  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]); // Add the new comment to the list
      setNewComment(""); // Clear the input field
    }
  };

  return (
    <div className="bg-gray-100 mt-8 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Comments</h2>

      {/* Display Existing Comments */}
      <div className="mb-4">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <p
              key={index}
              className="mb-2 text-gray-800 bg-white p-3 rounded-md shadow"
            >
              {comment}
            </p>
          ))
        ) : (
          <p className="text-gray-600">No comments yet. Be the first!</p>
        )}
      </div>

      {/* Add New Comment */}
      <div className="flex items-center gap-4">
        <input
          type="text"
          className="flex-grow px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)} // Update input
        />
        <button
          className="bg-black text-white px-6 py-2 rounded-lg shadow hover:bg-gray-600 transition"
          onClick={handleAddComment} // Add comment
        >
          Post
        </button>
      </div>
    </div>
  );
}
