import React from 'react';
import CaptionedImageStyles from '../styles/CaptionedImageStyles';

function CaptionedImage(src, caption, captionPosition) {
  return (captionPosition.toLowerCase() === 'right'
    ? (
      <CaptionedImageStyles>
        <div className="captioned-image-container">
          <div className="captioned-image">
            <img className="image image1" src={src} alt={caption} />
            <h4 className="caption caption1">{caption}</h4>
          </div>
        </div>
      </CaptionedImageStyles>
    ) : (
      <CaptionedImageStyles>
        <div className="captioned-image-container">
          <div className="captioned-image">
            <h4 className="caption caption2">{caption}</h4>
            <img className="image image2" src={src} alt={caption} />
          </div>
        </div>
      </CaptionedImageStyles>
    )
  );
}

export default CaptionedImage;
