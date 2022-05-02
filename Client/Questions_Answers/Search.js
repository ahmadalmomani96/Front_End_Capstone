import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: props.search
    }
  }


  render () {
    return (
      <div className="QnAPadDown" key="search">
        <input type="text" id="searchText" onChange={this.props.searchChange} placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." value={this.props.text} />
      </div>
    )
  }
}

export default Search;