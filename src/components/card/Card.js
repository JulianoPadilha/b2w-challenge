import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
	render() {
		return (
			<div className="card">
				<h2 className="card_title">{ this.props.name }</h2>
				<span className="card_date">{ this.props.month }</span>
				<span className="card_year">{ this.props.year }</span>
				<p className="card_description">{ this.props.description }</p>
				<p className="card_university_city">{ this.props.universitycity }</p>
				<p className="card_university_name">{ this.props.universityname }</p>
			</div>
		)
	}
}

class Card2 extends Component {
	render() {
		return (
			<div className="card">
				<h2 className="card_title">{ this.props.name }</h2>
				<span className="card_date">{ this.props.month }</span>
				<span className="card_year">{ this.props.year }</span>
				<p className="card_description">{ this.props.description }</p>
				<p className="card_university_city">{ this.props.universitycity }</p>
				<p className="card_university_name">{ this.props.universityname }</p>
			</div>
		)
	}
}

export default Card;
