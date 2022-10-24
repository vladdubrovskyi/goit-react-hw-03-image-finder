import {GalleryItem, GalleryImage } from "components/ImageGalleryItem/ImageGalleryItem.styled"
export const ImageGalleryItem = ({ item, onClick }) => {
  const {webformatURL, tag, largeImageURL} = item;
  return (
    <GalleryItem>
      <GalleryImage 
       src={webformatURL} alt={tag} onClick={() => onClick(largeImageURL)}
      />
    </GalleryItem>
  );
};