import styled from 'styled-components';

const CaptionedImageStyles = styled.header`
  .captioned-image-container {
    @media (min-width: 768px) {
      .captioned-image {
        align-items: center;
        display: flex;
        flex-direction: row;
        padding: 60px;
        justify-content: center;
      }
      .image {
        padding-left: 20px;
        padding-right: 20px;
        max-width: 500px
      }
      .image.image1 {
        order: 1
      }
      .image.image2 {
        order: 2
      }
      .caption {
        padding-left: 20px;
        padding-right: 20px;
      }
      .caption.caption1 {
        order: 2
      }
      .caption.caption2 {
        order: 1
      }
    }
    @media (max-width: 767px) {
      .captioned-image {      
        align-items: center;
        display: flex;
        flex-direction: column;
        padding: 10px;
        justify-content: center;
      }
      .image {
        max-width: 100%;
        height: auto;
      }
      .image.image1 {
        order: 1;
      }
      .image.image2 {
        order: 1;
      }
      .caption {
        padding: 10px;
      }
      .caption.caption1 {
        order: 2;
      }
      .caption.caption2 {
        order: 2;
      }
    }
  }
`;

export default CaptionedImageStyles;
