import React from 'react'
import HeaderButton from './HeaderButton.js'
import './styles.css'

export default ({buttons}) => {
	return (
		<div>
			<ul className="list-unstyled header">
				{buttons.map((item, key) => <HeaderButton to={item.to} text={item.text} />)}
			</ul>
		</div>
	)
}