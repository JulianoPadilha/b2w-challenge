import React, { Component } from 'react';
import { CardEducation, CardExperience} from '../card/Card';
import './Content.css';

class Content extends Component {
	render() {
		const userExperiences = this.props.content.experience;
		const userEducations = this.props.content.education;
		const userProfessionalSkills = this.props.content.professionalSkill;

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
								<CardEducation 
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
								<CardExperience 
									key={ index } 
									companyname={ experience.companyName }
									month={ experience.month }
									year={ experience.year }
									role={ experience.roleName }
									companycity={ experience.companyCity }
									description={ experience.description }/>
							)
						})
					}
				</section>
				<section className="professional_skills">
					<h2>{ userProfessionalSkills.title }</h2>
					{	
						userProfessionalSkills.tools.map((tool, index) => {
							return (
								<div className="skill" key={ index }>
									<p className="skill_name">{ tool.toolName }</p>
									<div className="skill_bar">
										<span className="skill_value" style={{ width: tool.toolsSkill+'%' }}></span>
									</div>
								</div>
							)
						})
					}
				</section>
			</div>
		)
	}
}

export default Content;