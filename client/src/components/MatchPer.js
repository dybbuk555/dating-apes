import React from 'react'

export default function MatchPer() {
    
    const randomValue = Math.floor(Math.random() * (97 - 40 + 1) + 40);
    
    return (
        <p>{randomValue}%</p>

    )
}
