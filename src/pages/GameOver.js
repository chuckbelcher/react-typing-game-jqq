import React from 'react'
import { useScore } from '../context/scoreContext'
import { StyledLink } from '../styled/Navbar';

export default function GameOver({ history }) {
    const [score] = useScore();

    if (score === -1) {
        history.push('/');
    }

    return (
        <div>
            <h1>GameOver</h1>
            <p> Your score is {score} </p>
            <StyledLink to="/">Go Home</StyledLink>
            <StyledLink to="/game">Play Again</StyledLink>
        </div>
    )
}
