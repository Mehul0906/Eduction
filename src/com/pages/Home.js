import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { FaUsers } from "react-icons/fa";
import { PiBank, PiDesktopTowerBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { FaListCheck } from "react-icons/fa6";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { GiPencilBrush } from "react-icons/gi";
import { FaCheck } from "react-icons/fa";
import Trending_Courses from "./Trending_Courses";
import { Link } from "react-router-dom";
import Company_partner from "./Company_partner";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import $ from "jquery";
import "magnific-popup/dist/magnific-popup.css";
import "magnific-popup";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaUserGraduate } from "react-icons/fa";
import { BsMicrosoftTeams } from "react-icons/bs";
import { GiArtificialIntelligence } from "react-icons/gi";
import { FaLaptop } from "react-icons/fa";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const options = {
    items: 1,
    loop: true,
    margin: 20,
    autoplay: true,
    slideTransition: "linear",
    autoplayTimeout: 4000,
    // autoplaySpeed: 3000,
    autoplayHoverPause: false,
    // animateOut:'slideOutUp',
    nav: false,
    dots: true,
    margin: 0,
    responsive: {
      1100: {
        items: 1,
      },
      724: {
        items: 1,
      },
      500: {
        items: 1,
      },
      370: {
        items: 1,
        // innerWidth: "100%",
        // outerWidth: "100%",
      },
      220: {
        items: 1,
      },
    },
  };

  const options1 = {
    items: 1,
    loop: true,
    margin: 20,
    autoplay: true,
    slideTransition: "linear",
    autoplayTimeout: 4000,
    // autoplaySpeed: 3000,
    autoplayHoverPause: false,
    // animateOut:'slideOutUp',
    nav: true,
    dots: false,
    margin: 0,
    responsive: {
      1100: {
        items: 1,
      },
      724: {
        items: 1,
      },
      500: {
        items: 1,
      },
      370: {
        items: 1,
        // innerWidth: "100%",
        // outerWidth: "100%",
      },
      220: {
        items: 1,
      },
    },
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    $(".popup-link").magnificPopup({
      type: "image",
      gallery: { enabled: true },
    });
  }, []);
  const images = [
    "./img/user1.jpeg",
    "./img/user2.jpeg",
    "./img/user3.jpeg",
    "./img/user4.jpeg",
  ];

  const reviews = [
    { id: 1, text: "Great product!", author: "John Doe" },
    { id: 2, text: "Loved the service!", author: "Jane Smith" },
    { id: 3, text: "Highly recommend!", author: "Mike Johnson" },
    { id: 4, text: "Amazing experience!", author: "Sarah Lee" },
    { id: 5, text: "Fantastic quality!", author: "Emily Clark" },
    { id: 6, text: "Will buy again!", author: "Robert Brown" },
  ];
  return (
    <>
      {/*------------------Hero-Section-Slider----------------*/}
      <section className="herosection">
        <div
          className="container-fluid w-100 p-0 h-100"
          style={{ marginTop: "135px" }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div
            id="carouselExampleFade"
            class="carousel slide carousel-fade"
            data-bs-ride="carousel"
            style={{ width: "100%", height: "100vh" }}
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="./img/GIMS-Hero-Section.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="./img/Full Stack Developer-Banner-Hero-Section.jpg "
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="./img/Graphic Design-Hero-Section.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="./img/Video Editing Hero-Section.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="./img/Advanced Digital Marketing Hero-Section.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>

            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      {/* ------------------Our Courses---------------- */}
      <section className="services_section">
        <div classN ame="container">
          <div
            className="services_title offer_title"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h2>Our Courses For Your Bright Future</h2>
          </div>
          <div className="services_card">
            <div
              className="services_card_details"
              id="services_card_Main"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Link to="/">
                <div className="services_img9">
                  <img
                    src="./img/video-editing.png"
                    alt=""
                    style={{ marginTop: "5px" }}
                  />
                </div>
                <div className="card_details">
                  <h5>Video Editing</h5>
                </div>
              </Link>
            </div>

            <div
              className="services_card_details"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Link to="backend">
                <div className="services_img3">
                  <img
                    src="./img/web-development.png"
                    alt=""
                    className="img_web-development"
                  />
                </div>
                <div className="card_details">
                  <h5>Web Development</h5>
                </div>
              </Link>
            </div>

            <div
              className="services_card_details"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Link to="fronted">
                <div className="services_img">
                  <img src="./img/web-design.png" alt="Img Not Suppotted" />
                </div>
                <div className="card_details">
                  <h5>Web Design</h5>
                </div>
              </Link>
            </div>

            <div
              className="services_card_details"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Link to="graphics">
                <div className="services_img2">
                  <img
                    src="./img/graphic-design.png"
                    alt=""
                    className="img_graphic-design"
                  />
                </div>
                <div className="card_details">
                  <h5>Graphics Design</h5>
                </div>
              </Link>
            </div>

            <div
              className="services_card_details"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Link to="ui_ux">
                <div className="services_img6">
                  <img src="./img/Ui-Ux design.png" alt="" />
                </div>
                <div className="card_details">
                  <h5>Ui-Ux Design</h5>
                </div>
              </Link>
            </div>

            <div
              className="services_card_details"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Link to="flutter">
                <div className="services_img4">
                  <img
                    src="./img/App-Development.png"
                    alt=""
                    className="img_App-Development"
                  />
                </div>
                <div className="card_details">
                  <h5>App Development</h5>
                </div>
              </Link>
            </div>

            <div
              className="services_card_details"
              id="Web-design"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Link to="advance_digital">
                <div className="services_img7">
                  <img src="./img/Digital-Marketing.png" alt="" />
                </div>
                <div className="card_details">
                  <h5>Advance Digital Marketing</h5>
                </div>
              </Link>
            </div>

            <div
              className="services_card_details"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Link to="2d_animation">
                <div className="services_img8">
                  <img src="./img/2D-Animation.png" alt="" />
                </div>
                <div className="card_details">
                  <h5>2d Animation</h5>
                </div>
              </Link>
            </div>

            <div
              className="services_card_details"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Link to="3d_animation">
                <div className="services_img10">
                  <img
                    src="./img/3d-movie.png"
                    alt=""
                    style={{ marginTop: "10px" }}
                  />
                </div>
                <div className="card_details">
                  <h5>3D Animation</h5>
                </div>
              </Link>
            </div>

            <div
              className="services_card_details"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Link to="/">
                <div className="services_img9">
                  <img
                    src="./img/tally accounting .png"
                    alt=""
                    style={{ marginTop: "5px" }}
                  />
                </div>
                <div className="card_details">
                  <h5>Tally Accounting </h5>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------About-Section---------------- */}
      <section className="About-Section mt-5">
        <div className="container">
          <div className="about_row">
            <div
              className="about_img"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
            <img src="./img/About-Image.png" alt="" className="img-about" />
            </div>
            <div
              className="about_details"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <h2>About DG Multimedia Education Institute</h2>
              <p style={{ textAlign: "justify" }}>
                DG Multimedia is a cutting-edge digital education institute
                built for today’s online, technology-driven world. We offer
                government-approved, skill-based courses that empower students
                with deep, practical knowledge, ensuring they stay ahead in the
                fast-evolving digital landscape. Our innovative curriculum is
                designed to bridge the digital divide, providing every learner
                with the expertise needed to thrive in their careers and
                transform their lives.
              </p>
              <p style={{ textAlign: "justify" }}>
                Join us at DG Multimedia, where education meets digital
                excellence and every student is prepared for a future of endless
                possibilities.
              </p>
              <Link to="about">
                {" "}
                <button className="button">Read More</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------2 Side Images-Section---------------- */}
     <section class="container mt-5"  data-aos="fade-left"
            data-aos-duration="3000">
        {/* <!-- Entrepreneurship Training --> */}
        <div class="row align-items-center mb-5 bg-white p-4 shadow rounded">
            <div class="col-md-6">
                <h3 class="fw-bold">ENTREPRENEURSHIP <span class="highlight">TRAINING</span></h3>
                <hr class="divider"></hr>
                <ul class="list-unstyled">
                    <li class="custom-bullet">Field-Oriented Training</li>
                    <li class="custom-bullet">Industry-Relevant Skills</li>
                    <li class="custom-bullet">Project-Based Training</li>
                    <li class="custom-bullet">Expert Training & Sessions</li>
                    <li class="custom-bullet">Global Career Opportunities</li>
                    <li class="custom-bullet">Real-World Experience</li>
                    <li class="custom-bullet">Industry-Relevant Skills</li>
                    <li class="custom-bullet">Mastery Certification</li>
                </ul>
            </div>
            <div class="col-md-6 text-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnnFf6DXcgRxe71BOQm1orHpnKjJloo9c2jg&s" alt="Entrepreneurship Training" class="img-fluid rounded shadow first-image" style={{width:"80%"}}/>
            </div>
        </div>

        {/* <!-- Our Education Methodology --> */}
        <div class="row align-items-center flex-md-row-reverse bg-white p-4 shadow rounded">
            <div class="col-md-6">
                <h3 class="fw-bold">OUR EDUCATION <span class="highlight">METHODOLOGY</span></h3>
                <hr class="divider"></hr>
                <ul class="list-unstyled">
                    <li class="custom-bullet">Flexible Learning</li>
                    <li class="custom-bullet">Personality Development Training</li>
                    <li class="custom-bullet">Expert Session</li>
                    <li class="custom-bullet">100% Practical Education</li>
                    <li class="custom-bullet">Educational Activities</li>
                    <li class="custom-bullet">Freelancing Platform Training</li>
                    <li class="custom-bullet">Promoting a Growth Mindset</li>
                    <li class="custom-bullet">100% Practical Education</li>
                </ul>
            </div>
            <div class="col-md-6">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy54YivvEhPnmGvodaD_5gNNg2FLVrwgZGjxLaVA9Fnl9K6iAatX-oN8zzOVgqO-ygPuI&usqp=CAU" alt="Education Methodology" class="img-fluid rounded shadow" style={{width:"80%"}}/>
            </div>
        </div>
     </section>

      {/* ------------------Trending-Courses-Section---------------- */}
      <Trending_Courses />

      {/* ------------------Offer-Section---------------- */}
      <section className="offer_section mt-5">
        <div className="container">
          <div className="offer_row">
            <div
              className="offer_title"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <h2>What We Offer</h2>
            </div>
            <div className="offer_card_details">
              <div
                className="offer_card_col"
                data-aos="fade-right"
                data-aos-duration="3000"
              >
                <div className="offer_card">
                  <GiPencilBrush />
                  <h6>Soft Skill Traning By Experts</h6>
                </div>
                <div className="offer_card">
                  <FaHandsHoldingChild />
                  <h6>Placement Assistance</h6>
                </div>
                <div className="offer_card">
                  <BsMicrosoftTeams />
                  <h6>Traning In Team Enviroment</h6>
                </div>

                <div className="offer_card">
                  <FaUserGraduate />
                  <h6>Industry Oriented Syllabus</h6>
                </div>
                <div className="offer_card">
                  <FaUsers />
                  <h6>Personality Development Training</h6>
                </div>
              </div>
              <div
                className="offer_card_col"
                data-aos="flip-left"
                data-aos-duration="3000"
              >
                <img
                  src="./img/What-We-Offer-Vector.png"
                  alt=""
                  style={{ width: "80%", height: "650px", marginLeft: "50px" }}
                />
              </div>
              <div
                className="offer_card_col"
                data-aos="fade-left"
                data-aos-duration="3000"
              >
                <div className="offer_card">
                  <FaListCheck /> <h6>Day-To-Day Progress Tracking</h6>
                </div>
                <div className="offer_card">
                  <GiTeacher /> <h6>Experienced Faculties From IT Company</h6>
                </div>
                <div className="offer_card">
                  <PiDesktopTowerBold />
                  <h6> Traching Methodology as It Industry</h6>
                </div>
                <div className="offer_card">
                  <GiArtificialIntelligence />
                  <h6>Ai & Human Based Assessment System</h6>
                </div>
                <div className="offer_card">
                  <FaLaptop />
                  <h6>Freelancing Platforms Training</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------ InFrastructure-Section ---------------- */}
      <section
        className="infrastructure-section  mt-5"
        style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}
      >
        <div className="text-content">
          <h2>State-of-the-Art Infrastructure for Global Career Advancement</h2>
          <p style={{ textAlign: "justify" }}>
            At DG Multimedia, we offer world-class facilities that empower
            students to build international careers. As one of Surat’s most
            trusted and certified computer training institutes, we deliver
            in-demand IT courses packed with practical experience and recognized
            certification.
          </p>

          <div
            className="image-container"
            style={{ width: "280px", height: "280px", margin: "auto" }}
          >
            <img
              src="./img/Infrastructure  image vector.png"
              alt="Infrastructure Image"
            />
          </div>
        </div>

        <div className="gallery" style={{ margin: "auto 10" }}>
          <img src="./img/MD-Office-Area.jpg" alt="Image 1" className="tall" />
          <img src="./img/Lab-Area.webp" alt="Image 2" />
          <img src="./img/Confrence-Area.jpg" alt="Image 3" className="wide" />
          <img src="./img/Office-Area.jpg" alt="Image 4" />
          <img src="./img/out-door are.jpg" alt="Image 5" className="wide" />
        </div>
      </section>

      {/* ------------------ Student-Reviews-Section ---------------- */}
      <section
        className="student_reviews_section mt-5"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container">
          <div className="student_reviews_title">
            <h2>Student Reviews</h2>
          </div>
          
  


    <section class="testimonial-section">
        <div class="testimonial-container">
            <div class="testimonial-header">
                <h4>TESTIMONIALS</h4>
                <h2>Our Students Feedback</h2>
                <img src="./img/Student Line.png" alt=""/>.
                <p>"Here are some of our students' stories that explain <br></br> their experiences and expanded potential after <br></br> learning from the DG Multimedia Education."</p>
            </div>
            <div class="testimonial-slider-wrapper">
                <div class="testimonial-slider">
                    <div class="testimonial-card">
                        <img src="./img/user1.jpeg" alt="User"/>
                        <h5>harshita brikeshkumar nonia</h5>
                        <span>Advance Gigital Marketing</span>
                        <div class="stars">⭐⭐⭐⭐⭐</div>
                        <p>"DG Multimedia excels in digital marketing courses!
                  Comprehensive content, expert instructors, and practical
                  skills. Highly recommended for career advancement!"</p>
                     
                        
                    </div>
                    <div class="testimonial-card">
                        <img src="./img/user5.jpeg" alt="User"/>
                        <h5>Tamnna Rajkumar Prajapati</h5>
                        <span>Graphics design</span>
                        <div class="stars">⭐⭐⭐⭐⭐</div>
                        <p>  "The graphic design course at DG Multimedia was comprehensive,
                  covering both traditional and digital aspects of design. It
                  started with the basics and gradually introduced more advanced
                  techniques, which was perfect for beginners like me."</p>
                        
                    </div>
                    <div class="testimonial-card">
                        <img src="./img/user7.jpeg" alt="User"/>
                        <h5>Sabhad Pratik bharatbhai</h5>
                        <span>CCC</span>
                        <div class="stars">⭐⭐⭐⭐⭐</div>
                        <p>"The CCC language course at DG Multimedia was an excellent
                  introduction to computer concepts. It covered fundamental
                  concepts comprehensively and provided hands-on experience with
                  coding exercises."</p>
                        
                    </div>
                    <div class="testimonial-card">
                        <img src="./img/user2.jpeg" alt="User"/>
                        <h5>Abhishek madhulal choudhary</h5>
                        <span>Advance Gigital Marketing</span>
                        <div class="stars">⭐⭐⭐⭐⭐</div>
                        <p>  "DG Multimedia offers top-notch digital marketing courses!
                  Comprehensive, expert-led training with practical insights.
                  Highly recommend for career growth!"</p>
                        
                    </div>
                    
                </div>
                <button class="prev1" onclick="prevSlide()">❮</button>
                <button class="next1" onclick="nextSlide()">❯</button>
            </div>
        </div>
    </section>
        </div>
      </section>
      
      {/* ------------------Footer-Section----------------  */}
      <Footer />
    </>
  );
}
document.addEventListener("DOMContentLoaded", function () {
  let index = 0;

  function showSlide() {
    let slides = document.querySelector(".testimonial-slider");
    let totalSlides = document.querySelectorAll(".testimonial-card").length;

    if (!slides) {
      console.error("Slider not found!");
      return;
    }

    if (index > totalSlides - 3) {
      index = 0;
    } else if (index < 0) {
      index = totalSlides - 3;
    }

    let move = -index * 50; // 50% shift to show two cards at a time
    slides.style.transform = `translateX(${move}%)`;
  }

  function nextSlide() {
    index++;
    showSlide();
  }

  function prevSlide() {
    index--;
    showSlide();
  }

  // Auto slide every 3 seconds
  setInterval(nextSlide, 3000);

  // Initial setup
  showSlide();
});

export default Home;
