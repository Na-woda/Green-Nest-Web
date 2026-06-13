import styled, { keyframes } from 'styled-components';
import PageWrapper from '../layouts/PageWrapper';

/* ─── animations ─── */
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(22px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ─── HERO ─── */
const HeroWrap = styled.section`
  position: relative;
  height: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
`;
const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  background: url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1400&auto=format&fit=crop&q=80') center/cover;
  filter: brightness(0.52);
`;
const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 0 2rem;
  animation: ${fadeUp} 0.7s ease both;
`;
const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2.6rem, 6vw, 4rem);
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
  font-style: italic;
`;
const HeroSub = styled.p`
  color: rgba(255,255,255,0.82);
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  line-height: 1.65;
  max-width: 580px;
  margin: 0 auto;
`;

/* ─── STATS ─── */
const StatsBar = styled.div`
  background: ${({ theme }) => theme.colors.bgCard};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;
const StatsInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 2.5rem clamp(1.5rem, 5vw, 3rem);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const StatItem = styled.div``;
const StatNum = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 2.6rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.greenPrimary};
  line-height: 1;
  margin-bottom: 0.4rem;
`;
const StatLabel = styled.div`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.accentOrange};
  font-weight: 500;
`;

/* ─── shared section ─── */
const Section = styled.section`
  background: ${({ $alt, theme }) => $alt ? theme.colors.bgSection : theme.colors.bgCard};
  padding: clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 3rem);
`;
const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;
const CenterHead = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;
const Pill = styled.span`
  display: inline-block;
  padding: 0.3rem 1rem;
  background: ${({ $gold, theme }) => $gold ? '#f5e9c8' : theme.colors.greenMint};
  color: ${({ $gold, theme }) => $gold ? '#a07c1a' : theme.colors.greenPrimary};
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;
const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: -0.02em;
  margin-bottom: 0.6rem;
`;
const SectionSub = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.65;
`;

/* ─── MISSION ─── */
const MissionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.5rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;
const MissionText = styled.div``;
const MissionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.8rem, 3.5vw, 2.4rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
  line-height: 1.2;
`;
const MissionBody = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.75;
  margin-bottom: 1.1rem;
`;
const MissionImgWrap = styled.div`
  border-radius: ${({ theme }) => theme.radius.xl};
  overflow: hidden;
  aspect-ratio: 4/3;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  &:hover img { transform: scale(1.04); }
`;

/* ─── VALUES ─── */
const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;
const ValueCard = styled.article`
  background: ${({ theme }) => theme.colors.bgSection};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 1.75rem;
  border: 1px solid ${({ theme }) => theme.colors.borderCard};
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 36px ${({ theme }) => theme.colors.shadowHover};
    border-color: ${({ theme }) => theme.colors.greenMintDark};
  }
`;
const ValueIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.greenMint};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;
const ValueTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 0.6rem;
`;
const ValueDesc = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.65;
`;

/* ─── TIMELINE ─── */
const TimelineWrap = styled.div`
  position: relative;
  padding: 1rem 0;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${({ theme }) => theme.colors.greenMintDark};
    transform: translateX(-50%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    &::before { left: 20px; }
  }
`;
const TimelineItem = styled.div`
  display: flex;
  justify-content: ${({ $right }) => $right ? 'flex-end' : 'flex-start'};
  padding: 0 calc(50% + 2.5rem) 2.5rem ${({ $right }) => $right ? '0' : '0'};
  padding-left: ${({ $right }) => $right ? 'calc(50% + 2.5rem)' : '0'};
  padding-right: ${({ $right }) => $right ? '0' : 'calc(50% + 2.5rem)'};
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: flex-start;
    padding-left: 4rem;
    padding-right: 0;
  }
`;
const TimelineDot = styled.div`
  position: absolute;
  left: 50%;
  top: 8px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.greenPrimary};
  transform: translateX(-50%);
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    left: 20px;
  }
`;
const TimelineCard = styled.div`
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.borderCard};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 1.5rem;
  max-width: 420px;
  width: 100%;
  transition: all 0.25s ease;

  &:hover {
    box-shadow: 0 10px 30px ${({ theme }) => theme.colors.shadowHover};
    border-color: ${({ theme }) => theme.colors.greenMintDark};
  }
`;
const TimelineYear = styled.div`
  font-size: 0.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 0.4rem;
  letter-spacing: 0.04em;
`;
const TimelineTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 0.5rem;
`;
const TimelineDesc = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.accentTeal};
  line-height: 1.65;
`;

/* ─── TEAM ─── */
const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;
const TeamCard = styled.article`
  background: ${({ theme }) => theme.colors.bgCard};
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.borderCard};
  text-align: center;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 16px 40px ${({ theme }) => theme.colors.shadowHover};
  }
`;
const TeamImgWrap = styled.div`
  height: 220px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    transition: transform 0.4s ease;
  }
  ${TeamCard}:hover & img { transform: scale(1.05); }
`;
const TeamBody = styled.div`
  padding: 1.1rem 1rem 1.4rem;
`;
const TeamName = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 0.2rem;
`;
const TeamRole = styled.div`
  font-size: 0.78rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.greenPrimary};
  margin-bottom: 0.75rem;
`;
const TeamBio = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`;

/* ─── CTA ─── */
const CTASection = styled.section`
  position: relative;
  background: ${({ theme }) => theme.colors.greenCTA};
  padding: clamp(3rem, 7vw, 5rem) clamp(1.5rem, 5vw, 3rem);
  text-align: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url('https://images.unsplash.com/photo-1502810365585-56ffa361fdde?w=1200&auto=format&fit=crop&q=50');
    background-size: cover;
    background-position: center;
    opacity: 0.1;
  }
`;
const CTAInner = styled.div`
  position: relative;
  z-index: 1;
  max-width: 640px;
  margin: 0 auto;
`;
const CTATitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.02em;
  margin-bottom: 0.85rem;
`;
const CTASub = styled.p`
  color: rgba(255,255,255,0.8);
  font-size: 1rem;
  line-height: 1.65;
  max-width: 480px;
  margin: 0 auto 2rem;
`;
const CTABtn = styled.button`
  padding: 0.85rem 2.4rem;
  background: #fff;
  color: ${({ theme }) => theme.colors.greenPrimary};
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  }
`;

/* ─── DATA ─── */
const stats = [
  { num: '25,000+', label: 'Happy Plant Parents' },
  { num: '500+',    label: 'Plant Varieties' },
  { num: '50+',     label: 'Cities Served' },
  { num: '98%',     label: 'Satisfaction Rate' },
];

const values = [
  { icon: '🌱', title: 'Sustainability First', desc: 'We use 100% biodegradable packaging, peat-free soil alternatives, and partner with carbon-neutral shipping services. Every plant we sell supports reforestation projects worldwide.' },
  { icon: '🏆', title: 'Quality Over Everything', desc: "Every plant is hand-selected by our expert growers. We never ship a plant we would not proudly display in our own homes. Our 30-day guarantee backs every purchase." },
  { icon: '📚', title: 'Education & Community', desc: 'We believe knowledge grows gardens. Our free care guides, workshops, and online community help plant parents of all levels succeed. No question is too small.' },
  { icon: '🤝', title: 'Fair to Farmers', desc: 'We work directly with family-owned nurseries and pay fair prices. Our growers receive living wages, safe working conditions, and opportunities for professional development.' },
];

const timeline = [
  { year: '2018', title: 'The Seed of an Idea', desc: 'Emma Greenfield started selling propagated plants from her apartment balcony in Portland, sharing her passion with friends and neighbors.', right: false },
  { year: '2019', title: 'First Greenhouse', desc: 'With growing demand, we leased our first small greenhouse and hired two part-time helpers. GreenNest was officially born as a small local business.', right: true },
  { year: '2020', title: 'Pandemic Pivot', desc: 'As people stayed home, demand for indoor plants skyrocketed. We launched our e-commerce site and began shipping nationwide, bringing nature to doorsteps across America.', right: false },
  { year: '2022', title: 'Growing Strong', desc: 'We expanded to a 50,000 sq ft growing facility, built a team of 35 passionate plant experts, and served over 10,000 happy customers across 30 states.', right: true },
  { year: '2024', title: 'Today & Beyond', desc: 'With 25,000+ plant parents, 500+ varieties, and a growing community of enthusiasts, we continue to innovate and make indoor gardening accessible to everyone, everywhere.', right: false },
];

const team = [
  { name: 'Emma Greenfield', role: 'Founder & CEO', bio: 'Former botanist turned entrepreneur. Emma spent 12 years studying tropical plants across Southeast Asia before founding GreenNest. She believes everyone deserves access to the joy and wellness benefits of indoor plants.', img: 'https://images.unsplash.com/photo-1494790108755-2616b612b738?w=400&auto=format&fit=crop&q=80' },
  { name: 'Marcus Chen',     role: 'Head Grower',  bio: 'With over 20 years of horticulture experience, Marcus oversees our greenhouse operations. He personally inspects every plant before it ships, ensuring only the healthiest specimens reach your doorstep.', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80' },
  { name: 'Sophia Rivera',   role: 'Customer Experience Lead', bio: 'Sophia is a passionate plant collector with over 80 plants in her own home. She leads our customer support team and creates the care guides that help our community keep their plants thriving.', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=80' },
  { name: 'David Park',      role: 'Sustainability Director', bio: 'David leads our mission to make GreenNest the most eco-friendly plant company. From biodegradable packaging to carbon-neutral shipping, he ensures every decision we make honors our commitment to the planet.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80' },
];

/* ─── COMPONENT ─── */
export default function About() {
  return (
    <PageWrapper heroPage={false}>

      {/* Hero */}
      <HeroWrap>
        <HeroBg />
        <HeroContent>
          <HeroTitle>Our Story</HeroTitle>
          <HeroSub>
            From a tiny apartment balcony to serving 25,000+ plant parents nationwide — this is how GreenNest grew into the trusted home for indoor plants.
          </HeroSub>
        </HeroContent>
      </HeroWrap>

      {/* Stats */}
      <StatsBar>
        <StatsInner>
          {stats.map(s => (
            <StatItem key={s.label}>
              <StatNum>{s.num}</StatNum>
              <StatLabel>{s.label}</StatLabel>
            </StatItem>
          ))}
        </StatsInner>
      </StatsBar>

      {/* Mission */}
      <Section $alt>
        <Inner>
          <MissionGrid>
            <MissionText>
              <Pill>OUR MISSION</Pill>
              <MissionTitle>Bringing Nature Into Every Home</MissionTitle>
              <MissionBody>
                We believe that everyone deserves access to the joy, beauty, and wellness benefits of indoor plants. Our mission is to make plant parenthood accessible, enjoyable, and successful for people of all experience levels — from total beginners to seasoned collectors.
              </MissionBody>
              <MissionBody>
                Every plant we ship comes with detailed care instructions, ongoing support, and our 30-day happiness guarantee. We are not just selling plants — we are building a community of confident, thriving plant parents.
              </MissionBody>
            </MissionText>
            <MissionImgWrap>
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop"
                alt="Person tending to indoor plants"
                loading="lazy"
              />
            </MissionImgWrap>
          </MissionGrid>
        </Inner>
      </Section>

      {/* Values */}
      <Section>
        <Inner>
          <CenterHead>
            <Pill>WHAT WE STAND FOR</Pill>
            <SectionTitle>Our Values</SectionTitle>
          </CenterHead>
          <ValuesGrid>
            {values.map(v => (
              <ValueCard key={v.title}>
                <ValueIcon>{v.icon}</ValueIcon>
                <ValueTitle>{v.title}</ValueTitle>
                <ValueDesc>{v.desc}</ValueDesc>
              </ValueCard>
            ))}
          </ValuesGrid>
        </Inner>
      </Section>

      {/* Timeline */}
      <Section $alt>
        <Inner>
          <CenterHead>
            <Pill>HOW WE GOT HERE</Pill>
            <SectionTitle>Our Journey</SectionTitle>
            <SectionSub>Five years of growth, one leaf at a time.</SectionSub>
          </CenterHead>
          <TimelineWrap>
            {timeline.map(item => (
              <TimelineItem key={item.year} $right={item.right}>
                <TimelineDot />
                <TimelineCard>
                  <TimelineYear>{item.year}</TimelineYear>
                  <TimelineTitle>{item.title}</TimelineTitle>
                  <TimelineDesc>{item.desc}</TimelineDesc>
                </TimelineCard>
              </TimelineItem>
            ))}
          </TimelineWrap>
        </Inner>
      </Section>

      {/* Team */}
      <Section>
        <Inner>
          <CenterHead>
            <Pill $gold>OUR TEAM</Pill>
            <SectionTitle>Meet the Plant People</SectionTitle>
            <SectionSub>
              A passionate team of botanists, growers, and plant enthusiasts dedicated to bringing nature into your home.
            </SectionSub>
          </CenterHead>
          <TeamGrid>
            {team.map(member => (
              <TeamCard key={member.name}>
                <TeamImgWrap>
                  <img src={member.img} alt={member.name} loading="lazy" />
                </TeamImgWrap>
                <TeamBody>
                  <TeamName>{member.name}</TeamName>
                  <TeamRole>{member.role}</TeamRole>
                  <TeamBio>{member.bio}</TeamBio>
                </TeamBody>
              </TeamCard>
            ))}
          </TeamGrid>
        </Inner>
      </Section>

      {/* CTA */}
      <CTASection>
        <CTAInner>
          <CTATitle>Ready to Grow With Us?</CTATitle>
          <CTASub>
            Join 25,000+ happy plant parents and bring the beauty of nature into your home today.
          </CTASub>
          <CTABtn>🛒 Start Shopping</CTABtn>
        </CTAInner>
      </CTASection>

    </PageWrapper>
  );
}
