import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

const HomePage = lazy(() => import("./pages/homePage"));
const Produse = lazy(() => import("./pages/produse"));
const Cos = lazy(() => import("./pages/cos"));
const Produs = lazy(() => import("./pages/produs"));
const Auth = lazy(() => import("./pages/auth"));
const Profil = lazy(() => import("./pages/profil"));
const Reset = lazy(() => import("./pages/reset"));
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
        <Route path="/produse/:id" element={<Produse />} />
        <Route path="/produs/:id" element={<Produs />} />
        <Route path="/auth/:id" element={<Auth />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/profil/:id" element={<Profil />} />
        <Route path="/reset" element={<Reset />} />
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