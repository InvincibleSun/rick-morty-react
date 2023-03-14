import { useState, useEffect, useCallback } from "react";
import { Link, useLoaderData } from "react-router-dom";

// image
import Logo from "../images/Logo.png";

// component
import Card from "../components/Card";

//styles
import GlobalStyles from "../components/styles/Global.styled";
import { WrapperStyled } from "../components/styles/Wrapper.styled";
import { HeaderStyled } from "../components/styles/Header.styled";
import { GridStyled } from "../components/styles/Grid.styled";



//LOADER!!!!!!

export default function Characters(){
  
  const [input, setInput] = useState(localStorage.getItem('searchInput'));
  // const [pageNumber, setPageNumber] = useState(1);
  // let api = `https://rickandmortyapi.com/api/character/?name=${input}`;

  const [dataFromInput, setDataFromInput] = useState(null);
  const dataFromLoader = useLoaderData();
  const characters = dataFromInput || dataFromLoader;

  const search = useCallback(async (e) => {

    localStorage.setItem('searchInput', input);
    const url = `https://rickandmortyapi.com/api/character/?name=${input}`;
    const res = await fetch(url).then(res => res.json());
    const results = res.results;
    const sortedData = results.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    })
    setDataFromInput(sortedData);
  }, [input]);

  useEffect(() => {
    search();
  }, [search]);

  return (
    <>
      <GlobalStyles />
      <WrapperStyled>
        <HeaderStyled>
          <img src={Logo} alt="logo" />
          <form>
            <input onKeyUp={search} onChange={e => setInput(e.target.value)} value={input} type="search" placeholder="Filter by name..." name="character-search" />
          </form>
        </HeaderStyled>
          <GridStyled>
            {characters.map((character) => {
              return (
                <Link to={character.id.toString()} key={character.id}>
                  <Card
                    img={character.image}
                    name={character.name}
                    species={character.species}
                  />
                </Link>
              );
            })}
          </GridStyled>
      </WrapperStyled>
    </>
  );
}

//loader
export const charactersLoader = async () => {
   const res = await fetch('https://rickandmortyapi.com/api/character');
   const data = await res.json();

   if(!res.ok){
    throw Error("Could not fetch the characters")
   }

   const results = data.results;
   const sortedData = results.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
  })

  return sortedData;
}