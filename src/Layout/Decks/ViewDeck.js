import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import CardsList from "../Cards/CardsList";
import { readDeck, deleteDeck } from "../../utils/api";

export default function ViewDeck() {
  const params = useParams();
  const deckId = params.deckId;
  const history = useHistory();
  const [deck, setDeck] = useState({});
  const studyPagePath = `/decks/${deckId}/study`;
  const addCardsPath = `/decks/${deckId}/cards/new`;

  useEffect(() => {
    const ac = new AbortController();
    async function fetchlistDecks() {
      const response = await readDeck(deckId, ac.signal);
      setDeck(response);
      console.log(response);
    }
    fetchlistDecks();
    return () => ac.abort();
  }, [deckId]);

  const handleDelete = (event) => {
    event.preventDefault();
    if (
      window.confirm("Delete this deck? You will not be able to recover it.")
    ) {
      deleteDeck(deckId);
      history.push("/");
    }
  };

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home"></span> Home
            </Link>
          </li>
          <li className="breadcrumb-item active">{deck.name}</li>
        </ol>
      </nav>
      <h1>{deck.name}</h1>
      <p>{deck.description}</p>
      <div className="d-flex justify-content-between">
        <div>
          <Link
            to={`/decks/${deckId}/edit`}
            className=" mr-2 btn btn-secondary"
          >
            <span className="oi oi-pencil"></span> Edit
          </Link>
          <Link className=" mr-2 btn btn-primary" to={studyPagePath}>
            <span className="oi oi-book"></span> Study
          </Link>
          <Link to={addCardsPath} className=" mr-2 btn btn-primary">
            <span className="oi oi-plus"></span> Add Cards
          </Link>
        </div>
        <button onClick={handleDelete} className="mr-2 btn btn-danger">
          <span className="oi oi-trash"></span>
        </button>
      </div>

      <div>
        <CardsList />
      </div>
    </div>
  );
}
