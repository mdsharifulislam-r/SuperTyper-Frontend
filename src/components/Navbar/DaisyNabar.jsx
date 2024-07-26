import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import UserBox from './ProfileImage/UserBox'
import Logo from './Logo/Logo'
import { useDispatch } from 'react-redux'
import { setLoaderShow } from '../../Store/ProjectSlice'

export default function DaisyNabar({ showBack }) {
    const dispatch = useDispatch()
    
    function Click() {
        dispatch(setLoaderShow(false))
     
    }
    return (
        <div onClick={Click} className="navbar block lg:hidden md:hidden bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu z-50 menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
                        <li><Link to={"/"}>Home</Link></li>
                        <li>
                            <a>Products</a>
                            <ul className="p-2">
                                <li><Link to="/typing-box" >Typing Test</Link></li>
                               
                            </ul>
                        </li>
                        <li><Link to="/leaderboard">Leaderboard</Link></li>
                        <li>
                            <Link to={"/contact"}>Contact Us</Link>
                            <ul className="p-2">
                                <li><a>Feedback</a></li>
                                
                            </ul>
                        </li>
                        
                    </ul>
                </div>
                <a className=""><Logo/></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>
                    <li>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <UserBox/>
            </div>
        </div>
     
    
  )
}
