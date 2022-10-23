export const ImageGalleryItem = ({ smImage, tags }) => {
  return (
    <li>
      <img
        src={smImage}
        alt={tags}
      />
    </li>
  );
};