import React, { Component } from "react"
import './styles.css'
import {Searchbar} from "components/Searchbar/Searchbar"

export class App extends Component {
  state = {
  images: [],
  }
  render() {
    return (
      <>
        <Searchbar/>
      </>
    )
  }
}
