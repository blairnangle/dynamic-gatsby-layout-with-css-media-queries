import CaptionedImage from '../components/CaptionedImage';
import cat from '../images/cat.jpg';
import dog from '../images/dog.jpg';

const IndexPage = () => {
  const captionedImages = [
    {
      src: cat,
      caption: 'cat caption to the right of (or underneath) image',
      captionPosition: 'right',
    },
    {
      src: dog,
      caption: 'dog caption to the left of (or underneath) image',
      captionPosition: 'left',
    },
  ];

  return (
    captionedImages.map((ci) => CaptionedImage(ci.src, ci.caption, ci.captionPosition))
  );
};

export default IndexPage;
