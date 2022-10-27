import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials_container">
        <article className="testimonial">
          <div className="client_avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className='client_name'>Anas Syahmi</h5>
          <small className='client_review'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex adipisci consectetur 
            consequuntur et, nihil necessitatibus, quae, quidem voluptas molestias unde omnis 
            culpa laboriosam dicta hic. Distinctio delectus nihil commodi minus!
          </small>
        </article>
        <article className="testimonial">
          <div className="client_avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className='client_name'>Anas Syahmi</h5>
          <small className='client_review'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex adipisci consectetur 
            consequuntur et, nihil necessitatibus, quae, quidem voluptas molestias unde omnis 
            culpa laboriosam dicta hic. Distinctio delectus nihil commodi minus!
          </small>
        </article>
        <article className="testimonial">
          <div className="client_avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className='client_name'>Anas Syahmi</h5>
          <small className='client_review'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex adipisci consectetur 
            consequuntur et, nihil necessitatibus, quae, quidem voluptas molestias unde omnis 
            culpa laboriosam dicta hic. Distinctio delectus nihil commodi minus!
          </small>
        </article>
        <article className="testimonial">
          <div className="client_avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className='client_name'>Anas Syahmi</h5>
          <small className='client_review'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex adipisci consectetur 
            consequuntur et, nihil necessitatibus, quae, quidem voluptas molestias unde omnis 
            culpa laboriosam dicta hic. Distinctio delectus nihil commodi minus!
          </small>
        </article>

      </div>
    </section>
  )
}

export default Testimonials

