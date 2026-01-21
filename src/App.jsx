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
    // 1) Set config
    window.VIVIAN_CHAT_CONFIG = {
      position: "right",
      iconUrl: "https://vivian-chat.netlify.app/vivian-icon.png",
    };

    // 2) Load widget script once
    const existing = document.querySelector('script[src="https://vivian-chat.netlify.app/vivian-widget.js"]');
    if (existing) return;

    const s = document.createElement("script");
    s.src = "https://vivian-chat.netlify.app/vivian-widget.js";
    s.async = true;
    document.body.appendChild(s);

    return () => {
      // optional cleanup if you ever unmount App (rare)
    };
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
