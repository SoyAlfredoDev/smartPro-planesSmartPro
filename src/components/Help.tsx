import "./Help.css";

export default function Help() {
  return (
    <div className="plansCta">
      <div className="plansCta__content">
        <div className="plansCta__textWrap">
          <h3 className="plansCta__title">
            ¿No sabes qué plan es el mejor para ti?
          </h3>

          <p className="plansCta__text">
            Te ayudamos a elegir la mejor opción según tu negocio y objetivos.
          </p>
        </div>

        <a href="#contacto" className="plansCta__button">
          Contáctanos
        </a>
      </div>
    </div>
  );
}
