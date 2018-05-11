import React, { Component } from 'react';
import Card from '../card/Card';
import './Content.css';

class Content extends Component {
	render() {
		const userExperiences = this.props.content.experience;
		const userEducations = this.props.content.education;

		const changePages = () => {
			const content = document.querySelector('.content'),
				  sidebar = document.querySelector('.sidebar');

			sidebar.classList.add('isVisible');
			sidebar.classList.remove('isInvisible');
			content.classList.add('isInvisible');
		}

		return (
			<div className="content">
				<i onClick={ changePages } className="fas fa-exchange-alt"></i>
				<section className="section">
					<h1>{ userEducations.title }</h1>
					{
						userEducations.university.map((education, index) => {
							return (
								<Card 
									key={ index } 
									name={ education.courseName }
									month={ education.month }
									year={ education.year }
									universityname={ education.universityName }
									universitycity={ education.universityCity }
									description={ education.description }/>
							)
						})
					}
				</section>
				<section className="section">
					<h1>{ userExperiences.title }</h1>
					{
						userExperiences.company.map((experience, index) => {
							return (
								<Card 
									key={ index } 
									name={ experience.name }
									date={ experience.date }
									description={ experience.description }/>
							)
						})
					}
				</section>
			</div>
		)
	}
}

export default Content;