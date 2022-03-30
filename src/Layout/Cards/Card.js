import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { deleteCard } from "../../utils/api";

export default function Card({ id, front, back, deckId }) {
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
    <div className="card mb-2">

      <div className="d-flex justify-content-between">
        <p className="text-wrap col text-center">{front}</p>
        <p className="text-right col text-center">{back}</p>
      </div>

      <div className="d-flex justify-content-between">
        <div>
          <Link
            to={`${url}/cards/${id}/edit`}
            className=" ml-2 mb-2 btn btn-secondary"
          >
            <span className="oi oi-pencil"></span> Edit
          </Link>
          
        </div>
        <button onClick={handleDelete} className="mr-2 mb-2 btn btn-danger">
          <span className="oi oi-trash"></span>
        </button>
      </div>
    </div>
  );
}
