import React, { useEffect } from 'react'
import Footer from '../Footer'
import { FaCheck } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom';
function Social_Media_Influencer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>

      <div className='home_area home_page_img'>

        <div className='about_home'>
          <h1 className='about_us' data-aos="zoom-in" data-aos-duration="500">Social Media Influencer</h1>
        </div>
      </div>

      <section className='course_section'>
        <div className="container">
          <div className="about_row">
            <div className="about_img" data-aos="fade-right"
                            data-aos-duration="3000">

              {/* <img src="./img/social_media.jpg" alt="" /> */}
              <img src="./img/social1.jpg" alt="" />
            </div>
            <div className="about_details" data-aos="fade-left"
                            data-aos-duration="3000">
              <h2>Social Media Influencer</h2>
              <p style={{textAlign:"justify"}}> A Social Media Influencer is a user on social media who has established credibility in a specific industry. These content creators have access to a large audience and can share information to persuade others and drive social media engagement through their authenticity and reach.</p>
              <div className='course_button'>
                <button>Course Duration <span>1 Months</span></button>
                <button>Daily Time <span>1 Hours</span></button>
              </div>
              <div className='include_course'>
                <h5>Included In This Course:</h5>
                <ul>
                  <li><FaCheck />Job Support</li>
                  <li><FaCheck />Rich Learning Content</li>
                  <li><FaCheck />Taught by Experienced Prof.</li>
                  <li><FaCheck />Industry Oriented Projects</li>
                </ul>
              </div>
              <Link to="https://wa.me/9104790039" target="_blank"><button className='button'>Inquiry Now</button></Link>
            </div>
          </div>
        </div>
      </section>
      {/* <section className='courses_icon'>
                <div className='container'>
                    <ul className='courses_icon_img'>
                        <li><img src="./img/digital2.png" alt="" /><p>CMS Hub</p></li>
                        <li><img src="./img/digital3.jpg" alt="" /><p>Canvas</p></li>
                        <li><img src="./img/digital4.png" alt="" /><p>Semrush</p></li>
                        
                    </ul>
                  
                </div>
            </section> */}

<section className='subject_section' data-aos="fade-up"
                            data-aos-duration="3000">
        <div className='container'>
          <div className="offer_title course_module_title">
            <h2>Course Modules</h2>

          </div>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Social media influencer 
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p> <FaRegCircleCheck />Influencer marketing</p>
                  <p><FaRegCircleCheck />Content marketing</p>
                  <p>  <FaRegCircleCheck />Identifying influencers </p>
                  <p> <FaRegCircleCheck />Social media</p>
                  <p> <FaRegCircleCheck />Developing a social media strategy</p>
                  <p><FaRegCircleCheck /> Influencer marketing bootcamp</p>

                  <p> <FaRegCircleCheck />Instagram Domination</p>
                  <p><FaRegCircleCheck />Social media marketing</p>
                  <p>  <FaRegCircleCheck />Benefits of influencer marketing </p>
                  <p> <FaRegCircleCheck />Blogging basics</p>
                  <p> <FaRegCircleCheck />Campaign marketing</p>
                  <p><FaRegCircleCheck /> Digital marketing</p>

                </div>
              </div>

            </div>




          </div>

        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Social_Media_Influencer
