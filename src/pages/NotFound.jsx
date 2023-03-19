import { Link, useRouteError } from "react-router-dom";

import { ErrorStyled } from "../styles/Error.styled";

export default function NotFound() {
  const error = useRouteError();
  return (
    <ErrorStyled>
      <h1>Page not found!</h1>
      <p>Ooops, something went wrong...</p>
      <p>{error.message}</p>

      <p>
        Go to the <Link to="/">Homepage</Link>.
      </p>
    </ErrorStyled>
  );
}
