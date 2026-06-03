import { lazy, Suspense } from "react";
import { MotionConfig } from "motion/react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import HashScroll from "./components/shared/HashScroll";
import ChoiceNavigator from "./components/ChoiceNavigator/ChoiceNavigator";

const Consulting = lazy(() => import("./pages/Consulting"));
const Portfolio   = lazy(() => import("./pages/Portfolio"));
const Schedule    = lazy(() => import("./pages/Schedule"));
const Products    = lazy(() => import("./pages/Products"));

function MainLayout() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-white">
      <Navbar />
      <main className="pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <HashScroll />
        <Routes>
          {/* Gateway — no nav/footer */}
          <Route path="/" element={<ChoiceNavigator />} />

          {/* Main layout — nav + footer */}
          <Route element={<MainLayout />}>
            <Route path="/consulting" element={<Suspense fallback={null}><Consulting /></Suspense>} />
            <Route path="/products"   element={<Suspense fallback={null}><Products /></Suspense>} />
            <Route path="/portfolio"  element={<Suspense fallback={null}><Portfolio /></Suspense>} />
            <Route path="/agendar"    element={<Suspense fallback={null}><Schedule /></Suspense>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  );
}
