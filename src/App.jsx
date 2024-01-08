import Companies from "./components/Companies/Companies";
import Features from "./components/Features/Features";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Hero />
      <Companies />
      <Features />
    </>
  );
}

export default App;
