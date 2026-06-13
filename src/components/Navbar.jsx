import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 clamp(1.5rem, 4vw, 3rem);
  height: 68px;
  background: ${({ $scrolled }) => $scrolled ? 'rgba(245,245,240,0.95)' : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => $scrolled ? 'blur(12px)' : 'none'};
  border-bottom: ${({ $scrolled, theme }) => $scrolled ? `1px solid ${theme.colors.border}` : 'none'};
  transition: all 0.3s ease;
`;

const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.35rem;
  font-weight: 600;
  color: ${({ $scrolled, theme }) => $scrolled ? theme.colors.greenDark : '#fff'};
  letter-spacing: -0.02em;
  transition: color 0.3s ease;

  span {
    color: ${({ $scrolled, theme }) => $scrolled ? theme.colors.greenLight : theme.colors.greenMint};
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ $scrolled, $active, theme }) =>
    $active
      ? $scrolled ? theme.colors.greenPrimary : theme.colors.greenMint
      : $scrolled ? theme.colors.textSecondary : 'rgba(255,255,255,0.85)'
  };
  transition: color 0.2s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: ${({ $active }) => $active ? '100%' : '0'};
    height: 2px;
    background: ${({ $scrolled, theme }) => $scrolled ? theme.colors.greenPrimary : theme.colors.greenMint};
    transition: width 0.2s ease;
  }

  &:hover {
    color: ${({ $scrolled, theme }) => $scrolled ? theme.colors.greenPrimary : '#fff'};
    &::after { width: 100%; }
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ShopBtn = styled(Link)`
  padding: 0.5rem 1.25rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ $scrolled, theme }) => $scrolled ? theme.colors.greenPrimary : 'rgba(255,255,255,0.15)'};
  color: ${({ $scrolled }) => $scrolled ? '#fff' : '#fff'};
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid ${({ $scrolled, theme }) => $scrolled ? 'transparent' : 'rgba(255,255,255,0.4)'};
  transition: all 0.2s ease;
  backdrop-filter: blur(4px);

  &:hover {
    background: ${({ $scrolled, theme }) => $scrolled ? theme.colors.greenDark : 'rgba(255,255,255,0.25)'};
    transform: translateY(-1px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const Hamburger = styled.button`
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 4px;

  span {
    display: block;
    width: 22px;
    height: 2px;
    background: ${({ $scrolled }) => $scrolled ? '#1a1a1a' : '#fff'};
    border-radius: 2px;
    transition: background 0.3s;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 68px;
  left: 0;
  right: 0;
  background: rgba(245,245,240,0.97);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1.5rem clamp(1.5rem, 4vw, 3rem);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transform: ${({ $open }) => $open ? 'translateY(0)' : 'translateY(-110%)'};
  transition: transform 0.3s ease;
  z-index: 99;
`;

const MobileLink = styled(Link)`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 0.5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child { border-bottom: none; }
`;

const navItems = [
  { label: 'Plant Guide', path: '/plant-guide' },
  { label: 'About', path: '/about' },

];

export default function Navbar({ scrolled }) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <Nav $scrolled={scrolled}>
        <Logo to="/" $scrolled={scrolled}>
          🌿 Leaf<span>&</span>Loom
        </Logo>
        <NavLinks>
          {navItems.map(({ label, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                $scrolled={scrolled}
                $active={location.pathname === path}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </NavLinks>
        <NavRight>
          <ShopBtn to="/shop" $scrolled={scrolled}>Browse Plants</ShopBtn>
          <Hamburger $scrolled={scrolled} onClick={() => setMobileOpen(v => !v)}>
            <span /><span /><span />
          </Hamburger>
        </NavRight>
      </Nav>
      <MobileMenu $open={mobileOpen}>
        {navItems.map(({ label, path }) => (
          <MobileLink key={path} to={path} onClick={() => setMobileOpen(false)}>
            {label}
          </MobileLink>
        ))}
      </MobileMenu>
    </>
  );
}
