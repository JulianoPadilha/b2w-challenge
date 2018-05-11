import React from 'react';

const Skills = (props) => {
	const user = props.user;

	// Title is the first item from skills object. As we don't want to show this item in the skill's list, then we use it as a comparator in our filter 
	const title = 'title';

	return (
		<div>
			<h2>{ user.title }</h2>
			{	
				Object.keys(user).filter(item => item !== title).map((skill, index) => {
					return (
						<div className="skill" key={ index }>
							<p className="skill_name">{ skill }</p>
							<div className="skill_bar">
								<span className="skill_value" style={{ width: user[skill]+'%' }}></span>
							</div>
						</div>
					)
				})
			}
		</div>
	)
}

export default Skills;