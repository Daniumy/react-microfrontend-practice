import React, { useEffect } from 'react'
import placeCards from "mf_cards/placeCards"
import { Error } from "../components/Error";

const PersonajesPage = () => {

  const cardsRef = React.useRef(null);

  useEffect(() => {
    placeCards(cardsRef.current);
  }, []);

  return <>
    <Error>
      <div ref={cardsRef}></div>
    </Error>
  </>
}

export default PersonajesPage