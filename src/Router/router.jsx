import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout/RootLayout";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import AddPost from "../Pages/Admin/AddPost/AddPost";
import BlogDetails from "../Pages/BlogsDetails/BlogDetails";




export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            { index: true, Component: Home },
            {
                path: 'about',
                Component: About
            },
            {
                path: "contact",
                Component: Contact
            },
            {
                path: "login",
                Component: Login
            },
            {
                path: "register",
                Component: Register
            },
            {
                path: "addPost",
                Component: AddPost
            },
            {
                path: "/blogs/:id",
                Component: BlogDetails
            },

        ]
    },
]);