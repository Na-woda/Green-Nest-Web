import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.article`
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.borderCard};
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 48px ${({ theme }) => theme.colors.shadowHover};
    border-color: ${({ theme }) => theme.colors.greenMintDark};
  }
`;

const ImageWrap = styled.div`
  position: relative;
  height: 200px;
  background: ${({ $bg }) => $bg || '#eef0ea'};
  overflow: hidden;
  flex-shrink: 0;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${Card}:hover & {
    transform: scale(1.06);
  }
`;

const CategoryTag = styled.span`
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  padding: 0.25rem 0.7rem;
  background: rgba(255,255,255,0.9);
  backdrop-filter: blur(4px);
  border-radius: ${({ theme }) => theme.radius.full};
  font-size: 0.68rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.greenPrimary};
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

const ReadTime = styled.span`
  position: absolute;
  bottom: 0.75rem;
  right: 0.75rem;
  padding: 0.2rem 0.6rem;
  background: rgba(0,0,0,0.45);
  border-radius: ${({ theme }) => theme.radius.full};
  font-size: 0.68rem;
  font-weight: 500;
  color: rgba(255,255,255,0.9);
`;

const Body = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const DifficultyRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.6rem;
`;

const Dot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({ $level, theme }) => {
    if ($level === 'Beginner') return theme.colors.greenLight;
    if ($level === 'Intermediate') return theme.colors.accentOrange;
    return theme.colors.accentTeal;
  }};
`;

const DiffLabel = styled.span`
  font-size: 0.72rem;
  font-weight: 600;
  color: ${({ $level, theme }) => {
    if ($level === 'Beginner') return theme.colors.greenPrimary;
    if ($level === 'Intermediate') return theme.colors.accentOrange;
    return theme.colors.accentTeal;
  }};
`;

const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.05rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 1.35;
  margin-bottom: 0.55rem;
  letter-spacing: -0.01em;
`;

const Summary = styled.p`
  font-size: 0.82rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  flex: 1;
  margin-bottom: 1.2rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ReadMore = styled.button`
  align-self: flex-start;
  padding: 0.5rem 1.2rem;
  background: transparent;
  border: 1.5px solid ${({ theme }) => theme.colors.greenPrimary};
  color: ${({ theme }) => theme.colors.greenPrimary};
  border-radius: ${({ theme }) => theme.radius.full};
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  &:hover {
    background: ${({ theme }) => theme.colors.greenPrimary};
    color: #fff;
    transform: translateX(2px);
  }
`;

export default function GuideArticleCard({ article }) {
  const { id, image, imageBg, category, readTime, difficulty, title, summary } = article;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/guides/${id}`);
  };

  return (
    <Card onClick={handleClick}>
      <ImageWrap $bg={imageBg}>
        {image ? <Img src={image} alt={title} loading="lazy" /> : null}
        <CategoryTag>{category}</CategoryTag>
        <ReadTime>⏱ {readTime}</ReadTime>
      </ImageWrap>
      <Body>
        <DifficultyRow>
          <Dot $level={difficulty} />
          <DiffLabel $level={difficulty}>{difficulty}</DiffLabel>
        </DifficultyRow>
        <Title>{title}</Title>
        <Summary>{summary}</Summary>
        <ReadMore onClick={handleClick}>Read Guide →</ReadMore>
      </Body>
    </Card>
  );
}