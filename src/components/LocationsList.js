import React, { useEffect, useState } from "react";
import axios from 'axios'
import LocationCard from './LocationCard';

export default function LocationsList() {
  const [Location, setLocation] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios
      .get('https://rickandmortyapi.com/api/location/1,2,3,4,5,6,7,8')
      .then(res => {
        setLocation(res.data)
        console.log("res", res)
      })
      .catch(err => {
        console.log(err, "err");
      })
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  console.log(Location, "location")

  return (
    <section className="character-list grid-view">
      <h2> {Location.map((place) => {
        return (
          <>
            <LocationCard key={place.id}
              name={place.name}
              type={place.type}
              dimension={place.dimension} />
          </>
        )
      })}</h2>
    </section>
  );
}
