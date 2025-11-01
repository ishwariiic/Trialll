import React, { useState, useRef } from 'react';
import ImageCropper from './components/ImageCropper.jsx';
import { CameraIcon } from './components/icons.js';
import {
  AppContainer,
  Title,
  Subtitle,
  ProfileImageContainer,
  ProfileImage,
  ChangePhotoOverlay,
  ChangePhotoText,
  FileInput
} from './styles';

const App = () => {
  const [imageToCrop, setImageToCrop] = useState(null);
  const [croppedImage, setCroppedImage] = useState(
    'https://picsum.photos/id/237/200/200'
  );
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setImageToCrop(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (croppedImg) => {
    setCroppedImage(croppedImg);
    setImageToCrop(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleClose = () => {
    setImageToCrop(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  
  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <AppContainer>
      <div>
        <Title>Profile Photo Editor</Title>
        <Subtitle>Upload and crop your perfect profile picture.</Subtitle>
      </div>

      <ProfileImageContainer>
        <ProfileImage
          src={croppedImage || 'https://picsum.photos/id/237/200/200'}
          alt="Profile"
        />
        <ChangePhotoOverlay onClick={triggerFileInput}>
          <ChangePhotoText>
            <CameraIcon />
            <p>Change Photo</p>
          </ChangePhotoText>
        </ChangePhotoOverlay>
      </ProfileImageContainer>
      
      <FileInput
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
      />

      {imageToCrop && (
        <ImageCropper
          imageSrc={imageToCrop}
          onSave={handleSave}
          onClose={handleClose}
          openFileDialog={triggerFileInput}
        />
      )}
    </AppContainer>
  );
};

export default App;
