import React, {useState, useEffect} from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import {listDecks} from "../utils/api/index";
import DeckList from "./Decks/DeckList" 
import StudyPage from "./Cards/StudyPage";
import CreateDeck from "./Decks/CreateDeck";
import ViewDeck from "./Decks/ViewDeck";
import CreateCards from "./Cards/CreateCards"
import EditCard from "./Cards/EditCard";
import EditDeck from "./Decks/EditDeck";


function Layout() {
  const [ decks , setDecks ] = useState([]);

  useEffect(()=> {
    const ac = new AbortController();
    async function fetchDecks(){
      const response = await listDecks(ac.signal)
      setDecks(response);
    }
  fetchDecks();
  return () => ac.abort()
  }, [])
  return (
    <>
      <Header />

      <div className="container">
        <Switch>
          <Route exact path="/">
            <DeckList decks={decks} />
          </Route>
          <Route path="/decks/:deckId/study">
            <StudyPage />
          </Route>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <CreateCards />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route path="/decks/:deckId">
            <ViewDeck />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
