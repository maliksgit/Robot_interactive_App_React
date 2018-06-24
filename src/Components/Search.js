import React from 'react';
const Search =({searchField,newSearchVeriable})=>{
	return(
		<input type='Search'
		placeholder='Search here'
		onChange={newSearchVeriable}
		/>
	);
}
export default Search;