import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

const HomePage = lazy(() => import("./pages/homePage"));
const Produse = lazy(() => import("./pages/produse"));
const Cos = lazy(() => import("./pages/cos"));
const Produs = lazy(() => import("./pages/produs"));
const Profil = lazy(() => import("./pages/profil"));
const Info = lazy(() => import("./pages/info"));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
      <Suspense fallback={<h1>...loading</h1>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cos" element={<Cos />} />
        <Route path="/produse" element={<Produse />} />
        <Route path="/produse/:id" element={<Produs />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/info/:id" element={<Info />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
      </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;