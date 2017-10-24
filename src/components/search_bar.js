import React, { Component } from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = { term: '' }
  }

  handelInputChange(event){
    const term = event.target.value;
    this.setState({term})
    this.props.onSearchTermChange(term)
  }

  render(){
    return (
      <div className="search-bar">
        <input onChange={this.handelInputChange.bind(this)} />
      </div>
    );
  }
}

export default SearchBar;