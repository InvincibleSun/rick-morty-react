import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

//pages + loaders
import Characters, { charactersLoader } from "./pages/Characters";
import CharactersError from "./pages/CharactersError";
import CharacterDetails, { charactersDetailsLoader } from "./pages/CharacterDetails";
import NotFound from "./pages/NotFound";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          index
          element={<Characters />}
          // loader={charactersLoader}
          errorElement={<CharactersError />}
        />
        {/* <Route path="/not-found" element={<NotFound />} /> */}

        <Route
          path="/:id"
          element={<CharacterDetails />}
          loader={charactersDetailsLoader}
          errorElement={<NotFound />}
        />

        {/* <Route path="*" element={<NotFound />} /> */}
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
