import styled from 'styled-components';

export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #f1f5f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Subtitle = styled.p`
  color: #4b5563;
  margin-top: 0.5rem;
  text-align: center;
`;

export const ProfileImageContainer = styled.div`
  position: relative;
  width: 12rem;
  height: 12rem;
  margin-bottom: 1rem;
  
  &:hover > div {
    opacity: 1;
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 9999px;
  object-fit: cover;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: 4px solid white;
`;

export const ChangePhotoOverlay = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 150ms ease-in-out;
  cursor: pointer;
`;

export const ChangePhotoText = styled.div`
  color: white;
  text-align: center;
  
  p {
    margin-top: 0.25rem;
    font-size: 0.875rem;
    font-weight: 600;
  }
`;

export const FileInput = styled.input`
  display: none;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  padding: 1rem;
`;

export const ModalContent = styled.div`
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  width: 100%;
  max-width: 56rem;
  transform: translateY(0);
  transition: all 0.2s ease-in-out;
`;

export const ModalHeader = styled.div`
  position: relative;
  padding: 1.5rem 2rem;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: #9ca3af;
  transition: color 150ms ease-in-out;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  
  &:hover {
    color: #4b5563;
  }
`;

export const ModalBody = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 0 1.5rem 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem 1.5rem;
  }
`;

export const AdjustSection = styled.div`
  h2 {
    font-size: 1.25rem;
    font-weight: 700;
    color: #1e293b;
  }
  
  p {
    font-size: 0.875rem;
    color: #6b7280;
    margin-top: 0.25rem;
  }
`;

export const CropContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  margin-top: 1rem;
  background-color: #e5e7eb;
  border-radius: 0.5rem;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ChangePhotoButton = styled.button`
  margin-top: 2rem;
  font-size: 0.75rem;
  color: #6b7280;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  text-align: left;
  
  span {
    color: #2563eb;
    font-weight: 600;
    margin-left: 0.25rem;
    text-decoration: underline;
  }
  
  &:hover span {
    color: #1d4ed8;
  }
`;

export const PreviewSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 2rem;
  border-left: 1px solid #e5e7eb;
  
  h2 {
    font-size: 1.25rem;
    font-weight: 700;
    color: #1e293b;
  }
  
  p {
    font-size: 0.875rem;
    color: #6b7280;
    margin-top: 0.25rem;
  }
`;

export const PreviewImage = styled.div`
  position: relative;
  width: 10rem;
  height: 10rem;
  border-radius: 9999px;
  overflow: hidden;
  background-color: #e5e7eb;
  margin-top: 2rem;
  
  canvas {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1.5rem 2rem;
`;

export const SaveButton = styled.button`
  background-color: #2563eb;
  color: white;
  font-weight: 700;
  padding: 0.5rem 1.5rem;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  transition: background-color 150ms ease-in-out;
  
  &:hover {
    background-color: #1d4ed8;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.5);
  }
`;
