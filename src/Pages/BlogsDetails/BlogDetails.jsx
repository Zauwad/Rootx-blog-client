import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import CommentsSection from "./CommentsSection";

const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/posts/${id}`);
                setBlog(res.data);
            } catch (err) {
                console.error("Failed to fetch blog:", err);
                alert("Blog not found or server error");
                navigate("/"); // Redirect home if blog not found
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id, navigate]);

    if (loading) {
        return <div className="text-center py-10 text-gray-500">Loading blog...</div>;
    }

    if (!blog) return null;

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12 py-10">
            <div className="md:col-span-2 max-w-4xl mx-auto px-6 md:px-12 py-10">
                {/* Image */}
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-96 object-cover rounded-lg mb-6"
                />

                {/* Category + Tag */}
                <div className="text-sm text-blue-600 font-semibold mb-2">
                    {blog.category} • {blog.tag}
                </div>

                {/* Author + Date */}
                <div className="flex items-center text-sm  mb-4">
                    <span className="font-medium">{blog.author}</span>
                    <span className="mx-1">on</span>
                    <span>{blog.date}</span>
                </div>

                {/* Title */}
                <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

                {/* Full Description */}
                <p className=" leading-relaxed">{blog.desc}</p>

                {/* Comments */}
                <CommentsSection />
            </div>


            {/* Right Part (About Me + others) */}
            <div className="md:col-span-1 space-y-6">
                <div className="p-4 border rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">About Me</h3>
                    <p className="text-gray-600 text-sm">
                        Hi, I’m Ethan — a writer and tech enthusiast passionate about
                        innovation, work culture, and the future of storytelling.
                    </p>
                </div>

                <div className="p-4 border rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">Stay Connected</h3>
                    <ul className="text-sm text-blue-600 space-y-1">
                        <li>
                            <a href="#">Twitter</a>
                        </li>
                        <li>
                            <a href="#">LinkedIn</a>
                        </li>
                        <li>
                            <a href="#">GitHub</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
