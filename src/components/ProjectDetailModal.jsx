import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { useState } from "react";

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(2, 6, 12, 0.92);
  backdrop-filter: blur(12px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const ModalContainer = styled(motion.div)`
  max-width: 1100px;
  width: 90%;
  max-height: 90vh;
  background: linear-gradient(135deg, #0b0e17 0%, #06080f 100%);
  border: 1px solid #00ff9d;
  border-radius: 24px;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 0 50px rgba(0, 255, 157, 0.2);
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: #1a1f2a;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: #00ff9d;
    border-radius: 3px;
  }
`;

const CloseButton = styled.button`
  position: sticky;
  top: 20px;
  right: 20px;
  float: right;
  background: #0a0e14cc;
  backdrop-filter: blur(8px);
  border: 1px solid #00ff9d;
  border-radius: 40px;
  width: 40px;
  height: 40px;
  font-size: 24px;
  color: #00ff9d;
  cursor: pointer;
  z-index: 10;
  transition: all 0.2s ease;
  
  &:hover {
    background: #00ff9d20;
    box-shadow: 0 0 15px #00ff9d;
    transform: scale(1.05);
  }
`;

const Content = styled.div`
  padding: 32px;
  clear: both;
`;

const Title = styled.h2`
  font-size: 32px;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  background: linear-gradient(135deg, #00ff9d, #00b8ff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  display: inline-block;
`;

const HashBadge = styled.div`
  font-family: 'Fira Code', monospace;
  font-size: 12px;
  color: #00ff9d80;
  background: #00ff9d10;
  padding: 4px 12px;
  border-radius: 20px;
  display: inline-block;
  margin-left: 16px;
`;

const FullDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #c0d0d0;
  margin: 24px 0;
  white-space: pre-wrap;
`;

const GallerySection = styled.div`
  margin: 32px 0;
`;

const GalleryTitle = styled.h3`
  font-size: 18px;
  font-family: 'Fira Code', monospace;
  color: #00ff9d;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid #1f3a3a;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: scale(1.02);
    border-color: #00ff9d;
    box-shadow: 0 0 15px #00ff9d40;
  }
`;

const FullImageModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const FullImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  border-radius: 8px;
  border: 2px solid #00ff9d;
`;

const StackSection = styled.div`
  margin: 24px 0;
`;

const StackTitle = styled.h4`
  font-size: 14px;
  font-family: 'Fira Code', monospace;
  color: #4a8a7a;
  margin-bottom: 12px;
`;

const StackTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const StackTag = styled.span`
  font-size: 12px;
  font-family: 'Fira Code', monospace;
  background: #00ff9d10;
  color: #00ff9d;
  padding: 6px 14px;
  border-radius: 20px;
  border: 0.5px solid #00ff9d30;
`;

const ExternalLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: #00ff9d15;
  border: 1px solid #00ff9d;
  padding: 12px 24px;
  border-radius: 40px;
  color: #00ff9d;
  text-decoration: none;
  font-family: 'Fira Code', monospace;
  font-weight: 600;
  transition: all 0.2s ease;
  margin-top: 24px;
  
  &:hover {
    background: #00ff9d30;
    box-shadow: 0 0 20px #00ff9d;
    gap: 16px;
  }
`;

export default function ProjectDetailModal({ project, onClose }) {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const projectHash = project.title
    .split('')
    .reduce((acc, char) => acc + char.charCodeAt(0), 0)
    .toString(16)
    .toUpperCase()
    .slice(0, 6);
  
  const images = project.images || [project.image];
  
  return (
    <AnimatePresence>
      <Overlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <ModalContainer
          initial={{ scale: 0.9, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 50 }}
          onClick={(e) => e.stopPropagation()}
        >
          <CloseButton onClick={onClose}>✕</CloseButton>
          <Content>
            <Title>
              &lt;{project.title} /&gt;
              <HashBadge>0x{projectHash}</HashBadge>
            </Title>
            
            <FullDescription>
              {project.fullDescription || project.description || "Полное описание проекта пока не добавлено."}
            </FullDescription>
            
            {images.length > 0 && (
              <GallerySection>
                <GalleryTitle>
                  <span>📸</span> GALLERY
                </GalleryTitle>
                <GalleryGrid>
                  {images.map((img, idx) => (
                    <GalleryImage
                      key={idx}
                      src={img}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      onClick={() => setSelectedImage(img)}
                    />
                  ))}
                </GalleryGrid>
              </GallerySection>
            )}
            
            <StackSection>
              <StackTitle>⚙️ TECH STACK</StackTitle>
              <StackTags>
                {project.stack.split(",").map((tech) => (
                  <StackTag key={tech.trim()}>{tech.trim()}</StackTag>
                ))}
              </StackTags>
            </StackSection>
            
            {project.link && (
              <ExternalLink href={project.link} target="_blank" rel="noopener noreferrer">
                <span>⟫ DEPLOY ⟫</span> перейти на сайт проекта
              </ExternalLink>
            )}
          </Content>
        </ModalContainer>
      </Overlay>
      
      {selectedImage && (
        <FullImageModal onClick={() => setSelectedImage(null)}>
          <FullImage src={selectedImage} alt="Full size" />
        </FullImageModal>
      )}
    </AnimatePresence>
  );
}