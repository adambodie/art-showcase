import React, {Component} from 'react';
import PictureList from '../data/pictures.js';
import { Modal } from 'react-bootstrap';

let random = Math.floor(Math.random() * PictureList.length);

export default class Feature extends Component {

	  constructor(props) {
		super(props);
		this.state = {showModal: false};
		this.open = this.open.bind(this);
		this.close = this.close.bind(this);
	  }
	close(){
		this.setState({ showModal: false });
	}

	open(){
		this.setState({ showModal: true });
	}
	
	render(){

	return (
	<div id="feature">
		<img src={`img/${PictureList[random].image}`}  className="img-responsive" alt={PictureList[random].title} onClick={this.open}/>
		<h3>{PictureList[random].title}</h3>
		
		<Modal
          show={this.state.showModal}
          onHide={this.close}
        >
        <div className="dialogStyle">
        <div className="dialogHeader">
			<h3>{PictureList[random].title}</h3>
			<button type="button" onClick={this.close}></button>
        </div>
            <div className="dialog">
				<div className="dialogImage">
					<img src={`img/${PictureList[random].image}`} className="img-responsive" alt={PictureList[random].title}/>
				</div>
				<div className="dialogDescription">
					<p>Type: {PictureList[random].types}</p>
					<p>Color: {PictureList[random].color}</p>
					<p>Medium: {PictureList[random].medium}</p>
					<p>Description: {PictureList[random].description}</p>
				</div>
            </div>
          </div>
        </Modal>
		
	</div>
	)
	}
	
}

