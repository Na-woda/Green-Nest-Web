import styled from 'styled-components';
import { careTips } from '../data/guide';

const Section = styled.section`
  background: ${({ theme }) => theme.colors.bgPrimary};
  padding: clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem);
`;

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: -0.02em;
  margin-bottom: 0.75rem;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 520px;
  margin: 0 auto;
  line-height: 1.6;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const TipCard = styled.article`
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.borderCard};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 1.75rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 40px ${({ theme }) => theme.colors.shadowHover};
    border-color: ${({ theme }) => theme.colors.greenMintDark};
  }
`;

const IconCircle = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.greenMint};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  font-size: 1.1rem;
`;

const TipTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 0.65rem;
  line-height: 1.3;
`;

const TipDesc = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.65;
`;

const iconMap = {
  sprout: '🌱',
  droplet: '💧',
  sun: '☀️',
  water: '🫧',
  rotate: '🔄',
  sparkle: '✨',
};

export default function CareTips() {
  return (
    <Section>
      <Inner>
        <Header>
          <Title>Essential Plant Care Tips</Title>
          <Subtitle>
            Master these fundamentals and watch your indoor jungle thrive like never before.
          </Subtitle>
        </Header>
        <Grid>
          {careTips.map(tip => (
            <TipCard key={tip.id}>
              <IconCircle>{iconMap[tip.iconSvg] || tip.icon}</IconCircle>
              <TipTitle>{tip.title}</TipTitle>
              <TipDesc>{tip.description}</TipDesc>
            </TipCard>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
}
