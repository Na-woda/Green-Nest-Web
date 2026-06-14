import styled from 'styled-components';
import PlantCard from './PlantCard';

const Section = styled.section`
  background: ${({ $alt, theme }) => $alt ? theme.colors.bgSection : theme.colors.bgPrimary};
  padding: clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem);
`;

const CategoryBadge = styled.span`
  display: inline-block;
  padding: 0.3rem 0.85rem;
  background: ${({ theme }) => theme.colors.greenMint};
  color: ${({ theme }) => theme.colors.greenPrimary};
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const SplitRow = styled.div`
  max-width: 1280px;
  margin: 0 auto 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const InfoSide = styled.div`
  order: ${({ $reverse }) => $reverse ? 2 : 1};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 1;
  }
`;

const ImageSide = styled.div`
  order: ${({ $reverse }) => $reverse ? 1 : 2};
  border-radius: ${({ theme }) => theme.radius.xl};
  overflow: hidden;
  aspect-ratio: 16/10;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 2;
  }
`;

const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${ImageSide}:hover & {
    transform: scale(1.04);
  }
`;

const CategoryTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin-bottom: 0.85rem;
`;

const CategoryDesc = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  margin-bottom: 1.5rem;
  max-width: 500px;
`;

const MetaRow = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.borderCard};
  border-radius: ${({ theme }) => theme.radius.full};
`;

const MetaIcon = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.greenMint};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
`;

const MetaText = styled.div``;

const MetaLabel = styled.div`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: 500;
`;

const MetaValue = styled.div`
  font-size: 0.82rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const PlantGrid = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export default function CategorySection({ category, alt, reverse }) {
  return (
    <Section $alt={alt}>
      <SplitRow>
        <InfoSide $reverse={reverse}>
          <CategoryBadge>Category {category.number} of {category.total}</CategoryBadge>
          <CategoryTitle>{category.label}</CategoryTitle>
          <CategoryDesc>{category.description}</CategoryDesc>
          <MetaRow>
            <MetaItem>
              <MetaIcon>🌱</MetaIcon>
              <MetaText>
                <MetaLabel>Care Level</MetaLabel>
                <MetaValue>{category.careLevel}</MetaValue>
              </MetaText>
            </MetaItem>
            <MetaItem>
              <MetaIcon>☀️</MetaIcon>
              <MetaText>
                <MetaLabel>Light Needs</MetaLabel>
                <MetaValue>{category.lightNeeds}</MetaValue>
              </MetaText>
            </MetaItem>
            <MetaItem>
              <MetaIcon>💧</MetaIcon>
              <MetaText>
                <MetaLabel>Watering</MetaLabel>
                <MetaValue>{category.watering}</MetaValue>
              </MetaText>
            </MetaItem>
          </MetaRow>
        </InfoSide>
        <ImageSide $reverse={reverse}>
          <HeroImg src={category.heroImage} alt={category.label} loading="lazy" />
        </ImageSide>
      </SplitRow>
      <PlantGrid>
        {category.plants.map(plant => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </PlantGrid>
    </Section>
  );
}
