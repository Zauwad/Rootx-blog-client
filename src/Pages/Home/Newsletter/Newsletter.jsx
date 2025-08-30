import React, { useState } from "react";

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const res = await fetch("http://localhost:5000/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            if (res.ok) {
                setMessage("✅ Subscribed successfully!");
                setEmail("");
            } else {
                setMessage("❌ Failed to subscribe. Try again.");
            }
        } catch (error) {
            console.error(error);
            setMessage("⚠️ Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-lg mx-auto rounded-2xl shadow-2xl p-6 text-center">
            <h2 className="text-2xl font-bold mb-2">Subscribe to our Newsletter</h2>
            <p className="text-gray-600 mb-4">
                Get the latest blogs, tips, and updates delivered to your inbox.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-white text-black px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    {loading ? "Subscribing..." : "Subscribe"}
                </button>
            </form>

            {message && <p className="mt-3 text-sm text-gray-700">{message}</p>}
        </div>
    );
};

export default Newsletter;
