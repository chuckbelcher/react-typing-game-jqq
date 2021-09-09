import React, { useState, useEffect } from 'react'
import { ScoreLI, ScoresList } from '../styled/HighScores'
import { StyledTitle } from '../styled/Misc'

export default function HighScores() {
    const [highScores, setHighScores] = useState([])

    useEffect(() => {
        const loadHighScores = async () => {
            try {
                const res = await fetch('/.netlify/functions/getHighScores')
                const scores = await res.json();
                setHighScores(scores)
            } catch (error) {
                console.error(error);
            }
        }
        loadHighScores();
    },[]);

    return (
        <div>
            <StyledTitle>HighScores</StyledTitle>
            <ScoresList>
                {highScores.map((score, index) => 
                    <ScoreLI key={score.id}>{index+1} - {score.fields.name} ... {score.fields.score}</ScoreLI>
                )}
            </ScoresList>
        </div>
    )
}
