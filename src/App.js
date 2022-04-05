import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

const HomePage = lazy(() => import("./pages/homePage"));
const Produse = lazy(() => import("./pages/produse"));
const Cos = lazy(() => import("./pages/cos"));
const Produs = lazy(() => import("./pages/produs"));
const Profil = lazy(() => import("./pages/profil"));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
      <Suspense fallback={<h1>...loading</h1>}>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/cos" exact element={<Cos />} />
        <Route path="/produse" exact element={<Produse />} />
        <Route path="/produse/:id" exact element={<Produs />} />
        <Route path="/profil" exact element={<Profil />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
      </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;