import React from "react";
import { Link } from "react-router-dom";

export default function DeckForm({form, handleCancel, handleChange, handleSubmit, title}) {
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home"></span> Home
            </Link>
          </li>
          <li className="breadcrumb-item active">Create Deck</li>
        </ol>
      </nav>
      <h2>{title} Deck</h2>
      <div className="form-group">
        <form handleSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <div>
            <input
              placeholder="Deck Name"
              className="form-control"
              id="name"
              rows="3"
              name="name"
              type="text"
              onChange={handleChange}
              value={form.name}
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <div>
              <textarea
                name="description"
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Brief description of the deck"
                onChange={handleChange}
                value={form.description}
              ></textarea>
            </div>
          </div>

          <button
            className="btn btn-secondary"
            type="button"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="btn btn-primary"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
