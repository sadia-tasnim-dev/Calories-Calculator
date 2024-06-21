import { Toaster } from "sonner";
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
        <Toaster richColors position="top-right"></Toaster>
      </div>
    </>
  );
}

export default App;
