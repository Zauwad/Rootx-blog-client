import React from 'react';
import { Link, NavLink } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import useUserRole from '../../../Hooks/useUserRole';

const Navbar = () => {
    const { user, logOut } = useAuth()
    const { role, loading } = useUserRole()

    const navlinks = <>
        <li className='font-bold text-lg'><NavLink to={"/"}>Home</NavLink></li>
        <li className='font-bold text-lg'><NavLink to={"/about"}>About</NavLink></li>
        <li className='font-bold text-lg'><NavLink to={"/contact"}>Contact</NavLink></li>

        {
            role == 'admin' && <li className='text-lg font-bold'><NavLink to={"/addPost"}>Add Post</NavLink></li>
        }
    </>

    const handleLogout = () => {
        logOut()
    }

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navlinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">RootX</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>


            <div className="navbar-end">
                {user ? (
                    <div className="flex items-center gap-3">
                        {/* Profile Picture */}
                        <Link to="/profile">
                            <img
                                src={user.photoURL || "https://i.ibb.co/MBtjqXQ/default-profile.png"}
                                alt="Profile"
                                className="w-10 h-10 rounded-full border-2 border-primary cursor-pointer"
                            />
                        </Link>
                        {/* Logout */}
                        <button onClick={handleLogout} className="btn btn-outline btn-sm">Logout</button>
                    </div>
                )
                    : (
                        <Link to="/login" className="btn bg-white text-black btn-sm">Login</Link>
                    )}
            </div>
        </div>
    );
};

export default Navbar;