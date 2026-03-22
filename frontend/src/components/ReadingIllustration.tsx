import React from 'react';
import styled from 'styled-components';

const IllustrationContainer = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  margin: 0 auto;
`;

const Svg = styled.svg`
  width: 100%;
  height: 100%;
  overflow: visible;
`;

const ReadingIllustration: React.FC = () => {
  return (
    <IllustrationContainer>
      <Svg viewBox="0 0 200 200">
        {/* Simple Background Blob */}
        <path d="M40.2,-58.3C52.9,-53.4,64.1,-43.8,71.2,-31.8C78.3,-19.8,81.3,-5.4,78.2,7.7C75.1,20.8,65.9,32.6,55.8,42.4C45.7,52.2,34.7,60,22.8,64.2C10.9,68.4,-1.9,69.1,-13.8,65.8C-25.7,62.5,-36.7,55.2,-46.4,45.8C-56.1,36.4,-64.5,24.9,-68.6,11.8C-72.7,-1.3,-72.5,-16,-66.1,-28.9C-59.7,-41.8,-47.1,-52.9,-34.1,-57.6C-21.1,-62.3,-7.7,-60.6,3.6,-66.3L14.9,-72" transform="translate(100 100)" fill="#E0F7FA" />
        
        {/* Book */}
        <rect x="60" y="100" width="80" height="60" rx="5" fill="#8D6E63" transform="rotate(-10 100 130)" />
        <rect x="65" y="105" width="70" height="50" rx="2" fill="#FFF" transform="rotate(-10 100 130)" />
        <line x1="100" y1="105" x2="100" y2="155" stroke="#DDD" strokeWidth="2" transform="rotate(-10 100 130)" />
        
        {/* Kid Head */}
        <circle cx="100" cy="80" r="35" fill="#FFCCBC" />
        
        {/* Hair */}
        <path d="M65,80 Q60,50 85,45 Q115,40 135,80 Z" fill="#5D4037" />
        
        {/* Eyes */}
        <circle cx="90" cy="80" r="3" fill="#333" />
        <circle cx="110" cy="80" r="3" fill="#333" />
        
        {/* Smile */}
        <path d="M95,90 Q100,95 105,90" stroke="#333" strokeWidth="2" fill="none" />
        
        {/* Hands holding book */}
        <circle cx="60" cy="130" r="10" fill="#FFCCBC" />
        <circle cx="140" cy="120" r="10" fill="#FFCCBC" />

      </Svg>
    </IllustrationContainer>
  );
};

export default ReadingIllustration;
