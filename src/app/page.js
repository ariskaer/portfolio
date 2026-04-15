// src/app/page.js
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import ThemeToggle from '../components/ThemeToggle';

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
      <BackToTop />
    </>
  );
}