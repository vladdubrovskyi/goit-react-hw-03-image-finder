import React, { Component } from "react"

export class Searchbar extends Component{
     state = {
       name : ""
  }
  
    handleInputChange = event => {
    const {name, value} = event.currentTarget
    this.setState(
      {
        [name]: value,
      })
  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state)
    this.reset()
    
    }

  reset = () => {
        this.setState({
    name: '',
    })
    }

  render() {
       const { name } = this.state
        return (
            <header className="searchbar">
  <form className="form" onSubmit={(e) => {e.preventDefault();
                    this.props.onSubmit(name);
                    this.reset()}}>
    <button type="submit" className="button">
      <span className="button-label">Search</span>
    </button>

    <input
      className="input"
      name="name"
      value={name}
      onChange={this.handleInputChange}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
        )
    }    
    
}