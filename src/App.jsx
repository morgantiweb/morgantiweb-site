import { useEffect } from "react";
import NavBar from "./components/Navbar";
import Container from "./components/Container";
import ParticleNetwork from "./components/ParticlesNetwork";
import { trackPageView } from "./utils/analytics";
import './utils/i18n';
import "./App.css";
import CookieBanner from "./components/CookiBanner";

function App() {

  const AnalyticsTracker = () => {
    useEffect(() => {
      trackPageView(window.location.pathname);
    }, []);
  
    return null;
  };

  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <>
      <AnalyticsTracker />
      <NavBar></NavBar>
      <ParticleNetwork></ParticleNetwork>
      <Container></Container>
      <CookieBanner />
    </>
  );
}

export default App;
