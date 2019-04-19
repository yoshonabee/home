import React from 'react'
import Header from './Header.js'
import { IoLogoGithub, IoLogoFacebook, IoLogoInstagram, IoMdMail, IoIosCheckmarkCircle, IoIosCheckmarkCircleOutline, IoIosRadioButtonOff } from "react-icons/io";
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import './styles.css'

const headerButtons = [{'to': 'home', 'text': 'Home'},
					   {'to': 'skills', 'text': 'Skills'},
					   {'to': 'experiences', 'text': 'Experiences'},
					   {'to': 'projects', 'text': 'Projects'},
					   {'to': 'awards', 'text': 'Awards'},]

const interests = ['Programming', 'Machine / Deep Leaning', 'Guitar', 'Piano']

const skills = {'Natural Languages': ['Mandarin Chinese (native)', 'English', 'Taiwanese (native)'],
				'Programming Languages': ['Python', 'C', 'C++', 'Java', 'Javascript', 'Arduino'],
				'Operating System': ['Linux (Ubuntu)', 'Mac OS', 'Windows'],
				'Deep Learning Libraries': ['Pytorch', 'Keras'],
				'Web Developing Framworks': ['React'],
				'Instruments': ['Piano', 'Acoustic Guitar']
				}

const aboutme = "Studying at National Taiwan University (NTU), I am now a junior in Department of Bio-Mechatronics Engineering (BME). I am also a undergraduated reseacher in the Speech Processing and Machine Learning Laboratory, under the supervision of Prof. Hung-Yi Lee, concentrating on machine learning/deep learning and other audio process techniques."

const projects = [{'title': 'Multi-Agent Controlling with Reinforcement Learning', 'ongoing': 'true', 'description': 'Agent controlling using reinforcement learning has been a big issue in recent years. However, multi-agent controlling is still a big problem. We propose to use Actor-Critic and Deep-Q-Learning to accomplish the task.'},
				  {'title': 'Music Source Separation', 'ongoing': 'true', 'description': 'Proposed to separate different sources from musics by using deep learning based methods.'},
				  {'title': 'Video Caption Generation', 'description': 'Can machine learn to watch a video? In this project, we proposed a seq-to-seq model using Transformer to generate captions from video.'}]

class Blog extends React.Component {
	render() {
		return (
			<div>
				<aside>
					<div className="head-img"></div>
					<div className="header-line"></div>
					<Header buttons={headerButtons} />
				</aside>

				<div className="container">
					<div id="home" className="background block">
						<div className="triangle"></div>
						<div className="intro">
							<h3>杜杰翰 Chieh-Han Tu</h3>
							<div className="name-line"></div>
							<ul className="list-unstyled intro-list">
								<li>National Taiwan University (NTU)</li>
								<li>Department of Bio-Mechatronics Engineering (BME)</li>
								<li><b>Contact : </b><a href="mailto:jhann0120@gmail.com">jhann0120@gmail.com</a></li>

								<ul className="list-inline intro-list">
								<li className="list-inline-item"><a href="https://www.facebook.com/100000487793246/" target="_blank"><IoLogoFacebook className="icon-custom" /></a></li>
								<li className="list-inline-item"><a href="https://www.instagram.com/jhann0120/" target="_blank"><IoLogoInstagram className="icon-custom" /></a></li>
								<li className="list-inline-item"><a href="https://github.com/yoshonabee/" target="_blank"><IoLogoGithub className="icon-custom" /></a></li>
								<li className="list-inline-item"><a href="mailto:jhann0120@gmail.com"><IoMdMail className="icon-custom" /></a></li>
								</ul>
							</ul>
						</div>
					</div>
					
					<div id="aboutme" className="block">
						<h3>About me</h3>
						<div className="under-line"></div>
						<p>{aboutme}</p>
					</div>

					<div id="skills" className="block">
						<h3>Skills</h3>
						<div className="under-line"></div>
						<ul className="list-unstyled">
							{Object.keys(skills).map((i, k) => {
								return (
									<ul className="list-inline">
										<li className="list-inline-item"><b>{i}:</b></li>
										{skills[i].map((item, key) => (<li className="list-inline-item">{item}</li>))}
									</ul>
								)
							})}
						</ul>
					</div>

					<div id="experiences" className="block">
						<h3>Experiences</h3>
						<div className="under-line"></div>
						<div>
							<h5><small>Undergraduated Researcher</small></h5>
							<h5>Speech Processing and Machine Learning Laboratory, Prof. Hung Yi Lee</h5>
							<h6><small>09/2018 - Present | Taipei, Taiwan</small></h6>
							<div className="block-item">
								<div className="block-item margin-bottom">
									<p><b>Music Source Separation</b><br/>
									Proposed to separate different sources from musics by using deep learning based methods
									</p>
								</div>
							</div>
						</div>
					</div>

					<div id="projects" className="block">
						<h3>Projects</h3>
						<div className="under-line"></div>

						{projects.map((item, key) => {
							if (item.ongoing !== 'true')
								return (
									<div className="margin-bottom">
										<h5><b>{item.title}</b> <IoIosCheckmarkCircle className="check-icon" /></h5>
										<p>{item.description}</p>
									</div>
								)
							else
								return (
									<div className="margin-bottom">
										<h5><b>{item.title}</b> <IoIosRadioButtonOff /></h5>
										<p>{item.description}</p>
									</div>
								)
								
						})}
						<p className="comment"><IoIosCheckmarkCircle className="check-icon" />: Completed | <IoIosRadioButtonOff />: In progress</p>
					</div>

					<div id="awards" className="block">
						<h3>Honors and Awards</h3>
						<div className="under-line"></div>
						<div>
							<h5><b>Machine Learning / Deep Learning</b></h5>
							<div className="block-item">
								<ul className="list-unstyled">
								</ul>
							</div>
						</div>
						<div>
							<h5><b>Music</b></h5>
							<div className="block-item">
								<ul className="list-unstyled">
									<li><b>1st Place, </b>9th 全國師韻獎團體組, 2018</li>
									<li><b>3st Place, </b>36th 北醫金弦獎獨唱組, 2018</li>
								</ul>
							</div>
						</div>
						<div>
							<h5><b>Others</b></h5>
							<div className="block-item">
								<ul className="list-unstyled">
									<li><b>4th Place, </b> Conference on Agricultural Machinery and Bio-Mechatronics Engineering - Field Robot Competition, 2018</li>
								</ul>
							</div>
						</div>
					</div>

					<footer className="footer">
					</footer>
				</div>
		    </div>
		)
	}
}

export default Blog