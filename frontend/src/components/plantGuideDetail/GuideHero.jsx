import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import heroBg from '../../assets/2.jpg';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HeroWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  max-height: 900px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${({ $src }) => $src});
  background-size: cover;
  background-position: center;
  transform: scale(1.05);
  transition: transform 8s ease;

  ${HeroWrapper}:hover & {
    transform: scale(1.08);
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,0.25) 0%,
    rgba(0,0,0,0.50) 50%,
    rgba(0,0,0,0.70) 100%
  );
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 760px;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 1.1rem;
  background: rgba(255,255,255,0.12);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.25);
  border-radius: 999px;
  color: rgba(255,255,255,0.92);
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  animation: ${fadeUp} 0.6s ease both;

  &::before {
    content: '📖';
    font-size: 0.875rem;
  }
`;

const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 60px;
  font-weight: 700;
  color: #fff;
  line-height: 1.1;
  letter-spacing: -0.02em;
  animation: ${fadeUp} 0.7s ease 0.1s both;

  span {
    color: ${({ theme }) => theme.colors.greenLight};
  }
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.15rem);
  color: rgba(255,255,255,0.82);
  max-width: 560px;
  line-height: 1.65;
  animation: ${fadeUp} 0.7s ease 0.2s both;
`;

const HeroActions = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  animation: ${fadeUp} 0.7s ease 0.3s both;
`;

const PrimaryBtn = styled(Link)`
  padding: 0.8rem 2rem;
  background: ${({ theme }) => theme.colors.greenPrimary};
  color: #fff;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.greenDark};
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(45,106,79,0.4);
  }
`;

const SecondaryBtn = styled(Link)`
  padding: 0.8rem 2rem;
  background: rgba(255,255,255,0.12);
  color: #fff;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 500;
  border: 1px solid rgba(255,255,255,0.3);
  backdrop-filter: blur(4px);
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255,255,255,0.2);
    transform: translateY(-2px);
  }
`;

const ScrollHint = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  animation: ${fadeUp} 1s ease 0.8s both;
`;

const ScrollDot = styled.div`
  width: 28px;
  height: 44px;
  border: 2px solid rgba(255,255,255,0.4);
  border-radius: 14px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 6px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 8px;
    background: rgba(255,255,255,0.7);
    border-radius: 2px;
    animation: scrollBounce 1.6s ease infinite;
  }

  @keyframes scrollBounce {
    0%, 100% { top: 6px; opacity: 1; }
    60% { top: 20px; opacity: 0.3; }
  }
`;

const ScrollLabel = styled.span`
  font-size: 0.7rem;
  color: rgba(255,255,255,0.5);
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export default function Hero() {
  return (
    <HeroWrapper>
      <HeroBg $src={heroBg} />
      <Overlay />
      <HeroContent>
        <Badge>Your Complete Indoor Plant Guide</Badge>
        <HeroTitle>
          Find the Perfect Plant for <span>Your Space</span>
        </HeroTitle>
        <HeroSubtitle>
          From total beginners to seasoned collectors — explore our curated guides to discover plants that match your lifestyle, lighting, and experience level.
        </HeroSubtitle>
        <HeroActions>
          <PrimaryBtn to="/guide">Explore Plant Guide</PrimaryBtn>
          <SecondaryBtn to="/shop">Shop All Plants</SecondaryBtn>
        </HeroActions>
      </HeroContent>
      <ScrollHint>
        <ScrollDot />
        <ScrollLabel>Scroll</ScrollLabel>
      </ScrollHint>
    </HeroWrapper>
  );
}
