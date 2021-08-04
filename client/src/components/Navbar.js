import React from 'react'
import { NavLink } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
    return (
        <>
            <nav>
                <input type="checkbox" id="check" />
                <label for="check" className="checkbtn">
                    <i className="fas fa-bars"></i>
                </label>
                <label className="logo">Anonymous Chat</label>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/create">Create</NavLink></li>
                    <li><NavLink to="/show">Display</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar

