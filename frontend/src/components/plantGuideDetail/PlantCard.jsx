import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const CardWrapper = styled.article`
  background: ${({ theme }) => theme.colors.bgCard};
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.borderCard};
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 48px ${({ theme }) => theme.colors.shadowHover};
    border-color: ${({ theme }) => theme.colors.greenMintDark};
  }
`;

const ImageWrap = styled.div`
  position: relative;
  height: 300px;
  background: ${({ $bg }) => $bg || '#f5f5ef'};
  overflow: hidden;
`;

const PlantImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${CardWrapper}:hover & {
    transform: scale(1.06);
  }
`;

const TagRow = styled.div`
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.65rem;
  background: rgba(255,255,255,0.88);
  backdrop-filter: blur(4px);
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.greenPrimary};
  letter-spacing: 0.01em;

  &::before {
    content: ${({ $type }) => $type === 'Pet-Safe' ? '"🐾"' : '"🌿"'};
    font-size: 0.7rem;
  }
`;

const CardBody = styled.div`
  padding: 1.1rem 1.25rem 1.25rem;
`;

const PlantName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.15rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 0.2rem;
  letter-spacing: -0.01em;
`;

const LatinName = styled.p`
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-style: italic;
  margin-bottom: 0.65rem;
`;

const Description = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.55;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Stats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding-top: 0.85rem;
`;

const StatRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  font-size: 0.8rem;
`;

const StatIcon = styled.span`
  color: ${({ $color, theme }) => {
    if ($color === 'green') return theme.colors.greenLight;
    if ($color === 'orange') return theme.colors.accentOrange;
    if ($color === 'blue') return theme.colors.accentTeal;
    return theme.colors.textMuted;
  }};
  font-size: 0.85rem;
  width: 14px;
  flex-shrink: 0;
`;

const StatValue = styled.span`
  color: ${({ $color, theme }) => {
    if ($color === 'green') return theme.colors.textLink;
    if ($color === 'orange') return theme.colors.accentOrange;
    if ($color === 'blue') return theme.colors.accentTeal;
    return theme.colors.textSecondary;
  }};
  font-weight: 400;
`;

const SizeIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 3H3M3 3v6M3 3l18 18M21 3v6M21 21H3"/>
  </svg>
);

const SunIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
  </svg>
);

const WaterIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10A10 10 0 0 1 2 12 10 10 0 0 1 12 2z"/>
    <path d="M12 6v6l4 2"/>
  </svg>
);

export default function PlantCard({ plant }) {
 const navigate = useNavigate();

  return (
    <CardWrapper  onClick={() => navigate(`/guides/${plant.id}`)}>
      <ImageWrap $bg={plant.bg}>
        <PlantImage
          src={plant.image}
          alt={plant.name}
          loading="lazy"
        />
        {plant.tags?.length > 0 && (
          <TagRow>
            {plant.tags.map(tag => (
              <Tag key={tag} $type={tag}>{tag}</Tag>
            ))}
          </TagRow>
        )}
      </ImageWrap>
      <CardBody>
        <PlantName>{plant.name}</PlantName>
        <LatinName>{plant.latinName}</LatinName>
        <Description>{plant.description}</Description>
        <Stats>
          <StatRow>
            <StatIcon $color="green"><SizeIcon /></StatIcon>
            <StatValue $color="green">{plant.size}</StatValue>
          </StatRow>
          <StatRow>
            <StatIcon $color="orange"><SunIcon /></StatIcon>
            <StatValue $color="orange">{plant.light}</StatValue>
          </StatRow>
          <StatRow>
            <StatIcon $color="blue"><WaterIcon /></StatIcon>
            <StatValue $color="blue">{plant.watering}</StatValue>
          </StatRow>
        </Stats>
      </CardBody>
    </CardWrapper>
  );
}
