import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";
import useAuth from "../../../Hooks/useAuth"; // get logged-in user

const AddPost = () => {
    const { user } = useAuth(); // get current user
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosInstance = useAxios();

    const onSubmit = async (data) => {
        try {
            // Add current date and author
            const today = new Date();
            const formattedDate = today.toLocaleString("default", {
                month: "long",
                day: "numeric",
                year: "numeric",
            });

            const postData = {
                ...data,
                author: user?.displayName || "Ridwanul Azim", // auto from auth
                date: formattedDate,
            };

            const response = await axiosInstance.post("/posts", postData);
            console.log(response.data);

            Swal.fire({
                title: "Blog Posted Successfully 🎉",
                icon: "success",
                timer: 2000,
                showConfirmButton: false,
            });

            reset(); // Clear form
        } catch (err) {
            console.error(err);
            Swal.fire({
                title: "Failed to Post ❌",
                text: err.message || "Something went wrong!",
                icon: "error",
                confirmButtonText: "OK",
            });
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-start py-10">
            <div className="card w-full max-w-2xl shadow-2xl bg-base-100 p-6">
                <h2 className="text-2xl font-bold text-center mb-6">Add New Blog Post</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Category */}
                    <div className="form-control">
                        <label className="label"><span className="label-text">Category</span></label>
                        <input
                            type="text"
                            {...register("category", { required: "Category is required" })}
                            className="input input-bordered w-full"
                            placeholder="Business, Technology, etc."
                        />
                        {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
                    </div>

                    {/* Tag */}
                    <div className="form-control">
                        <label className="label"><span className="label-text">Tag</span></label>
                        <input
                            type="text"
                            {...register("tag", { required: "Tag is required" })}
                            className="input input-bordered w-full"
                            placeholder="News, AI, Health, etc."
                        />
                        {errors.tag && <p className="text-red-500 text-sm">{errors.tag.message}</p>}
                    </div>

                    {/* Title */}
                    <div className="form-control">
                        <label className="label"><span className="label-text">Title</span></label>
                        <input
                            type="text"
                            {...register("title", { required: "Title is required" })}
                            className="input input-bordered w-full"
                            placeholder="Blog title"
                        />
                        {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
                    </div>

                    {/* Description */}
                    <div className="form-control">
                        <label className="label"><span className="label-text">Description</span></label>
                        <textarea
                            {...register("desc", { required: "Description is required" })}
                            className="textarea textarea-bordered w-full"
                            placeholder="Short description of the blog"
                            rows={4}
                        ></textarea>
                        {errors.desc && <p className="text-red-500 text-sm">{errors.desc.message}</p>}
                    </div>

                    {/* Image URL */}
                    <div className="form-control">
                        <label className="label"><span className="label-text">Image URL</span></label>
                        <input
                            type="url"
                            {...register("image", { required: "Image URL is required" })}
                            className="input input-bordered w-full"
                            placeholder="https://example.com/image.jpg"
                        />
                        {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
                    </div>

                    {/* Submit */}
                    <button type="submit" className="btn btn-primary w-full mt-4">
                        Post Blog
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddPost;
