import React from "react";
import { useForm } from "react-hook-form";

const ContactMe = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const res = await fetch("http://localhost:5000/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                alert("Message sent successfully ✅");
                reset();
            } else {
                alert("Failed to send message ❌");
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong!");
        }
    };

    return (
        <div className="max-w-xl mx-auto p-6 shadow-2xl rounded-xl">
            <h2 className="text-4xl font-bold text-center mb-20">Feel Free to Contact Me
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Name */}
                <div>
                    <h1 className="font-bold text-2xl mb-5">Ready To Get Started?</h1>
                    <label className="block font-medium mb-1">Name</label>
                    <input
                        type="text"
                        {...register("name", { required: "Name is required" })}
                        className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>

                {/* Email */}
                <div>
                    <label className="block font-medium mb-1">Email</label>
                    <input
                        type="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                        })}
                        className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                {/* Message */}
                <div>
                    <label className="block font-medium mb-1">Message</label>
                    <textarea
                        {...register("message", { required: "Message is required" })}
                        rows="4"
                        className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600  py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                </button>
            </form>
        </div>
    );
};

export default ContactMe;
