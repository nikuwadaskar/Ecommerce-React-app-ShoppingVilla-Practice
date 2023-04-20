import React from "react";
import Styles from "./style.module.css";
function WelcomeUI() {
  return (
    <div className={`${Styles.container}`}>
      <div id="hero">
        <p className={`${Styles.p}`} >
          From wardrobe staples to statement pieces, explore our collection and
          discover the perfect fit for your style
        </p>

        <h1 className={`${Styles.heading}`}>
          Hello, <span className={`${Styles.span}`}>Niketan</span> Welcome!
        </h1>

        <p className={`${Styles.p}`}>
          Browse our latest arrivals and find your perfect match. Happy
          shopping, [Name]!
        </p>
      </div>

      <div id="footer" className={`${Styles.footer}`}>
        <div className={`${Styles.line}`}></div>
        <a target="_blank" href="https://www.instagram.com">
          Click to Connect
        </a>
      </div>

      <img
        id="balls"
        className={`${Styles.balls}`}
        src="https://raw.githubusercontent.com/malunaridev/Rocketseat-Explorer/641f4bc4430cd57358d4110be6818f98639d237a/project-01/images/circulos.svg"
        alt="Círculos alaranjados no canto direito inferior da tela"
      />
    </div>
  );
}

export default WelcomeUI;
