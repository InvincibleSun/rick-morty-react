import { useRouteError } from "react-router-dom";

import { ErrorStyled } from "../components/styles/Error.styled";


export default function CharactersError() {
  const error = useRouteError();

  return(
    <ErrorStyled>
      <h1>Error</h1>
      <p>{error.message}</p>
      <p>Try again later</p>
    </ErrorStyled>
  )
}