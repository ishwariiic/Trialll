import React, { useState, useRef, useEffect } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { getCroppedImg } from '../lib/cropImage';
import { CloseIcon } from './icons.js';
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  CloseButton,
  ModalBody,
  AdjustSection,
  CropContainer,
  ChangePhotoButton,
  PreviewSection,
  PreviewImage,
  ModalFooter,
  SaveButton
} from '../styles';

const ImageCropper = ({ imageSrc, onSave, onClose, openFileDialog }) => {
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [crop, setCrop] = useState();
  const [completedCrop, setCompletedCrop] = useState();

  function onImageLoad(e) {
    const { width, height } = e.currentTarget;
    const newCrop = ReactCrop.centerCrop(
      ReactCrop.makeAspectCrop(
        {
          unit: '%',
          width: 90,
        },
        1,
        width,
        height
      ),
      width,
      height
    );
    setCrop(newCrop);
  }

  useEffect(() => {
    if (
      completedCrop?.width &&
      completedCrop?.height &&
      imgRef.current &&
      previewCanvasRef.current
    ) {
      const image = imgRef.current;
      const canvas = previewCanvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        return;
      }

      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;
      const pixelRatio = window.devicePixelRatio;

      canvas.width = completedCrop.width * pixelRatio;
      canvas.height = completedCrop.height * pixelRatio;

      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      ctx.imageSmoothingQuality = 'high';

      ctx.drawImage(
        image,
        completedCrop.x * scaleX,
        completedCrop.y * scaleY,
        completedCrop.width * scaleX,
        completedCrop.height * scaleY,
        0,
        0,
        completedCrop.width,
        completedCrop.height
      );
    }
  }, [completedCrop]);

  const handleSave = async () => {
    if (completedCrop && imgRef.current) {
      try {
        const croppedImage = await getCroppedImg(imgRef.current, completedCrop);
        onSave(croppedImage);
      } catch (e) {
        console.error(e);
      }
    }
  };
  
  const handleChangePhoto = () => {
    onClose();
    setTimeout(openFileDialog, 100);
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <CloseButton onClick={onClose} aria-label="Close">
            <CloseIcon />
          </CloseButton>
        </ModalHeader>
        <ModalBody>
          <AdjustSection>
            <h2>Adjust photo</h2>
            <p>Drag the box to adjust the position.</p>
            <CropContainer>
              <ReactCrop
                crop={crop}
                onChange={(c) => setCrop(c)}
                onComplete={(c) => setCompletedCrop(c)}
                aspect={1}
                circularCrop
              >
                <img
                  ref={imgRef}
                  alt="Crop me"
                  src={imageSrc}
                  onLoad={onImageLoad}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </ReactCrop>
            </CropContainer>
            <ChangePhotoButton>
              In case you are not satisfied with photo -{' '}
              <span onClick={handleChangePhoto}>Change photo</span>
            </ChangePhotoButton>
          </AdjustSection>

          <PreviewSection>
            <h2>Preview</h2>
            <p>This is how your photo will look.</p>
            <PreviewImage>
              <canvas
                ref={previewCanvasRef}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </PreviewImage>
          </PreviewSection>
        </ModalBody>
        <ModalFooter>
          <SaveButton onClick={handleSave}>
            Save photo
          </SaveButton>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ImageCropper;
