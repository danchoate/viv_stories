import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  background-color: white;
  padding: 1rem 2rem;
  margin: 0.5rem auto;
  border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.1);
  text-align: center;
  max-width: 800px;
`;

const Title = styled.h2`
  color: var(--secondary-accent);
  font-size: 2rem;
`;

const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  text-align: left;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

const LargeIcon = styled.img`
  width: 150px;
  height: auto;
  border-radius: 50%;
  border: 4px solid var(--accent-color);
`;

const TextContainer = styled.div`
  flex: 1;
`;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <Title>Welcome to My Story Corner!</Title>
      <Content>
        <LargeIcon src="/corgi_icon.png" alt="Viv's Corgi Icon" />
        <TextContainer>
          <Text>
            Hi! I'm Viv. I love reading and making up stories. 
            This website is where I keep all my favorite adventures so I can share them with you. 
            I hope you enjoy reading them as much as I enjoyed writing them!
          </Text>
        </TextContainer>
      </Content>
    </AboutContainer>
  );
};

export default About;
