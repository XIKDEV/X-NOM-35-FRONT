import '../ui/emailLayout.css';

export const EmailLayout = () => {
  return (
    <div className="email-layout flex-column-center">
      <img src="../../../public/XIK_VerdeTransparente.png" alt="XikDev" />
      <h1>XikDev</h1>

      <div className="email-text flex-column-center">
        <p>
          Bienvenido! <br />
          Por medio de este correo se comparte de manera automática la
          contraseña correspondiente para entrar al sistema de Nom-035. <br />
          Ingresa a [anexar link] o da click al siguiente botón para dirigirte a
          la página e iniciar sesión.
        </p>

        <div className="password flex-column-center">
          <p>Contraseña:</p>
          <p>AKJC64cdsK5!</p>
        </div>

        <a>Nom-035</a>

        <p>
          <span>
            Este mensaje es generado de manera automática, favor de no responder
            directamente este correo, para realizar alguna consulta o tratar
            algún tema, enviar correo a xikdev@gmail.com
          </span>
        </p>
      </div>
    </div>
  );
};
