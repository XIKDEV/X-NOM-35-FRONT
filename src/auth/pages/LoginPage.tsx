import '../ui/loginPage.css';

export const LoginPage = () => {
  return (
    <div className="login">
      <form>
        <img
          className="logo"
          src="../../../public/XIK_VerdeTransparente.png"
          alt="XikDev"
        />
        <div className="login-inputs">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Contraseña" />
        </div>
        <button>Iniciar sesión</button>
      </form>
    </div>
  );
};
