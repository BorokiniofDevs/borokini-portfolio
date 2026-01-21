import { useEffect } from "react";
import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";

function App() {
  useEffect(() => {
    // 1) Global config (BEFORE script loads)
    window.VIVIAN_CHAT_CONFIG = {
      position: "right",
      iconUrl: "https://vivian-chat.netlify.app/vivian-icon.png",
    };

    // 2) Prevent duplicate load
    if (document.getElementById("vivian-widget")) return;

    // 3) Inject script
    const s = document.createElement("script");
    s.id = "vivian-widget";
    s.src = "https://vivian-chat.netlify.app/vivian-widget.js?v=7";
    s.async = true;

    s.onload = () => console.log("[Vivian] loaded");
    s.onerror = () => console.error("[Vivian] failed to load");

    document.body.appendChild(s);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
