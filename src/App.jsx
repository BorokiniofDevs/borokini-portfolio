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
    // 1️⃣ Global config (must exist BEFORE script loads)
    window.VIVIAN_CHAT_CONFIG = {
      position: "right",
      iconUrl: "https://vivian-chat.netlify.app/vivian-icon.png",
    };

    // 2️⃣ Prevent duplicate loads (VERY IMPORTANT in React/Vite)
    if (document.getElementById("vivian-widget-script")) return;

    // 3️⃣ Inject the widget script
    const script = document.createElement("script");
    script.id = "vivian-widget-script";
    script.src = "https://vivian-chat.netlify.app/vivian-widget.js";
    script.async = true;

    script.onload = () => {
      console.log("[Vivian] widget loaded");
    };

    script.onerror = () => {
      console.error("[Vivian] failed to load widget");
    };

    document.body.appendChild(script);

    // 4️⃣ Optional cleanup (safe for HMR)
    return () => {
      // Do NOT remove the script on unmount
      // Removing it causes re-injection loops
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
