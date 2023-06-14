import { useContext } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { context } from "../../context/context";
import { testimonialSlider } from "../../sliderProps";
import AnimatedText from "../AnimatedText";
import Modal from "./Modal";

const AboutPopup = ({ open, close, aboutData }) => {
  const colorContext = useContext(context);
  const { color } = colorContext;

  return (
    <Modal open={open} close={close}>
      <div className="about_popup_details">
        <div className="left">
          <div className="left_inner">
            <div className="author">
              <div className="avatar_image">
                <img src="divine.png" alt="" />
                <div className="main" data-img-url="divine.png" />
              </div>
              <div className="short">
                <h3 className="name">
                  {aboutData.firstName}{" "}
                  <span className="coloring">{aboutData.lastName}</span>
                </h3>
                <h3 className="job">
                  <AnimatedText />
                </h3>
              </div>
            </div>
            <div className="list">
              <ul>
                <li>
                  <div className="list_inner">
                    <i className="icon-user" />
                    <span>
                      {aboutData.firstName} {aboutData.lastName}
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-calendar" />
                    <span>{aboutData.bithday}</span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-location" />
                    <span>
                      <a href="#" className="href_location">
                        {aboutData.address}
                      </a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-phone" />
                    <span>
                      <a href="#">{aboutData.phn}</a>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <i className="icon-mail-1" />
                    <span>
                      <a href={`mailto:${aboutData.email}`}>
                        {aboutData.email}
                      </a>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="edrea_tm_button full">
              <a
                href="https://docs.google.com/document/d/1JM53Ug1q6UgRJ9rVY4rJzoDSePh2difm/edit?usp=drive_web&ouid=112733636778904983442&rtpof=true"
                download
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="right_inner">
            <div className="biography">
              <div className="about_title">
                <h3>
                  <span>
                    About <span className="coloring">Me</span>
                  </span>
                </h3>
              </div>
              <div className="text">
                <p>
                  Hey there! I'm <span>Sirfoy</span>, your friendly neighborhood
                  front-end engineer and video editing wizard! With over 3 years
                  of experience, I bring a mix of technical expertise and
                  creative flair to the table. Whether it's crafting
                  eye-catching user interfaces or piecing together stunning
                  videos, I'm here to make your projects shine! Let's
                  collaborate and bring your ideas to life in the most engaging
                  and captivating way possible.
                </p>
              </div>
            </div>
            <div className="service">
              <div className="about_title">
                <h3>
                  <span>
                    Quality <span className="coloring">Services</span>
                  </span>
                </h3>
              </div>
              <div className="list">
                <ul>
                  {aboutData.serviceLists &&
                    aboutData.serviceLists.map((service, i) => (
                      <li key={i}>
                        <i className="icon-right-dir" />
                        {service}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="prog_skill">
              <div className="about_title">
                <h3>
                  <span>
                    Programming <span className="coloring">Skills</span>
                  </span>
                </h3>
              </div>
              <div className="oki_progress">
                {aboutData.skills &&
                  aboutData.skills.programming &&
                  aboutData.skills.programming.map((programming, i) => (
                    <div
                      key={i}
                      className="progress_inner skillsInner___"
                      data-value={95}
                    >
                      <span>
                        <span className="label">{programming.name}</span>
                        <span
                          className="number"
                          style={{ right: `${100 - programming.value}%` }}
                        >
                          {programming.value}%
                        </span>
                      </span>
                      <div className="background">
                        <div className="bar open">
                          <div
                            className="bar_in"
                            style={{ width: `${programming.value}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="lang_skill">
              <div className="about_title">
                <h3>
                  <span>
                    Cinematography <span className="coloring">Skills</span>
                  </span>
                </h3>
              </div>
              <div className="circular_progress_bar">
                <ul>
                  {aboutData.skills &&
                    aboutData.skills.language &&
                    aboutData.skills.language.map((language, i) => (
                      <li key={i}>
                        <div className="list_inner">
                          <div className="myCircle" data-value="0.95">
                            <CircularProgressbar
                              value={language.value}
                              text={`${language.value}%`}
                              strokeWidth={2}
                              styles={buildStyles({
                                // Colors
                                pathColor: color,
                              })}
                            />
                          </div>
                          <div className="title">
                            <span>{language.name}</span>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="timeline">
              <div className="about_title">
                <h3>
                  <span>
                    Education <span className="coloring">Timeline</span>
                  </span>
                </h3>
              </div>
              <div className="list">
                <ul>
                  {aboutData &&
                    aboutData.education &&
                    aboutData.education.map((edu, i) => (
                      <li key={i}>
                        <div className="list_inner">
                          <div className="time">
                            <span>{edu.year}</span>
                          </div>
                          <div className="place">
                            <h3>{edu.unv}</h3>
                            <span>{edu.degree}</span>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="timeline">
              <div className="about_title">
                <h3>
                  <span>
                    Working <span className="coloring">Timeline</span>
                  </span>
                </h3>
              </div>
              <div className="list">
                <ul>
                  {aboutData &&
                    aboutData.working &&
                    aboutData.working.map((work, i) => (
                      <li key={i}>
                        <div className="list_inner">
                          <div className="time">
                            <span>{work.year}</span>
                          </div>
                          <div className="place">
                            <h3>{work.company}</h3>
                            <span>{work.deg}</span>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="partners">
              <div className="about_title">
                <h3>
                  <span>
                    My <span className="coloring">Partners</span>
                  </span>
                </h3>
              </div>
              <div className="list">
                <ul>
                  {aboutData &&
                    aboutData.partnersLogos &&
                    aboutData.partnersLogos.map((logo, i) => (
                      <li key={i}>
                        <div className="list_inner">
                          <img src={logo} alt="" />
                          <a className="cavani_tm_full_link" href="#" />
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="testimonial">
              <div className="about_title">
                <h3>
                  <span>
                    Clients <span className="coloring">Feedback</span>
                  </span>
                </h3>
              </div>
              <div className="list">
                <Swiper {...testimonialSlider} className="owl-carousel">
                  <SwiperSlide>
                    <div className="list_inner">
                      <div className="text">
                        <i className="icon-quote-left" />
                        <p>
                          Thank you so much! It was an amazing time working with
                          you as a producer. Your collaboration and
                          contributions were truly valuable.
                        </p>
                      </div>
                      <div className="details">
                        <div className="image">
                          <div className="main" data-img-url="gini.jpg" />
                        </div>
                        <div className="info">
                          <h3>Ginikachukwu</h3>
                          <span>Talk Show Host</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="list_inner">
                      <div className="text">
                        <i className="icon-quote-left" />
                        <p>
                          He is highly competent and consistently punctual in
                          delivery of his work.
                        </p>
                      </div>
                      <div className="details">
                        <div className="image">
                          <div className="main" data-img-url="lotanna.jpeg" />
                        </div>
                        <div className="info">
                          <h3>lotanna Macfoy</h3>
                          <span>Ceo of Stoilic Shipping Limited</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="list_inner">
                      <div className="text">
                        <i className="icon-quote-left" />
                        <p>
                          I have collaborated with him on numerous projects, and
                          I am consistently impressed or amazed.
                        </p>
                      </div>
                      <div className="details">
                        <div className="image">
                          <div className="main" data-img-url="jaypoor.jpg" />
                        </div>
                        <div className="info">
                          <h3>jay</h3>
                          <span>Founder of Jay graffiti</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default AboutPopup;
