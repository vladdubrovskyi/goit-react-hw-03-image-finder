export const ImageGallery = ({ images }) => {
    return <ul className="gallery">
  {images.map(image => {return (<li key={image.id} className="gallery-item">
  <img src={image.webformatURL} alt={image.tags} />
</li>)})}
</ul>
}