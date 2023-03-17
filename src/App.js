import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

//pages
import Characters from "./pages/Characters";
import CharactersError from "./pages/CharactersError";
import CharacterDetails, { charactersDetailsLoader } from "./pages/CharacterDetails";
import NotFound from "./pages/NotFound";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index element={<Characters />} errorElement={<CharactersError />} />

        <Route
          path="/:id"
          element={<CharacterDetails />}
          loader={charactersDetailsLoader}
          errorElement={<NotFound />}
        />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
