import React from 'react'
import './About.css'
import ME from '../../assets/bazli-me.jpg'
import {FiAward} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineProject} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know Me</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FiAward className='about_icon'/>
              <h5>Experience</h5>
              <small>1 year</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>50+ Locally</small>
            </article>

            <article className='about_card'>
              <AiOutlineProject className='about_icon'/>
              <h5>Projects</h5>
              <small>7 Completed Projects</small>
            </article>
          </div>

          <p>
          A dedicated engineering student with knowledge in mechanical, electrical and IT. Bringing the characteristics of determination and eager to learn software development. Adept in analyzing problems and giving out the best solutions for successful outcome. Have always loved coding because it feels like solving puzzles.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About