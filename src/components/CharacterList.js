import React, { useEffect, useState } from "react";
import axios from 'axios'
import CharacterCard from './CharacterCard'

export default function CharacterList() {
  const [data, setData] = useState([]);

  useEffect(() => {
axios.get("https://rickandmortyapi.com/api/character/")
.then(res => setData(res.data.results))
.catch(err => console.log(err));

  }, []);

  return (
    <section className="character-list">
      {data.map((char, index) => (
      <CharacterCard key={index} char={char} />
      
      ))}
    </section>
  );
}

