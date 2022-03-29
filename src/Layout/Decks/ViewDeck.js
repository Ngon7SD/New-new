import React, {useEffect, useState} from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import CardsList from "../Cards/CardsList";
import { readDeck, deleteDeck, updateDeck } from "../../utils/api";

export default function ViewDeck(){
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
     console.log(response)
   }
   fetchlistDecks();
   return () => ac.abort();
 }, [deckId]);

 
  const handleDelete = (event) => {
    event.preventDefault();
    if(window.confirm(
      "Delete this deck? You will not be able to recover it."
      )
    ) {
      deleteDeck(deckId)
      history.push("/")
    }
  }



  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active">{deck.name}</li>
        </ol>
      </nav>
      <h1>{deck.name}</h1>
      <p>{deck.description}</p>
      <Link to ={`/decks/${deckId}/edit`} className="btn btn-secondary">
        Edit
      </Link>
      <Link className="btn btn-primary" to={studyPagePath}>
        Study
      </Link>
      <Link to={addCardsPath} className="btn btn-primary">
        Add Cards
      </Link>
      <button onClick={handleDelete} className="btn btn-danger">
        Delete
      </button>
      <div>
        <CardsList />
      </div>
    </div>
  );
}
