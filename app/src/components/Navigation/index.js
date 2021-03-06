import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Icons from '@fortawesome/fontawesome-free-solid';
import PropTypes from 'prop-types';

import './style.css';

const Navigation = props => (
  <div className={`navigation ${props.openMenuMobile && 'navigation--open'}`}>
    <div className="container">
      <ul className="navigation__list nav navbar-nav">
        <li className="navigation__item">
          <a href="#/" className="navigation__item__link">
            <FontAwesomeIcon icon={Icons.faHome} /> Início
          </a>
        </li>
        <li className="navigation__item">
          <a href="#/usuarios" className="navigation__item__link">
            <FontAwesomeIcon icon={Icons.faUserMd} />  Usuários
          </a>
        </li>
        <li className="navigation__item">
          <a href="#/proprietarios" className="navigation__item__link">
            <FontAwesomeIcon icon={Icons.faUsers} /> Proprietários
          </a>
        </li>
        <li className="navigation__item">
          <a href="#/animais" className="navigation__item__link">
            <FontAwesomeIcon icon={Icons.faPaw} /> Animais
          </a>
        </li>
        <li className="navigation__item">
          <a href="#/vacinacao" className="navigation__item__link">
            <FontAwesomeIcon icon={Icons.faMedkit} /> Vacinas
          </a>
        </li>
        <li className="navigation__item">
          <button onClick={props.onLogoutClick} className="navigation__item__link">
            <FontAwesomeIcon icon={Icons.faSignOutAlt} /> Sair
          </button>
        </li>
      </ul>
    </div>
  </div>
);

Navigation.propTypes = {
  onLogoutClick: PropTypes.func.isRequired,
  openMenuMobile: PropTypes.bool.isRequired,
};

export default Navigation;
