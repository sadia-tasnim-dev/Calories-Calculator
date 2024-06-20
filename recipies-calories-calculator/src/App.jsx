import "./App.css";
import { AllRecipes } from "./Components/All-Recipes/AllRecipes";

import { Hero } from "./Components/Hero/Hero";
import { Nav } from "./Components/Nav/Nav";
import { WantCook } from "./Components/WantCook/WantCook";

function App() {
  return (
    <>
      <Nav></Nav>
      <div>
        <Hero></Hero>
        <WantCook></WantCook>
        <AllRecipes></AllRecipes>
      </div>
    </>
  );
}

export default App;
