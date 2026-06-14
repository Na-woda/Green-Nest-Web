import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Main = styled.main`
  min-height: 100vh;
`;

export default function PageWrapper({ children, heroPage = false }) {
  const [scrolled, setScrolled] = useState(!heroPage);

  useEffect(() => {
    if (!heroPage) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [heroPage]);

  return (
    <>
      <Main>{children}</Main>
     
    </>
  );
}
