import React, { Component } from "react"

export class Searchbar extends Component{
     state = {
       name : ""
    }

    render(){
        return (
            <header className="searchbar">
  <form className="form">
    <button type="submit" class="button">
      <span className="button-label">Search</span>
    </button>

    <input
      className="input"
      name="name"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
        )
    }    
    
}