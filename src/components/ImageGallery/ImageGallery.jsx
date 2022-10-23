import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
export const ImageGallery = ({ images }) => {
  const renderGallery = () =>
    images.map(({ id, webformatURL, tags }) => (
      <ImageGalleryItem
        key={id}
        tags={tags}
        smImage={webformatURL}
      />
    ));

  return (
    <div>
      <ul >{images ? renderGallery() : null}</ul>
    </div>
  );
};
