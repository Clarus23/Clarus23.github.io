import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  flex: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 1.5rem;
  }
`;

export default Layout;
