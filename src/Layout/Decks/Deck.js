import React from "react";
import { Link, useHistory } from "react-router-dom";
import { deleteDeck } from "../../utils/api";

export default function Deck({ id, name, description, cards }) {

  const studyPagePath = `/decks/${id}/study`
  const history = useHistory();

 const handleDelete = (event) => {
   event.preventDefault();
   if (
     window.confirm("Delete this deck? You will not be able to recover it.")
   ) {
     deleteDeck(id);
     history.go(0);
   }
 };


  return (
    <div className="border">
      <h5>{name}</h5>
      <p>{cards.length} cards</p>
      <p>{description}</p>
      <Link className="btn btn-secondary" to= {`/decks/${id}`}>
        View
      </Link>
      <Link className="btn btn-primary" to={studyPagePath}>
        Study
      </Link>
      <button onClick = {handleDelete} className="btn btn-danger">Delete</button>
    </div>
  );
}
