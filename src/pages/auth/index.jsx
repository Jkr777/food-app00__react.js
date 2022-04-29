import { useState } from "react";
import Login from "../../components/auth/login";
import Register from "../../components/auth/register";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

function Auth() {
  const { id } = useParams();
  const [logInData, setLogInData] = useState({
    email: "",
    parola: ""
  });

  const [registerData, setRegisterData] = useState({
    nume: "",
    prenume: "",
    telefon: "",
    addresa: "",
    email: "",
    parola: ""
  });

  const handleLogIn = e =>  setLogInData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleRegister = e =>  setRegisterData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  function handleSubmit(e) {
    e.preventDefault();

  }

  return (
    <section className="auth-container">
      <span className="auth-container__title">{id === "logare" ? "Logare" : "Creeaza cont nou"}</span>

      <form className="auth-form" onSubmit={handleSubmit}>
        {id === "logare" ? (
        <>
          <Login logInData={logInData} handleLogIn={handleLogIn} /> 
          <button className="utility-btn bottom--space-1_5">Logare</button>
          <span className="auth-form__info bottom--space-1_5">Client nou ? <Link className="link--info" to="/auth/creeaza-cont">Creeaza cont</Link></span>
          <span className="auth-form__info bottom--space-3">Client nou ? <Link className="link--info" to="/auth/reset">Recupereaza parola</Link></span>
        </>
        ) : (
          <>
            <Register registerData={registerData} handleRegister={handleRegister} />
            <button className="utility-btn">Logare</button>
          </>
        )}
      </form>

    </section>
  );
}

export default Auth;