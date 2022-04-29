function Login({ email, parola, handleLogIn }) {
  return (
    <>
      <input 
        className="auth-form__input"
        name="email"
        type="email"
        minLength="5"
        maxLength="255"
        required
        autoFocus
        autoComplete="email"
        value={email}
        onChange={handleLogIn}
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
        onChange={handleLogIn}
        placeholder="parola"
      />
    </>
  );
}

export default Login;