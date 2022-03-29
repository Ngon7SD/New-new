import React from "react";

export default function NotEnoughCards(){
return (
    <div>
        <h2>Not Enough Cards.</h2>
        <p>You need at least 3 cards to study. There are {NotEnoughCards.length} cards in this deck.</p>
    </div>
)
}