import React, { Component } from 'react';
import { CardEducation, CardExperience} from '../card/Card';
import './Content.css';

// Images
import educationImg from '../../assets/education.png';
import experienceImg from '../../assets/experience.png';
import professionalSkillImg from '../../assets/professionalskill.png';
import awardImg from '../../assets/award.png';


class Content extends Component {
	render() {
		const userContent = this.props.content;

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
					<div className="title">
						<div className="img_wrapper">
							<img className="background_icon" src={ educationImg } alt="Education Icon" />
						</div>
						<h1>{ userContent.education.title }</h1>
					</div>
					{
						userContent.education.university.map((education, index) => {
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
					<div className="title">
						<div className="img_wrapper">
							<img className="background_icon" src={ experienceImg } alt="Experience Icon" />
						</div>
						<h1>{ userContent.experience.title }</h1>
					</div>
					{
						userContent.experience.company.map((experience, index) => {
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
				<section className="section professional_skills">
					<div className="title">
						<div className="img_wrapper">
							<img className="background_icon" src={ professionalSkillImg } alt="Professional Skill Icon" />
						</div>
						<h1>{ userContent.professionalSkill.title }</h1>
					</div>
					{	
						userContent.professionalSkill.tools.map((tool, index) => {
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
				<section className="section">
					<div className="title">
						<div className="img_wrapper">
							<img className="background_icon" src={ awardImg } alt="Award Icon" />
						</div>
						<h1>{ userContent.award.title }</h1>
					</div>
					<div className="card">
						<h2 className="card_title">{ userContent.award.awardName }</h2>
						<span className="card_date">{ userContent.award.month }</span>
						<span className="card_year">{ userContent.award.year }</span>
						<p className="">{ userContent.award.description }</p>
						<p className="">{ userContent.award.projectName }</p>
						<p className="">{ userContent.award.city }</p>
					</div>
				</section>
			</div>
		)
	}
}

export default Content;