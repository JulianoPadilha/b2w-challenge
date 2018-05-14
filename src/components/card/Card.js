import React, { Component } from 'react';
import './Card.css';

export class CardEducation extends Component {
	render() {
		return (
			<div className="card">
				<div className="card_date">
					<span className="card_month">{ this.props.month }</span>
					<span className="card_year">{ this.props.year }</span>
				</div>
				<div className="card_content">
					<h2 className="card_title">{ this.props.name }</h2>
					<span className="card_subtitle">{ this.props.universityname }, { this.props.universitycity }</span>
					<p className="card_description">{ this.props.description }</p>
				</div>
			</div>
		)
	}
}

export class CardExperience extends Component {
	render() {
		return (
			<div className="card">
				<div className="card_date">
					<span className="card_month">{ this.props.month }</span>
					<span className="card_year">{ this.props.year }</span>
				</div>
				<div className="card_content">
					<h2 className="card_title">{ this.props.role }</h2>
					<span className="card_subtitle">{ this.props.companyname }, { this.props.companycity }</span>
					<p className="card_description">{ this.props.description }</p>
				</div>
			</div>
		)
	}
}
