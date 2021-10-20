import React from 'react';

function Searchbox(props) {
    const {setQuery,query,search}= props;
    return (<div className="search-box">
            <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
            />
  </div>)}

export default Searchbox;
