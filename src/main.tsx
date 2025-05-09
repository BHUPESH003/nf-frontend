import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "swiper/css";
import "swiper/css/navigation"; // for navigation arrows
import "swiper/css/pagination";
import "swiper/css/scrollbar";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
