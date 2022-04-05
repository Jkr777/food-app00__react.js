import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const HomePage = lazy(() => import("./pages/homePage"));
const Produse = lazy(() => import("./pages/produse"));
const Produs = lazy(() => import("./pages/produs"));
const Profil = lazy(() => import("./pages/profil"));

function App() {
  return (
    <BrowserRouter>
      <main className="main">
      <Suspense fallback={<h1>...loading</h1>}>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/produse" exact element={<Produse />} />
        <Route path="/produse/:id" exact element={<Produs />} />
        <Route path="/profil" exact element={<Profil />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
      </Suspense>
      </main>
    </BrowserRouter>
  );
}

export default App;