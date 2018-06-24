import React, {Component} from 'react';
import Scroll from '../Components/Scroll';	
import Search from '../Components/Search';
import Robotslist from '../Components/Robotslist';
class Mainapp extends Component{
	constructor(){
		super()
			this.state={
				Robots:[],
				searchField:''
						}
			}
	
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>{
			return response.json();
			})
			.then(users=>{
				this.setState({Robots:users})
			});
	}
	
	onSearchChanged=(event)=>{
		this.setState({searchField:event.target.value});
	}
	
	render(){
	const {searchField,Robots}=this.state;
		const filteredArray=Robots.filter(Robots=>{
			return Robots.name.toLowerCase().includes(searchField.toLowerCase());
		})
		return(
		<div>
			<h1> Search Robots Here </h1>
			<Search newSearchVeriable={this.onSearchChanged}/>
			<Scroll>
				<Robotslist Robots={filteredArray} />
			</Scroll>
</div>
		);
	}
}
export default Mainapp;