import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: var(--accent-color);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px 15px 255px 15px / 255px 15px 15px 225px;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.1);
  margin: 1rem 1rem 0.5rem 1rem;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
    transform: scale(1.1);
  }
  transition: transform 0.2s;
`;

const Icon = styled.img`
  width: 50px;
  height: auto;
  border-radius: 50%;
  border: 2px solid white;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Icon src="/corgi_icon.png" alt="Corgi icon" />
      <Nav>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#stories">Stories</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
