import React from 'react'
import { Link } from 'react-scroll'
import './styles.css'

export default ({to, text}) => {
	return (
		<li className="header-item">
			<Link to={to} smooth="easeInOutCubic" duration={1000}><a href="#">{text}</a></Link>
		</li>
	)
}