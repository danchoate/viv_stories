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

const About: React.FC = () => {
  return (
    <AboutContainer>
      <Title>Welcome to My Story Corner!</Title>
      <Text>
        Hi! I'm Viv. I love reading and making up stories. 
        This website is where I keep all my favorite adventures so I can share them with you. 
        I hope you enjoy reading them as much as I enjoyed writing them!
      </Text>
    </AboutContainer>
  );
};

export default About;
