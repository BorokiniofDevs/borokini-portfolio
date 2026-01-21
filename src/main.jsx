import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// ---- Vivian widget: load once globally ----
window.VIVIAN_CHAT_CONFIG = {
  position: "right",
  iconUrl: "https://vivian-chat.netlify.app/vivian-icon.png",
};

// Prevent duplicate injection (HMR-safe)
(function loadVivian() {
  const src = "https://vivian-chat.netlify.app/vivian-widget.js";
  if (document.querySelector(`script[src="${src}"]`)) return;

  const s = document.createElement("script");
  s.src = src;
  s.async = true;
  document.body.appendChild(s);
})();
// ------------------------------------------

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
