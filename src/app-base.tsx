import DeleteIcon from "./assets/delete-icon.svg";
import WarningIcon from "./assets/warning-icon.svg";

import "./app.scss";

const AppBase = () => {
  return (
    <div className="app">
      <h1>Evaluación Técnica Q4 2022</h1>
      <section>
        <h2>Colores</h2>
        <div className="app__color-container">
          <span className="app__color-title">Principal</span>
          <div className="app__color app__color--main"></div>
          <code>#B234B1</code>
        </div>
        <div className="app__color-container">
          <span className="app__color-title">Fondo</span>
          <div className="app__color app__color--background"></div>
          <code>#1C1C1C</code>
        </div>
      </section>
      <section>
        <h2>Íconos</h2>
        <div className="app__icon-container">
          <div className="app__icon-description">
            <img className="app__icon" src={DeleteIcon} alt="Delete icon" />
            <span>Delete icon</span>
          </div>
          <div className="app__icon-description">
            <img className="app__icon" src={WarningIcon} alt="Warning icon" />
            <span className="app__color-title">Warning icon</span>
          </div>
        </div>
      </section>
      <section>
        <h2>API REST</h2>
        <div>
          <a
            href="https://documenter.getpostman.com/view/21329689/2s8YsnYwZr"
            rel="noreferrer"
            target="_blank"
          >
            Documentación de la API REST
          </a>
        </div>
      </section>
      <section>
        <h2>GIFs</h2>
        <div>
          <a
            href="https://tenor.com/es-419/search/avengers-gifs"
            rel="noreferrer"
            target="_blank"
          >
            Página de GIFs
          </a>
        </div>
      </section>
    </div>
  );
};

export default AppBase;
