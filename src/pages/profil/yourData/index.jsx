import { useState } from "react";
import Inputs from "../../../components/auth/register";

function YourData() {
  const [registerData, setRegisterData] = useState({
    nume: "",
    prenume: "",
    telefon: "",
    addresa: "",
    email: "",
    parola: ""
  });

  const handleChanges = e =>  setRegisterData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  function handleSubmit(e) {
    e.preventDefault();

  }

  return (
    <div className="auth-container">
      <span className="auth-container__title">Informatii cont</span>

      <form className="auth-form" onSubmit={handleSubmit}>
        <Inputs registerData={registerData} handleRegister={handleChanges} />
        <button className="utility-btn bottom--space-1_5">Modifica</button>
        <button type="button" className="utility-btn bottom--space-1_5">Sterge cont</button>
      </form>
    </div>
  );
}

export default YourData;