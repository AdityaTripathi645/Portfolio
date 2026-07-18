import Icons from "./components/Icons.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Work from "./components/Work.jsx";
import Experience from "./components/Experience.jsx";
import Research from "./components/Research.jsx";
import Now from "./components/Now.jsx";
import Achievements from "./components/Achievements.jsx";
import Community from "./components/Community.jsx";
import Friends from "./components/Friends.jsx";
import PlaceholderSections from "./components/PlaceholderSections.jsx";
import Certificates from "./components/Certificates.jsx";
import Contact from "./components/Contact.jsx";
import GitHub from "./components/GitHub.jsx";
import Footer from "./components/Footer.jsx";
import ChatBot from "./components/ChatBot.jsx";

export default function App() {
  return (
    <>
      <Icons />
      <Nav />
      <main id="top">
        <Hero />
        <About />
        <Skills />
        <Work />
        <Experience />
        <Research />
        <Now />
        <Certificates />
        <Achievements />
        <Community />
        <Friends />
        <GitHub />
        <PlaceholderSections />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </>
  );
}
