import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

//loading
import { ColorRing } from "react-loader-spinner";

//firebase
import { firebaseAuth } from "../firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";

// image
import Logo from "../images/Logo.png";

// components
import Card from "../components/Card";
import Pagination from "../components/Pagination";

//styles
import GlobalStyles from "../styles/Global.styled";
import { WrapperStyled } from "../styles/Wrapper.styled";
import { HeaderStyled } from "../styles/Header.styled";
import { GridStyled } from "../styles/Grid.styled";

export default function Characters() {
  const [user, setUser] = useState(undefined);
  const [ready, setReady] = useState(false);
  const [input, setInput] = useState(localStorage.getItem("searchInput") || "");
  const [pageNumber, setPageNumber] = useState(localStorage.getItem("pageNumber") ?? 1);
  const [fetchInfo, setFetchInfo] = useState();
  const [characters, setCharacters] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) setUser(currentUser);
      else navigate("/auth");
    });
  }, [navigate]);

  const fetching = useCallback(async () => {
    setReady(false);
    localStorage.setItem("searchInput", input);
    const data = await fetchData(
      `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${input}`
    );
    setReady(true);
    setFetchInfo(data.info);
    setCharacters(sortData(data.results));
  }, [input, pageNumber]);

  useEffect(() => {
    fetching();
  }, [fetching]);

  async function fetchData(url) {
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (!res.ok) {
        throw Error("Could not fetch the characters");
      }

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  function sortData(data) {
    const sortedData = data.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    return sortedData;
  }

  return (
    <>
      <GlobalStyles />
      <WrapperStyled>
        <HeaderStyled>
          <div>
            <h1>Welcome {user?.displayName}</h1>
            <button onClick={() => signOut(firebaseAuth)}>Log Out</button>
          </div>
          <img src={Logo} alt="logo" />
          <form>
            <input
              onKeyUp={fetching}
              onChange={(e) => {
                setPageNumber(1);
                localStorage.setItem("pageNumber", 1);
                setInput(e.target.value);
              }}
              value={input}
              type="search"
              placeholder="Filter by name..."
              name="character-search"
            />
          </form>
        </HeaderStyled>
        {ready ? (
          <GridStyled>
            {characters.map((character) => {
              return (
                <Link to={character.id.toString()} key={character.id}>
                  <Card img={character.image} name={character.name} species={character.species} />
                </Link>
              );
            })}
          </GridStyled>
        ) : (
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
        )}
        <Pagination
          pageNumber={pageNumber - 1}
          onPageChange={(data) => {
            const newPage = data.selected + 1;
            localStorage.setItem("pageNumber", newPage);
            console.log(data, newPage);
            setPageNumber(newPage);
          }}
          fetchInfo={fetchInfo}
        />
      </WrapperStyled>
    </>
  );
}
