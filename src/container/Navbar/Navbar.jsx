import React from "react";
import { images } from "../../constants";
import styled from "styled-components";

const Nav = styled.nav`
  padding: 2rem 2rem;
  background-color: var(--primary-color);

  width: 100%;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavBarLogo = styled.img`
  width: 90px;
  height: 20px;

  @media screen and (min-width: 2000px) {
    width: 180px;
    height: 40px;
  }
`;

const NavUl = styled.ul`
  list-style: none;
  display: flex;

  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavLi = styled.li`
  margin: 0 1rem;
  cursor: pointer;
  flex-direction: column;
`;

const NavLink = styled.a`
  color: var(--gray-color);
  text-decoration: none;
  flex-direction: column;
  text-transform: uppercase;
  font-weight: 500;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: var(--secondary-color);
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavBarLogo src={images.logo} />
      <NavUl>
        {["Home", "About", "Work", "Skills", "Contact"].map((element) => (
          <NavLi key={element}>
            <NavLink href={`#${element}`}>{element}</NavLink>
          </NavLi>
        ))}
      </NavUl>
    </Nav>
  );
};

export default Navbar;
