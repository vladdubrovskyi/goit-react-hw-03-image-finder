import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import {GalleryList} from "components/ImageGallery/ImageGallery.styled"
export const ImageGallery = ({ images, onClick }) => {
  return (<GalleryList>
            {images.map(image => {
                return <ImageGalleryItem key={image.id} item={image} onClick={onClick}/>})}
  </GalleryList>)

};
