import React, {useEffect, useState } from 'react'
import { useScore } from '../context/scoreContext'
import { StyledLink } from '../styled/Navbar';
import { StyledCharacter } from '../styled/Game'
import { StyledTitle } from '../styled/Misc'

export default function GameOver({ history }) {
    const [score] = useScore();
    const [scoreMessage, setScoreMessage] = useState("")

    if (score === -1) {
        history.push('/');
    }

    useEffect(() => {
        try {
            const options = {
                method: "POST",
                body: JSON.stringify({
                    name: "hardCoded",
                    score
                })
            }
            const saveHighScore = async() => {
                const res = await fetch('/.netlify/functions/saveHighScore', options);
                const data = await res.json();
                if (data.id) {
                    setScoreMessage("Congratulations on getting a high score")
                } else {
                    setScoreMessage("You did not get a high score")
                }
            }
            saveHighScore();
        } catch (error) {
            console.error(error);
        }
    }, [score])

    return (
        <div>
            <StyledTitle>GameOver</StyledTitle>
            <h2>{scoreMessage}</h2>
            <StyledCharacter> {score} </StyledCharacter>
            <div>
                <StyledLink to="/">Go Home</StyledLink>
            </div>
            <div>
                <StyledLink to="/game">Play Again</StyledLink>
            </div>
        </div>
    )
}
