import React, { Component } from 'react';
import './Profile.css';

// Images
import avatar from './avatar-dev.png';
import profileImg from '../../assets/profile.png';
import objectiveImg from '../../assets/objective.png';
import personalSkillImg from '../../assets/personalskill.png';
import contactImg from '../../assets/contact.png';
import addressImg from '../../assets/address.png';
import phoneImg from '../../assets/tel.png';
import emailImg from '../../assets/email.png';
import websiteImg from '../../assets/webSite.png';


class Profile extends Component {
	render() {
		const user = this.props.userInfos;

		// Title is the first item from skills object. As we don't want to show this item in the skill's list, then we use it as a comparator in our filter 
		const title = 'title';

		return (
			<div className="profile">
				<figure className="profile_avatar">
					<img src={ avatar } alt="Avatar"/>
				</figure>
				<div className="profile_details">
					<h1>{ user.name }</h1>
					<h4>{ user.profession }</h4>
				</div>

				<div className="profile_section">
					<div className="title">
						<div className="img_wrapper">
							<img className="background_icon" src={ profileImg } alt="Profile Icon" />
						</div>
						<h2>{ user.profile.title }</h2>
					</div>
					<p>{ user.profile.description }</p>
				</div>

				<div className="profile_section">
					<div className="title">
						<div className="img_wrapper">
							<img className="background_icon" src={ objectiveImg } alt="Objective Icon" />
						</div>
						<h2>{ user.objective.title }</h2>
					</div>
					<p>{ user.objective.description }</p>
				</div>

				<div className="profile_section">
					<div className="title">
						<div className="img_wrapper">
							<img className="background_icon" src={ personalSkillImg } alt="Personal Skills Icon" />
						</div>
						<h2>{ user.personalSkill.title }</h2>
					</div>
					{	
						Object.keys(user.personalSkill).filter(item => item !== title).map((skill, index) => {
							return (
								<div className="skill" key={ index }>
									<p className="skill_name">{ skill }</p>
									<div className="skill_bar">
										<span className="skill_value" style={{ width: user.personalSkill[skill]+'%' }}></span>
									</div>
								</div>
							)
						})
					}
				</div>

				<div className="profile_section">
					<div className="title">
						<div className="img_wrapper">
							<img className="background_icon" src={ contactImg } alt="Contact Icon" />
						</div>
						<h2>{ user.contactMe.title }</h2>
					</div>
					<div className="profile_contact">
						<img src={ addressImg } alt="Address Icon" />
						<p>{ user.contactMe.address }</p>
					</div>
					<div className="profile_contact">
						<img src={ phoneImg } alt="Phone Icon" />
						<p>{ user.contactMe.tel }</p>
					</div>
					<div className="profile_contact">
						<img src={ emailImg } alt="Email Icon" />
						<p>{ user.contactMe.email }</p>
					</div>
					<div className="profile_contact">
						<img src={ websiteImg } alt="Website Icon" />
						<p>{ user.contactMe.webSite }</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Profile;