import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50%       { transform: scale(1.08); }
`;

/* ── outer section ── */
const Wrap = styled.section`
  background: ${({ theme }) => theme.colors.greenDark};
  padding: clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 3rem);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(circle at 10% 80%, rgba(82,183,136,0.12) 0%, transparent 45%),
      radial-gradient(circle at 90% 10%, rgba(82,183,136,0.08) 0%, transparent 45%);
    pointer-events: none;
  }
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const HeaderLeft = styled.div``;

const Pill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.3rem 0.9rem;
  background: rgba(82,183,136,0.18);
  border: 1px solid rgba(82,183,136,0.3);
  border-radius: ${({ theme }) => theme.radius.full};
  color: ${({ theme }) => theme.colors.greenLight};
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  margin-bottom: 0.85rem;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.02em;
  line-height: 1.2;

  span {
    color: ${({ theme }) => theme.colors.greenLight};
    font-style: italic;
  }
`;

const SubText = styled.p`
  color: rgba(255,255,255,0.55);
  font-size: 0.88rem;
  margin-top: 0.5rem;
  max-width: 380px;
  line-height: 1.6;
`;

const TipCount = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 3.5rem;
  font-weight: 700;
  color: rgba(82,183,136,0.2);
  line-height: 1;
  white-space: nowrap;
`;

/* ── two-column layout: featured tip + grid ── */
const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const FeaturedTip = styled.div`
  background: ${({ theme }) => theme.colors.greenPrimary};
  border-radius: ${({ theme }) => theme.radius.xl};
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 280px;
  position: relative;
  overflow: hidden;

  &::after {
    content: '💡';
    position: absolute;
    font-size: 8rem;
    bottom: -1rem;
    right: -0.5rem;
    opacity: 0.08;
    animation: ${pulse} 3s ease infinite;
  }
`;

const FeaturedLabel = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.greenLight};
  margin-bottom: 1rem;
`;

const FeaturedText = styled.p`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  font-weight: 600;
  color: #fff;
  line-height: 1.5;
  flex: 1;
`;

const FeaturedSource = styled.div`
  font-size: 0.75rem;
  color: rgba(255,255,255,0.5);
  margin-top: 1.5rem;
`;

const TipsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const TipCard = styled.div`
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.09);
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 1.25rem;
  transition: all 0.25s ease;

  &:hover {
    background: rgba(255,255,255,0.1);
    border-color: rgba(82,183,136,0.3);
    transform: translateY(-3px);
  }
`;

const TipIcon = styled.div`
  font-size: 1.4rem;
  margin-bottom: 0.65rem;
`;

const TipTitle = styled.div`
  font-size: 0.82rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.4rem;
`;

const TipText = styled.div`
  font-size: 0.76rem;
  color: rgba(255,255,255,0.55);
  line-height: 1.55;
`;

/* ── bottom quick-tips strip ── */
const QuickStrip = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const QuickTip = styled.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.6rem 1.1rem;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: ${({ theme }) => theme.radius.full};
  flex: 1;
  min-width: 200px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255,255,255,0.1);
    border-color: rgba(82,183,136,0.4);
  }
`;

const QuickIcon = styled.span`
  font-size: 1rem;
  flex-shrink: 0;
`;

const QuickText = styled.span`
  font-size: 0.78rem;
  color: rgba(255,255,255,0.7);
  line-height: 1.4;
`;

/* ── data ── */
const featured = {
  label: '⭐ Pro Tip of the Week',
  text: '"Avoid overwatering — it is the #1 killer of indoor plants. Always check the top 2 inches of soil before reaching for the watering can. When in doubt, wait another day."',
  source: '— Marcus Chen, Head Grower at GreenNest',
};

const tips = [
  { icon: '☀️', title: 'Indirect Light is Key', text: 'Most tropical houseplants prefer bright, indirect sunlight. Direct sun can scorch delicate leaves.' },
  { icon: '💧', title: 'Less Water, More Often', text: 'Small, frequent waterings cause shallow roots. Deep, infrequent watering encourages stronger root systems.' },
  { icon: '🌡️', title: 'Room Temperature Matters', text: 'Most plants thrive between 60–80°F. Avoid placing them near heating vents, drafts, or AC units.' },
  { icon: '🪴', title: 'Right Pot, Right Drainage', text: 'Always use pots with drainage holes. Standing water causes root rot faster than anything else.' },
];

const quickTips = [
  { icon: '🌫️', text: 'Mist tropical plants to boost humidity' },
  { icon: '🔄', text: 'Rotate pots quarterly for even growth' },
  { icon: '🧹', text: 'Wipe dusty leaves with a damp cloth' },
  { icon: '🌱', text: 'Repot every 1–2 years in spring' },
];

/* ── component ── */
export default function TipsSection() {
  return (
    <Wrap>
      <Inner>
        <Header>
          <HeaderLeft>
            <Pill>🌿 Plant Wisdom</Pill>
            <Title>Essential <span>Care Tips</span></Title>
            <SubText>Tried-and-tested advice from our team of expert growers and botanists.</SubText>
          </HeaderLeft>
          <TipCount>12+</TipCount>
        </Header>

        <Layout>
          <FeaturedTip>
            <div>
              <FeaturedLabel>{featured.label}</FeaturedLabel>
              <FeaturedText>{featured.text}</FeaturedText>
            </div>
            <FeaturedSource>{featured.source}</FeaturedSource>
          </FeaturedTip>

          <TipsGrid>
            {tips.map(t => (
              <TipCard key={t.title}>
                <TipIcon>{t.icon}</TipIcon>
                <TipTitle>{t.title}</TipTitle>
                <TipText>{t.text}</TipText>
              </TipCard>
            ))}
          </TipsGrid>
        </Layout>

        <QuickStrip>
          {quickTips.map(q => (
            <QuickTip key={q.text}>
              <QuickIcon>{q.icon}</QuickIcon>
              <QuickText>{q.text}</QuickText>
            </QuickTip>
          ))}
        </QuickStrip>
      </Inner>
    </Wrap>
  );
}
