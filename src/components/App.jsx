import React, { Component } from "react"
import axios from "axios"
import { Searchbar } from "components/Searchbar/Searchbar"
import { ImageGallery } from 'components/ImageGallery/ImageGallery'
import { Button } from "./Button/Button"

const apiKey = "29821254-cc8d55b85aa42c363f8211fb8"


export class App extends Component {
  state = {
    images: [],
    page: 1
  }
 pushImagesToState = (response) => {
    const imagesFromResponse = response.data.hits;
    let newSearchArray = [];
    newSearchArray = [...this.state.images, ...imagesFromResponse];
    this.setState(({ images }) => ({ images: newSearchArray }));
  };

 formSubmitHandler = ({name}) => {
   axios.get(`https://pixabay.com/api/?q=${name}&page=${this.state.page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`)
     .then(response => {
       this.pushImagesToState(response)
     })
    };


  render() {
    let {images} = this.state
    return (
      <>
        <Searchbar onSubmit={this.formSubmitHandler} />
        <ImageGallery images={this.state.images} />
        {images.length > 0 && <Button /> }
        
        
      
      </>
    )
  }
}
