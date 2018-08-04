import React, {Component} from 'react';
import axios from 'axios';
import { Modal } from 'react-bootstrap';
export default class Feature extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			items: [],
		};
		this.open = this.open.bind(this);
		this.close = this.close.bind(this);
	}
	close() {
		this.setState({ showModal: false });
	}
	open() {
		this.setState({ showModal: true });
	}
	
	componentDidMount() {
		let pictureData = 'https://raw.githubusercontent.com/adambodie/Art-Showcase/master/data/showcase.json';
		  axios.get(pictureData)
			.then(response => {
				let random = Math.floor(Math.random() * 120);
				this.setState({
					items: response.data[random]
				});
			})
			.catch(error => {
			  console.log('Error fetching and parsing Items data', error);
			});
		}	
	
	render(){
		return (
		<div id="feature">
			<img src={this.state.items.image}  className="img-responsive" alt={this.state.items.title} onClick={this.open}/>
			<h3>{this.state.items.title}</h3>
			<Modal show={this.state.showModal} onHide={this.close} >
			<div className="dialogStyle">
				<div className="dialogHeader">
					<h3>{this.state.items.title}</h3>
					<button type="button" onClick={this.close}></button>
				</div>
				<div className="dialog">
					<div className="dialogImage">
					<img src={this.state.items.image} className="img-responsive" alt={this.state.items.title}/>
				</div>
				<div className="dialogDescription">
					<p>Type: {this.state.items.types}</p>
					<p>Color: {this.state.items.color}</p>
					<p>Medium: {this.state.items.medium}</p>
					<p>Description: {this.state.items.description}</p>
				</div>
            </div>
          </div>
        </Modal>
		
	</div>
	)
	}
	
}

