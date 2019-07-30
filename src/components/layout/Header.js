import React from 'react';
import { Link } from 'react-router-dom';

// Example of Function-Type Component
function Header() {
    return (
        <header style={headerStyle}>
            <h1>To Do List</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    testDecoration: 'none'
}

export default Header
