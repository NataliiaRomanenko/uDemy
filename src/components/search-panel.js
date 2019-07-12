import React from 'react';

const SearchPanel = ()=> {
    const searchText = 'Type here to search';
    const searchStyles = {
        fontSize: '20px',
    };
    return <input type="text"
                  style={searchStyles}
                  placeholder={searchText}/>
};

export default SearchPanel;
