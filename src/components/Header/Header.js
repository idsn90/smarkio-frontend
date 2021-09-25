import React from "react";
import { NavLink } from "react-router-dom";

import { SmarkIOLogo } from "../../assets";

import { Container, Nav } from "./Header.styles";

const Header = () => {
  return (
    <Container>
      <img alt="smarkio_logo" src={SmarkIOLogo} />

      <Nav>
        <NavLink to="/home">Início</NavLink>
        <NavLink to="/most">Mais buscados</NavLink>
      </Nav>
    </Container>
  );
};

export default Header;
