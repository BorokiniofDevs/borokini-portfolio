import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// 1) Render your app first
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 2) Then load Vivian safely (DOM-ready + HMR-safe)
function loadVivianWidget() {
  // Config MUST be set before the script loads
  window.VIVIAN_CHAT_CONFIG = {
    position: "right",
    iconUrl: "https://vivian-chat.netlify.app/vivian-icon.png",
  };

  const src = "https://vivian-chat.netlify.app/vivian-widget.js";

  // Prevent duplicates (Vite HMR)
  if (document.querySelector(`script[data-vivian="1"]`)) return;

  const s = document.createElement("script");
  s.src = src;
  s.async = true;
  s.dataset.vivian = "1";

  // Debug if it fails
  s.onload = () => console.log("[Vivian] widget loaded");
  s.onerror = () => console.error("[Vivian] failed to load:", src);

  document.body.appendChild(s);
}

// Run after DOM is ready (works in Vite dev + prod)
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", loadVivianWidget);
} else {
  loadVivianWidget();
}
