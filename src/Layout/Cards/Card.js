import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { deleteCard } from "../../utils/api";

export default function Card({id, front, back, deckId}){
  const { url } = useRouteMatch();
  const history = useHistory();

  const handleDelete = (event) => {
    event.preventDefault();
    if (
      window.confirm("Delete this deck? You will not be able to recover it.")
    ) {
      deleteCard(id);
      history.go(0);
    }
  };



    return (
      <div className="border rounded">
        <p className="text-wrap">{front}</p>
        <p className="text-right">{back}</p>
        <Link to = {`${url}/cards/${id}/edit`} className="btn btn-secondary">Edit</Link>
        <button onClick={handleDelete} className="btn btn-danger">
          Delete
        </button>
      </div>
    );
}