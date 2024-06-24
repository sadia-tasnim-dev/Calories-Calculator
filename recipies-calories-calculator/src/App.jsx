import { Toaster } from "sonner";
import { AllRecipes } from "./Components/All-Recipes/AllRecipes";
import { Hero } from "./Components/Hero/Hero";
import { Nav } from "./Components/Nav/Nav";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <div className="max-w-[1280px] mx-auto p-8">
        <Nav></Nav>
        <Hero></Hero>
        <AllRecipes></AllRecipes>
        <Toaster richColors position="top-right"></Toaster>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
