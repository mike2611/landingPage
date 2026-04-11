import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import HashScroll from "./components/shared/HashScroll";
import Home from "./pages/Home";

const Portfolio = lazy(() => import("./pages/Portfolio"));

export default function App() {
  return (
    <BrowserRouter>
      <HashScroll />
      <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-white">
        <Navbar />
        <main className="pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Suspense fallback={null}><Portfolio /></Suspense>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
