import React, { Component , useState} from "react";

function Search(props) {
  const {SearchMovie} = props
  const [search , setSearch] = useState('panda')
  const [type , setType] = useState('all')


 const  SerachValue = (e) => {
    setSearch( e.target.value)
  };

  const hamdleKey = (e) => {
    if (e.key == "Enter") {
      SearchMovie(search , type);
    }
  };

  const handleFilter = (e) => {
    setType(e.target.dataset.type)
    SearchMovie(search , e.target.dataset.type)
  };

    return (
      <div className="row my-3">
        <br />
        <div className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input
                type="search"
                className="autocomplete"
                placeholder="search..."
                value={search}
                onChange={SerachValue}
                onKeyDown={hamdleKey}
              />
              <button
                className="btn"
                onClick={() => {
                 SearchMovie(search ,type);
                }}
              >
                Serach Mobies
              </button>
            </div>
            <div>
              <label>
                <input
                  className="with-gap"
                  name="type"
                  onChange={handleFilter}
                  data-type="all"
                  type="radio"
                  checked={type == 'all'}
                />
                <span>All</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="type"
                  onChange={handleFilter}
                  data-type="movie"
                  type="radio"
                  checked={type == 'movie'}
                />
                <span>Movies only</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="type"
                  onChange={handleFilter}
                  data-type="series"
                  type="radio"
                  checked={type == 'series'}
                />
                <span>Series only</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Search;
