import { useEffect } from "react";
import NavBar from "./components/Navbar";
import Container from "./components/Container";
import ParticleNetwork from "./components/ParticlesNetwork";
import './utils/i18n';
import "./App.css";

function App() {

  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <ParticleNetwork></ParticleNetwork>
      <Container></Container>
    </>
  );
}

export default App;
