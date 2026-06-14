import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

/* ── animations ── */
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ── wrapper ── */
const Wrap = styled.section`
  position: relative;
  padding: 7rem clamp(1.5rem, 5vw, 3rem) 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.greenDark};

  /* subtle leaf pattern overlay */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(circle at 15% 50%, rgba(82,183,136,0.18) 0%, transparent 55%),
      radial-gradient(circle at 85% 20%, rgba(82,183,136,0.12) 0%, transparent 50%);
    pointer-events: none;
  }

  /* decorative large leaf shapes */
  &::after {
    content: '🌿';
    position: absolute;
    font-size: 18rem;
    opacity: 0.04;
    bottom: -3rem;
    right: -2rem;
    pointer-events: none;
    line-height: 1;
  }
`;

const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.78rem;
  color: rgba(255,255,255,0.5);
  margin-bottom: 1.5rem;
  animation: ${fadeUp} 0.5s ease both;

  span { color: ${({ theme }) => theme.colors.greenLight}; }
  a    { color: rgba(255,255,255,0.5); cursor: pointer; &:hover { color: #fff; } }
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.35rem 1rem;
  background: rgba(82,183,136,0.18);
  border: 1px solid rgba(82,183,136,0.35);
  border-radius: ${({ theme }) => theme.radius.full};
  color: ${({ theme }) => theme.colors.greenLight};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
  animation: ${fadeUp} 0.55s ease 0.05s both;
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2.4rem, 6vw, 4rem);
  font-weight: 700;
  color: #fff;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 1.1rem;
  animation: ${fadeUp} 0.6s ease 0.1s both;

  span {
    color: ${({ theme }) => theme.colors.greenLight};
    font-style: italic;
  }
`;

const Subtitle = styled.p`
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: rgba(255,255,255,0.72);
  max-width: 560px;
  line-height: 1.7;
  margin-bottom: 2.5rem;
  animation: ${fadeUp} 0.6s ease 0.15s both;
`;

const SearchWrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 520px;
  animation: ${fadeUp} 0.6s ease 0.2s both;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 1.25rem 1rem 3.25rem;
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1.5px solid rgba(255,255,255,0.15);
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(8px);
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.95rem;
  outline: none;
  transition: all 0.25s ease;

  &::placeholder { color: rgba(255,255,255,0.45); }

  &:focus {
    border-color: ${({ theme }) => theme.colors.greenLight};
    background: rgba(255,255,255,0.14);
    box-shadow: 0 0 0 4px rgba(82,183,136,0.15);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 1.1rem;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255,255,255,0.5);
  font-size: 1rem;
  pointer-events: none;
`;

const SearchBtn = styled.button`
  position: absolute;
  right: 0.4rem;
  top: 50%;
  transform: translateY(-50%);
  padding: 0.55rem 1.25rem;
  background: ${({ theme }) => theme.colors.greenLight};
  color: ${({ theme }) => theme.colors.greenDark};
  border: none;
  border-radius: ${({ theme }) => theme.radius.full};
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.2s ease;

  &:hover {
    background: #fff;
    transform: translateY(-50%) scale(1.03);
  }
`;

const StatsRow = styled.div`
  display: flex;
  gap: 2.5rem;
  margin-top: 3rem;
  animation: ${fadeUp} 0.6s ease 0.3s both;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 1.5rem;
  }
`;

const StatChip = styled.div`
  text-align: center;
`;

const StatNum = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
`;

const StatLabel = styled.div`
  font-size: 0.72rem;
  color: rgba(255,255,255,0.5);
  margin-top: 0.15rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

const Divider = styled.div`
  width: 1px;
  height: 36px;
  background: rgba(255,255,255,0.15);
  align-self: center;
`;

export default function GuideHero({ searchQuery, onSearch }) {
  const [value, setValue] = useState(searchQuery || '');

  const handleKey = (e) => {
    if (e.key === 'Enter') onSearch?.(value);
  };

  return (
    <Wrap>
      <Breadcrumb>
        <a>Home</a> › <span>Plant Guide</span>
      </Breadcrumb>

      <Badge>🌱 Complete Care Resource</Badge>

      <Title>
        Your Indoor <span>Plant Care</span> Guide
      </Title>

      <Subtitle>
        Everything you need to keep your plants thriving — from watering schedules
        and light requirements to pest control and seasonal care.
      </Subtitle>

      <SearchWrap>
        <SearchIcon>🔍</SearchIcon>
        <SearchInput
          placeholder="Search guides, e.g. &quot;watering monstera&quot;…"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKey}
        />
        <SearchBtn onClick={() => onSearch?.(value)}>Search</SearchBtn>
      </SearchWrap>

      <StatsRow>
        <StatChip><StatNum>50+</StatNum><StatLabel>Care Guides</StatLabel></StatChip>
        <Divider />
        <StatChip><StatNum>12</StatNum><StatLabel>Categories</StatLabel></StatChip>
        <Divider />
        <StatChip><StatNum>500+</StatNum><StatLabel>Plant Varieties</StatLabel></StatChip>
        <Divider />
        <StatChip><StatNum>25k+</StatNum><StatLabel>Plant Parents</StatLabel></StatChip>
      </StatsRow>
    </Wrap>
  );
}
