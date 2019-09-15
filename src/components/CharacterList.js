import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function CharacterList() {

  const [CharList, setCharList] = useState([])
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios
      .get('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9/')
      .then(res => {
        setCharList(res.data)
        console.log("res", res)
      })
      .catch(err => {
        console.log(err);
      })
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  console.log(CharList, "charList")

  return (
    <section className="character-list grid-view">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
