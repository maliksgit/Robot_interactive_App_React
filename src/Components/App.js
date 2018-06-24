import React from 'react';
const App =({name,email,id})=>{
	return (
		<div className='bg-light-blue tc grow shadow-5 ma3 pa3 br3 dib' >
			<img src={`https://robohash.org/${id}?size=200x200`} alt='robotsimg' />
			<h1> {id} </h1>
			<h1> {name} </h1>
			<h2> {email} </h2>
		</div>
	);
}
export default App;