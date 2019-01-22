import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <form className="form-inline">
        <div className="md-form my-0">
          <input className="form-control mr-sm-2" type="text"
                 placeholder="Search" aria-label="Search"/>
        </div>
      </form>
    );
  }
}

export default Search;
