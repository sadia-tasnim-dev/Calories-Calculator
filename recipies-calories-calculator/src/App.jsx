import "./App.css";
import { AllRecipes } from "./Components/All-Recipes/AllRecipes";

import { Hero } from "./Components/Hero/Hero";
import { Nav } from "./Components/Nav/Nav";

function App() {
  return (
    <>
      <Nav></Nav>
      <div>
        <Hero></Hero>
        <AllRecipes></AllRecipes>
      </div>
    </>
  );
}

export default App;
