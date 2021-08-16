import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <div>
                <Link to="/">Learn.Build.<span>Type.</span></Link>
            </div>
            <ul>
                <li><Link to="/highscores">High Scores</Link></li>
                <li><Link to="/">Login</Link></li>
            </ul>
        </nav>
    )
}
