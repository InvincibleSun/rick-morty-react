import {useLoaderData, Link } from "react-router-dom";

import { DetailsStyled } from "../components/styles/Details.styled";

import Arrow from "../images/Arrow.svg";



export default function CharacterDetails(){
  const character = useLoaderData();

  // if(!character) {
  //   return <Navigate to={'/not-found'} />;
  // }

  return (
    <DetailsStyled>
      <div>
        <Link to="/">
          <img src={Arrow} alt="arrow" />
          <span>GO BACK</span>
        </Link>
      </div>
      <main>
        <div>
          <img src={character.image} alt="character-pic" />
        </div>
        <h1>{character.name}</h1>
        <p>Information</p>
        <ul>
          <li>
            Gender
            <p>{character.gender}</p>
          </li>
          <li>
            Status
            <p>{character.status}</p>
          </li>
          <li>
            Species
            <p>{character.species}</p>
          </li>
          <li>
            Origin
            <p>{character.origin.name}</p>
          </li>
          <li>
            Type
            <p>{character.type || "Unknown"}</p>
          </li>
        </ul>
      </main>
    </DetailsStyled>
  )
}

export const charactersDetailsLoader = async ({params}) => {
  const {id} = params;
  const res = await fetch('https://rickandmortyapi.com/api/character/' + id);
  const data = await res.json();

  if(!res.ok){
    throw Error("Could not find that character")
    // return null;
  }

  return data;
}