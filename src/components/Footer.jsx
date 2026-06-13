import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.greenDark};
  color: rgba(255,255,255,0.7);
  padding: 3.5rem clamp(1.5rem, 5vw, 4rem) 2rem;
`;

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 2.5rem;
  margin-bottom: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const Brand = styled.div``;

const BrandName = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.4rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.75rem;

  span { color: ${({ theme }) => theme.colors.greenLight}; }
`;

const BrandDesc = styled.p`
  font-size: 0.875rem;
  line-height: 1.65;
  max-width: 280px;
  margin-bottom: 1.25rem;
`;

const ColTitle = styled.h4`
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 1.1rem;
`;

const ColLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
`;

const ColLink = styled(Link)`
  font-size: 0.875rem;
  color: rgba(255,255,255,0.6);
  transition: color 0.2s;

  &:hover { color: ${({ theme }) => theme.colors.greenLight}; }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255,255,255,0.1);
  margin-bottom: 1.5rem;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Copyright = styled.p`
  font-size: 0.8rem;
  color: rgba(255,255,255,0.4);
`;

const BottomLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const BottomLink = styled(Link)`
  font-size: 0.8rem;
  color: rgba(255,255,255,0.4);
  transition: color 0.2s;
  &:hover { color: rgba(255,255,255,0.7); }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Inner>
        <Grid>
          <Brand>
            <BrandName>🌿 Leaf<span>&</span>Loom</BrandName>
            <BrandDesc>
              Your complete guide to indoor plant care. We help you find, grow, and love the perfect plants for your home and lifestyle.
            </BrandDesc>
          </Brand>
          <div>
            <ColTitle>Plant Guide</ColTitle>
            <ColLinks>
              <li><ColLink to="/guide">Beginner Plants</ColLink></li>
              <li><ColLink to="/guide">Air Purifiers</ColLink></li>
              <li><ColLink to="/guide">Low-Maintenance</ColLink></li>
              <li><ColLink to="/guide">Office Plants</ColLink></li>
              <li><ColLink to="/guide">Pet-Safe Plants</ColLink></li>
            </ColLinks>
          </div>
          <div>
            <ColTitle>Shop</ColTitle>
            <ColLinks>
              <li><ColLink to="/shop">All Plants</ColLink></li>
              <li><ColLink to="/shop">Pots & Planters</ColLink></li>
              <li><ColLink to="/shop">Soil & Fertilizer</ColLink></li>
              <li><ColLink to="/shop">Gift Sets</ColLink></li>
              <li><ColLink to="/shop">New Arrivals</ColLink></li>
            </ColLinks>
          </div>
          <div>
            <ColTitle>Help</ColTitle>
            <ColLinks>
              <li><ColLink to="/care">Care Tips</ColLink></li>
              <li><ColLink to="/about">About Us</ColLink></li>
              <li><ColLink to="/contact">Contact</ColLink></li>
              <li><ColLink to="/faq">FAQ</ColLink></li>
              <li><ColLink to="/shipping">Shipping</ColLink></li>
            </ColLinks>
          </div>
        </Grid>
        <Divider />
        <Bottom>
          <Copyright>© 2026 Leaf&Loom. All rights reserved.</Copyright>
          <BottomLinks>
            <BottomLink to="/privacy">Privacy Policy</BottomLink>
            <BottomLink to="/terms">Terms of Service</BottomLink>
          </BottomLinks>
        </Bottom>
      </Inner>
    </FooterWrapper>
  );
}
