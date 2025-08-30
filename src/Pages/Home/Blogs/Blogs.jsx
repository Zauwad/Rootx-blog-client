import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await axios.get("http://localhost:5000/posts"); // replace with your API
                setBlogs(res.data);
            } catch (err) {
                console.error("Failed to fetch blogs:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    const handleDiscoverMore = (id) => {
        navigate(`/blogs/${id}`);
    };

    const truncateText = (text, maxLength = 150) => {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + "...";
    };

    if (loading) {
        return <div className="text-center py-10 ">Loading blogs...</div>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12 py-10">
            {/* Left Part: Blogs */}
            <div className="md:col-span-2 space-y-8">
                {blogs.map((blog) => (
                    <div key={blog._id} className="border-b pb-6">
                        {/* Image */}
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-64 object-cover rounded-lg"
                        />

                        {/* Category + Tag */}
                        <div className="mt-3 text-sm text-blue-600 font-semibold">
                            {blog.category} • {blog.tag}
                        </div>

                        {/* Author + Date */}
                        <div className="flex items-center text-sm mt-1">
                            <span className="font-medium">{blog.author}</span>
                            <span className="mx-1">on</span>
                            <span>{blog.date}</span>
                        </div>

                        {/* Title */}
                        <h2 className="text-xl font-bold mt-3 hover:text-blue-700 transition">
                            {blog.title}
                        </h2>

                        {/* Short Description */}
                        <p className="mt-2">{truncateText(blog.desc)}</p>

                        {/* Discover More Button */}
                        <button
                            onClick={() => handleDiscoverMore(blog._id)}
                            className="mt-3 text-blue-600 font-medium hover:underline"
                        >
                            Discover More →
                        </button>
                    </div>
                ))}
            </div>

            {/* Right Part (About Me + others) */}
            <div className="md:col-span-1 space-y-6 w-[80%]">
                <div className="border rounded-lg shadow p-8 space-y-5">
                    <h3 className="text-sm font-bold text-gray-300 ">ABOUT</h3>
                    <div className="flex items-center gap-3">
                        <img src={'/pfp.jpg'} className="rounded-full object-cover size-15" alt="" />
                        <div>
                            <h1 className="font-bold ">RIDWANUL AZIM</h1>
                            <p className="text-gray-300">TechSavy Enthusiast</p>
                        </div>

                    </div>
                    <p className=" text-sm">
                        Hi, I’m Ridwanul Azim — a writer and tech enthusiast passionate about
                        innovation, work culture, and the future of storytelling.
                    </p>
                </div>

                <div className="p-4 border rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">Stay Connected</h3>
                    <ul className="text-sm text-blue-600 space-y-1">
                        <li>
                            <a href="https://x.com/razawad1">Twitter</a>
                        </li>
                        <li>
                            <a href="https://linkedin.com/in/ridwanul-azim-zawad/">LinkedIn</a>
                        </li>
                        <li>
                            <a href="https://github.com/zauwad">GitHub</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
