import React from "react";

export default function CharacterCard({name, species, gender}) {
  return(
    <>
    <span>{name}</span>
    <span>{species}</span>
    <span>{gender}</span>
    </>
  )
}
