import React from 'react'
import { Link } from 'react-scroll'
import './styles.css'

export default ({to, text}) => {
	return (
		<li className="header-item">
			<Link to={to} smooth="easeInOutCubic" duration={800}><a href="#">{text}</a></Link>
		</li>
	)
}