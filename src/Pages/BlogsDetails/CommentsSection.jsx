import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";

const CommentsSection = () => {
    const { id: blogId } = useParams();
    const { user } = useAuth();
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    // Fetch comments
    useEffect(() => {
        const fetchComments = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/comments/${blogId}`);
                setComments(res.data);
            } catch (err) {
                console.error("Failed to fetch comments:", err);
            }
        };
        fetchComments();
    }, [blogId]);

    // Submit new comment
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!newComment.trim()) return;

        try {
            const res = await axios.post("http://localhost:5000/comments", {
                blogId,
                author: user?.displayName || "Anonymous",
                email: user?.email || "guest@example.com",
                comment: newComment,
            });

            setComments([{ ...res.data, comment: newComment }, ...comments]); // update UI
            setNewComment("");
            window.location.reload();
        } catch (err) {
            console.error("Failed to post comment:", err);
        }
    };

    return (
        <div className="mt-6">
            <h2 className="text-xl font-semibold mb-3">Comments</h2>

            {/* Comment Form */}
            {user ? (
                <form onSubmit={handleSubmit} className="mb-4">
                    <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="w-full p-2 border rounded-md mb-2"
                        placeholder="Write a comment..."
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded-md"
                    >
                        Post Comment
                    </button>
                </form>
            ) : (
                <p className="text-gray-600 mb-4">Login to post a comment.</p>
            )}

            {/* Comments List */}
            <div className="space-y-3">
                {comments.length > 0 ? (
                    comments.map((c) => (
                        <div
                            key={c._id}
                            className="p-3 border rounded-md bg-gray-50 shadow-sm"
                        >
                            <p className="text-sm text-gray-700">{c.comment}</p>
                            <div className="text-xs text-gray-500 mt-1">
                                By <span className="font-medium">{c.author}</span> •{" "}
                                {new Date(c.date).toLocaleString()}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No comments yet. Be the first one!</p>
                )}
            </div>
        </div>
    );
};

export default CommentsSection;
