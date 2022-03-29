import React, { useState, useEffect } from "react";
import Deck from "./Deck";
import { listDecks } from "../../utils/api";
import { Link } from "react-router-dom";

export default function DeckList() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    const ac = new AbortController();
    async function fetchDecks() {
      try {
        const response = await listDecks(ac.signal);
        setDecks(response);
      } catch (error) {
        if (error.type !== "AbortError") {
          console.log(error);
        }
      }
    }
    fetchDecks();
    return () => ac.abort();
  }, []);
  

  const deckMap = decks.map(({ id, name, description, cards }, index) => (
    <Deck
      key={index}
      id={id}
      name={name}
      description={description}
      cards={cards}
    />
  ));
  return (
    <main>
      <Link className="btn btn-secondary" to="/decks/new">
        + Create Deck
      </Link>
      <div>{deckMap}</div>
    </main>
  );
}
