import { useState, useEffect, useCallback } from "react";
import { Link, useLoaderData } from "react-router-dom";

//loading
import { ColorRing } from "react-loader-spinner";

// image
import Logo from "../images/Logo.png";

// components
import Card from "../components/Card";
import Pagination from "../components/Pagination";

//styles
import GlobalStyles from "../components/styles/Global.styled";
import { WrapperStyled } from "../components/styles/Wrapper.styled";
import { HeaderStyled } from "../components/styles/Header.styled";
import { GridStyled } from "../components/styles/Grid.styled";


export default function Characters(){
  
  const [ready, setReady] = useState(false)
  const [input, setInput] = useState(localStorage.getItem('searchInput') || '');
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchInfo, setFetchInfo] = useState();
  const [dataFromInput, setDataFromInput] = useState(null);
  const dataFromLoader = useLoaderData();
  const characters = dataFromInput || dataFromLoader;

  const search = useCallback(async () => {
    setReady(false);
    localStorage.setItem('searchInput', input);
    const data = await fetchData(`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${input}`);
    setReady(true);
    setFetchInfo(data.info);
    setDataFromInput(sortData(data.results));
  }, [input, pageNumber]);

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
        {ready ? 
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
              }) }
            </GridStyled>
            :
            <ColorRing
                  visible={true}
                  height="100"
                  width="100"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  colors={[
                    "rgb(191, 250, 216)",
                    "rgb(199, 234, 191)",
                    "rgb(245, 245, 238)",
                    "rgb(102, 183, 193)",
                    "#d7e5f3",
                  ]}
            />
        } 
        <Pagination setPageNumber={setPageNumber} fetchInfo={fetchInfo} />
      </WrapperStyled>
    </>
  );
}

//loader
// export const charactersLoader = async () => {
//   //  setReady(true)
//    const data = await fetchData('https://rickandmortyapi.com/api/character');

//    if(!data){
//     throw Error("Could not fetch the characters")
//    }

//    return data;
// }



function sortData(data){
  const sortedData = data.sort(function (a, b) {
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




async function fetchData(url){
   const res = await fetch(url);
   const data = await res.json();
  //  const results = data.results;

   if(!res.ok){
    throw Error("Error")
   }

   return data;
}