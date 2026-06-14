import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to   { opacity: 1; transform: scale(1); }
`;

const Wrap = styled.section`
  background: ${({ theme }) => theme.colors.bgSection};
  padding: clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 3rem);
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Inner = styled.div`
  max-width: 680px;
  margin: 0 auto;
  text-align: center;
`;

const IconRing = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.greenMint};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  margin: 0 auto 1.5rem;
`;

const Pill = styled.span`
  display: inline-block;
  padding: 0.3rem 0.9rem;
  background: ${({ theme }) => theme.colors.greenMint};
  color: ${({ theme }) => theme.colors.greenPrimary};
  border-radius: ${({ theme }) => theme.radius.full};
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.7rem, 4vw, 2.4rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: -0.02em;
  margin-bottom: 0.75rem;

  span {
    color: ${({ theme }) => theme.colors.greenPrimary};
    font-style: italic;
  }
`;

const Subtitle = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.65;
  max-width: 460px;
  margin: 0 auto 2rem;
`;

const Form = styled.div`
  display: flex;
  gap: 0.6rem;
  max-width: 480px;
  margin: 0 auto 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 0.85rem 1.25rem;
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.colors.bgCard};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.9rem;
  outline: none;
  transition: all 0.2s ease;

  &::placeholder { color: ${({ theme }) => theme.colors.textMuted}; }

  &:focus {
    border-color: ${({ theme }) => theme.colors.greenPrimary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.greenMint};
  }
`;

const SubscribeBtn = styled.button`
  padding: 0.85rem 1.75rem;
  background: ${({ theme }) => theme.colors.greenPrimary};
  color: #fff;
  border: none;
  border-radius: ${({ theme }) => theme.radius.full};
  font-size: 0.88rem;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
  white-space: nowrap;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.greenDark};
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(45,106,79,0.35);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const Success = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.greenMint};
  border-radius: ${({ theme }) => theme.radius.lg};
  animation: ${fadeIn} 0.3s ease both;
`;

const SuccessIcon = styled.div`
  font-size: 2rem;
`;

const SuccessText = styled.div`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.greenDark};
`;

const SuccessSub = styled.div`
  font-size: 0.82rem;
  color: ${({ theme }) => theme.colors.greenPrimary};
`;

const Privacy = styled.p`
  font-size: 0.72rem;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-top: 0.75rem;
`;

const Perks = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Perk = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};

  span:first-child { font-size: 1rem; }
`;

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (!email.includes('@')) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') handleSubmit();
  };

  return (
    <Wrap>
      <Inner>
        <IconRing>🌿</IconRing>
        <Pill>WEEKLY PLANT TIPS</Pill>
        <Title>
          Grow Smarter, <span>Not Harder</span>
        </Title>
        <Subtitle>
          Get weekly plant care tips, seasonal guides, and expert advice delivered straight to your inbox — completely free.
        </Subtitle>

        {submitted ? (
          <Success>
            <SuccessIcon>🎉</SuccessIcon>
            <SuccessText>You're in! Welcome to the community.</SuccessText>
            <SuccessSub>Check your inbox for a welcome gift 🌱</SuccessSub>
          </Success>
        ) : (
          <>
            <Form>
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={handleKey}
              />
              <SubscribeBtn onClick={handleSubmit} disabled={loading}>
                {loading ? 'Subscribing…' : 'Get Free Tips'}
              </SubscribeBtn>
            </Form>
            <Privacy>🔒 No spam, ever. Unsubscribe anytime.</Privacy>
          </>
        )}

        <Perks>
          <Perk><span>📬</span><span>Weekly care reminders</span></Perk>
          <Perk><span>🌱</span><span>Seasonal planting guides</span></Perk>
          <Perk><span>🎁</span><span>Exclusive member discounts</span></Perk>
          <Perk><span>🆘</span><span>Plant SOS troubleshooting</span></Perk>
        </Perks>
      </Inner>
    </Wrap>
  );
}
