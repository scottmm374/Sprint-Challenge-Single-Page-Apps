import React, { useEffect, useState } from "react";
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodeList() {

  const [Episode, setEpisode] = useState([])
  

  useEffect(() => {
   
    axios
      .get('https://rickandmortyapi.com/api/episode/1,2,3,4,5,6,7,8/')
      .then(res => {
        setEpisode(res.data)
        
      })
      .catch(err => {
        console.log(err);
      })
  
  }, []);

  console.log(Episode, "episode")

  return (
    <section className="character-list grid-view">
     <h2> {Episode.map((epi) => {
        return (
          <>
            <EpisodeCard key={epi.id}
            name={epi.name}
           airDate={epi.air_date}
           episode={epi.episode} />
          </>
        )
      })}</h2>
    </section>
  );
}