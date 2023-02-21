import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Log In</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
            </ul>
        </>
    );
}