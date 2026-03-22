import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import About from './components/About';
import StoryList from './components/StoryList';

const AppContainer = styled.div`
  min-height: 100vh;
  padding-bottom: 2rem;
`;

const Footer = styled.footer`
  text-align: center;
  margin-top: 4rem;
  color: #888;
  font-size: 0.9rem;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <Header />
      
      <About />
      
      <StoryList />

      <Footer>
        &copy; {new Date().getFullYear()} Stories by Viv. Made with ❤️
      </Footer>
    </AppContainer>
  );
};

export default App;
