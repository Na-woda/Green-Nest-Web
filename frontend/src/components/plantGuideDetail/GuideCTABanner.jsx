import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Banner = styled.section`
  position: relative;
  background: ${({ theme }) => theme.colors.greenCTA};
  overflow: hidden;
  padding: clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem);
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url('https://images.unsplash.com/photo-1502810365585-56ffa361fdde?w=1400&auto=format&fit=crop&q=60');
    background-size: cover;
    background-position: center;
    opacity: 0.15;
  }
`;

const Inner = styled.div`
  position: relative;
  z-index: 1;
  max-width: 700px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2rem, 5vw, 3.25rem);
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
  line-height: 1.15;
`;

const Subtitle = styled.p`
  font-size: 1.05rem;
  color: rgba(255,255,255,0.82);
  max-width: 500px;
  margin: 0 auto 2.5rem;
  line-height: 1.65;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const PrimaryBtn = styled(Link)`
  padding: 0.85rem 2.2rem;
  background: #fff;
  color: ${({ theme }) => theme.colors.greenPrimary};
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 700;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  }
`;

const SecondaryBtn = styled(Link)`
  padding: 0.85rem 2.2rem;
  background: transparent;
  color: #fff;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 600;
  border: 2px solid rgba(255,255,255,0.5);
  transition: all 0.2s ease;

  &:hover {
    border-color: #fff;
    background: rgba(255,255,255,0.1);
    transform: translateY(-2px);
  }
`;

export default function CTABanner() {
  return (
    <Banner>
      <Inner>
        <Title>Ready to Start Your Plant Journey?</Title>
        <Subtitle>
          Browse our full collection of indoor plants, hand-picked for quality and delivered right to your doorstep.
        </Subtitle>
        <ButtonGroup>
          <PrimaryBtn to="/shop">Browse All Plants</PrimaryBtn>
          <SecondaryBtn to="/guide">Explore Categories</SecondaryBtn>
        </ButtonGroup>
      </Inner>
    </Banner>
  );
}
