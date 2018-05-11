import React, { Component } from 'react';
import './Profile.css';
import avatar from './avatar-dev.png';

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
					<h2>{ user.profile.title }</h2>
					<p>{ user.profile.description }</p>
				</div>

				<div className="profile_section">
					<h2>{ user.objective.title }</h2>
					<p>{ user.objective.description }</p>
				</div>

				<div className="profile_section">
					<h2>{ user.personalSkill.title }</h2>
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
					<h2>{ user.contactMe.title }</h2>
					<div className="profile_address">
						<p>{ user.contactMe.address }</p>
					</div>
					<div className="profile_phone">
						<p>{ user.contactMe.tel }</p>
					</div>
					<div className="profile_contact">
						<p>{ user.contactMe.email }</p>
						<p>{ user.contactMe.webSite }</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Profile;