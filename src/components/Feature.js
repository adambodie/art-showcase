import React, {Component} from 'react';
import axios from 'axios';
import {
  Link, Route
} from 'react-router-dom'
import Picture from './Picture.js';
export default class Feature extends Component {

	constructor(props) {
		super(props);
		this.state = {
			item: [],
		};
}
	componentDidMount() {
		let pictureData = 'https://raw.githubusercontent.com/adambodie/Art-Showcase/develop/src/data/data.json';
		  axios.get(pictureData)
			.then(response => {
				let random = Math.floor(Math.random() * 120);
				this.setState({
					item: response.data[random]
				});
			})
			.catch(error => {
			  console.log('Error fetching and parsing Items data', error);
			});
		}	
	
	render(){
		let item = this.state.item;
		let route = <Route exact path={"/pictures/" + item.link} render={() => 
				<Picture title={item.title} image={item.image} types={item.types} color={item.color} medium={item.medium} description={item.description} />
				}/>
		return (
		<div id="feature">
		<Link to={`/pictures/${item.link}`}>
			<img src={item.image}  className="img-responsive" alt={item.title} onClick={this.open}/>
			<h3>{item.title}</h3>
		</Link>
		{route}
	</div>
	)
	}
	
}

