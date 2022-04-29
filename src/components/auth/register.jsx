function Register({ nume, prenume, telefon, addresa, email, parola, handleRegister }) {
  return (
    <>
      <input 
        className="auth-form__input"
        name="nume"
        type="text"
        minLength="5"
        maxLength="255"
        required
        autoFocus
        autoComplete="nume"
        value={nume}
        onChange={handleRegister}
        placeholder="nume"
      />         
      
      <input 
        className="auth-form__input"
        name="prenume"
        type="text"
        minLength="5"
        maxLength="255"
        required
        autoComplete="prenume"
        value={prenume}
        onChange={handleRegister}
        placeholder="prenume"
      />       
      
      <input 
        className="auth-form__input"
        name="telefon"
        type="text"
        minLength="5"
        maxLength="255"
        required
        autoComplete="telefon"
        value={telefon}
        onChange={handleRegister}
        placeholder="telefon"
      />       
      
      <input 
        className="auth-form__input"
        name="addresa"
        type="text"
        minLength="5"
        maxLength="255"
        required
        autoComplete="addresa"
        value={addresa}
        onChange={handleRegister}
        placeholder="addresa"
      />       
      
      <input 
        className="auth-form__input"
        name="email"
        type="email"
        minLength="5"
        maxLength="255"
        required
        autoComplete="email"
        value={email}
        onChange={handleRegister}
        placeholder="email"
      />     
      
      <input 
        className="auth-form__input bottom--space-3"
        name="parola"
        type="password"
        minLength="5"
        maxLength="255"
        required
        autoComplete="parola"
        value={parola}
        onChange={handleRegister}
        placeholder="parola"
      />

    </>
  );
}

export default Register;