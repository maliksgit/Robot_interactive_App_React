import React from 'react';
import App from './App';
const Robotslist =({Robots}) =>{
	return(
		<div>
	{	
		Robots.map((user,i)=>{
		return <App
				key={i}
				id={Robots[i].id}
				name={Robots[i].name}
				email={Robots[i].email}	/>
			})
		}
		</div>
	);
}
export default Robotslist;