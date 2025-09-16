import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Splash from "./components/Splash";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-[1000px]">
        <Splash />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
