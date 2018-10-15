import React from 'react';

class SearchTool extends React.PureComponent {

  render() {
    return(
      <div className="search-tool">
        <div id="search-input">
          <div class="input-group">
            <input type="text" class="form-control input-lg" placeholder="Search..." />
            <span class="input-group-btn">
              <button class="btn btn-info btn-lg" type="button">
                <i class="fa fa-search"></i>
              </button>
            </span>
            </div>
        </div>
      </div>
    );
  }
}

export default SearchTool;
