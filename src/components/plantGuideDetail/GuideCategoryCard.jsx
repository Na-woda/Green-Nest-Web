import styled from 'styled-components';
//import { GuideCardLink } from './GuideDetailsPage';
const Card = styled.article`
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.borderCard};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 1.75rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  /* accent bar on left edge */
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: ${({ $accentColor, theme }) => $accentColor || theme.colors.greenLight};
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 0.3s ease;
    border-radius: 0 2px 2px 0;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 18px 44px ${({ theme }) => theme.colors.shadowHover};
    border-color: ${({ theme }) => theme.colors.greenMintDark};

    &::before { transform: scaleY(1); }
  }
`;

const IconWrap = styled.div`
  width: 52px;
  height: 52px;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ $bg, theme }) => $bg || theme.colors.greenMint};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  margin-bottom: 1.1rem;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.1) rotate(-4deg);
  }
`;

const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.05rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
`;

const Desc = styled.p`
  font-size: 0.82rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
  margin-bottom: 1.1rem;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Count = styled.span`
  font-size: 0.72rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textMuted};
  background: ${({ theme }) => theme.colors.bgSection};
  padding: 0.2rem 0.65rem;
  border-radius: ${({ theme }) => theme.radius.full};
`;

const Arrow = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.greenPrimary};
  font-weight: 700;
  transition: transform 0.2s ease;

  ${Card}:hover & {
    transform: translateX(4px);
  }
`;

export default function GuideCategoryCard({ category }) {
  const { icon, title, description, articleCount, iconBg, accent } = category;

  return (
    <Card $accentColor={accent}>
      <IconWrap $bg={iconBg}>{icon}</IconWrap>
      <Title>{title}</Title>
      <Desc>{description}</Desc>
      <Footer>
        <Count>{articleCount} guides</Count>
        <Arrow>→</Arrow>
      </Footer>
    </Card>
  );
}
