import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface Story {
  id: string;
  title: string;
  description: string;
  content?: string;
}

const StoriesContainer = styled.section`
  padding: 1rem 2rem 2rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: var(--text-color);
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const StoryCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 20px;
  box-shadow: 3px 3px 0px var(--secondary-accent);
  border: 2px solid var(--text-color);
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 5px 5px 0px var(--secondary-accent);
  }
`;

const StoryTitle = styled.h3`
  margin-top: 0;
  color: var(--text-color);
`;

const StoryDescription = styled.p`
  color: #555;
  flex-grow: 1;
`;

const ReadButton = styled.button`
  background-color: var(--accent-color);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  cursor: pointer;
  font-family: inherit;
  font-size: 1.1rem;
  margin-top: 1rem;
  align-self: flex-start;
  &:hover {
    filter: brightness(0.9);
  }
`;

const StoryModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
`;

const ModalContent = styled.div`
  background: var(--bg-color);
  padding: 2rem;
  border-radius: 20px;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 5px 5px 15px rgba(0,0,0,0.3);
  border: 4px solid var(--accent-color);
`;

const CloseButton = styled.button`
  position: sticky;
  top: -10px;
  right: -10px;
  float: right;
  background: var(--secondary-accent);
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: white;
`;

const LargeIcon = styled.img`
  width: 100px;
  height: auto;
  margin: 0 auto 1rem auto;
  display: block;
  border-radius: 50%;
  border: 3px solid var(--secondary-accent);
`;

const StoryBody = styled.div`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-top: 1rem;
  img { max-width: 100%; }
`;

const StoryList: React.FC = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  useEffect(() => {
    fetch('http://localhost:5001/api/stories')
      .then(res => res.json())
      .then(data => {
        setStories(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch stories:', err);
        setLoading(false);
      });
  }, []);

  const handleRead = (id: string) => {
    fetch(`http://localhost:5001/api/stories/${id}`)
      .then(res => res.json())
      .then(data => setSelectedStory(data))
      .catch(err => console.error('Error fetching story detail:', err));
  };

  if (loading) return <p style={{textAlign: 'center'}}>Loading stories...</p>;

  return (
    <StoriesContainer id="stories">
      <SectionTitle>My Stories</SectionTitle>
      {stories.length === 0 ? (
        <p style={{textAlign: 'center'}}>No stories yet. Check back soon!</p>
      ) : (
        <Grid>
          {stories.map(story => (
            <StoryCard key={story.id}>
              <StoryTitle>{story.title}</StoryTitle>
              <StoryDescription>{story.description}</StoryDescription>
              <ReadButton onClick={() => handleRead(story.id)}>Read Story</ReadButton>
            </StoryCard>
          ))}
        </Grid>
      )}

      {selectedStory && (
        <StoryModal onClick={() => setSelectedStory(null)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <CloseButton onClick={() => setSelectedStory(null)}>&times;</CloseButton>
            <h1>{selectedStory.title}</h1>
            <StoryBody dangerouslySetInnerHTML={{ __html: selectedStory.content || '' }} />
          </ModalContent>
        </StoryModal>
      )}
    </StoriesContainer>
  );
};

export default StoryList;
