import React from "react"

export default function StudyCard({
  side,
  flipHandler,
  handleNext,
  front,
  back,
  totalCards,
  cardIndex,
}) {
  return (
    <div className="container alert alert-secondary">
      <h5>
        Card {cardIndex + 1} of {totalCards}
      </h5>
      <p>{side === "front" ? front : back}</p>
      <button className="btn btn-secondary" onClick={flipHandler}>
        Flip
      </button>
      {side === "back" ? (
        <button className="btn btn-primary" onClick={handleNext}>
          Next
        </button>
      ) : null}
    </div>
  );
}