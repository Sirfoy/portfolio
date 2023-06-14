import { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { portfolioSlider } from "../sliderProps";
import PortfolioModal from "./popup/PortfolioModal";

const Portfolio = () => {
  const [modal, setModal] = useState(false);
  return (
    <Fragment>
      <PortfolioModal open={modal} close={() => setModal(false)} />
      <div className="edrea_tm_section hidden animated" id="portfolio">
        <div className="section_inner">
          <div className="edrea_tm_portfolio swiper-section">
            <div className="edrea_tm_main_title">
              <h3>
                Creative <span className="coloring">Portfolio</span>
              </h3>
            </div>
            <div className="portfolio_list gallery_zoom">
              <Swiper {...portfolioSlider} className="swiper-container">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="sir1.png" alt="yesss" />
                        <div className="main" data-img-url="sir1.png" />
                      </div>
                      <div className="details">
                        <h3>Sirfoy</h3>
                        <span>No Limit </span>
                      </div>
                      <a
                        className="edrea_tm_full_link popup-vimeo"
                        href="https://drive.google.com/file/d/1yZTaguwqPHeUgUBJVbhBGMomWTCt4HJf/view?usp=drive_link"
                        target="_blank"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="cover2.jpg" alt="" />
                        <div className="main" data-img-url="cover2.jpg" />
                      </div>
                      <div className="details">
                        <h3>Ginikachukwu</h3>
                        <span>Host</span>
                      </div>
                      <a
                        className="edrea_tm_full_link popup-youtube"
                        href="https://drive.google.com/file/d/1_ob4yph00juuKPeLX3xx-vwSLbqn6Mw2/view?usp=drive_link"
                        target="_blank"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="culogo.png" alt="" />
                        <div className="main" data-img-url="culogo.png" />
                      </div>
                      <div className="details">
                        <h3>Covenant university </h3>
                        <span>Timeline</span>
                      </div>
                      <a
                        className="edrea_tm_full_link soundcloude_link mfp-iframe audio"
                        href="https://drive.google.com/file/d/1ZVVkZD_NhGz4UwJIonJWzQtA7jjw9rqM/view?usp=drive_link"
                        target="_blank"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="lisa.png" alt="" />
                        <div className="main" data-img-url="lisa.png" />
                      </div>
                      <div className="details">
                        <h3>Project 1 Million souls </h3>
                        <span>Festival of Love</span>
                      </div>
                      <a
                        className="edrea_tm_full_link portfolio_popup"
                        href="https://drive.google.com/file/d/1NB3ovp7wu3JGf3iALOLlc3uuSNJb4JPV/view?usp=drive_link"
                        target="_blank"
                        // onClick={() => setModal(true)}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="reflections1.png" alt="reflections" />
                        <div className="main" data-img-url="reflections1.png" />
                      </div>
                      <div className="details">
                        <h3> Can U</h3>
                        <span>Reflections</span>
                      </div>
                      <a
                        className="edrea_tm_full_link zoom"
                        href="https://drive.google.com/file/d/1l4oMhnG6Cj1Z0xdK9ua7BFUphOTwOT4M/view?usp=drive_link"
                        target="_blank"
                      ></a>
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="collegeweek.png" alt="" />
                        <div className="main" data-img-url="collegeweek.png" />
                      </div>
                      <div className="details">
                        <h3>College week </h3>
                        <span>Covenant university</span>
                      </div>
                      <a
                        className="edrea_tm_full_link zoom"
                        href="https://drive.google.com/file/d/1Qq3job-bMcQgd0u3azTUob43oHe30ME4/view?usp=drive_link"
                        target="_blank"
                      />
                    </div>
                  </SwiperSlide>
                </div>
                <div className="edrea_tm_swiper_progress fill">
                  <div className="my_pagination_in">
                    <span className="current" />
                    <span className="pagination_progress">
                      <span className="all">
                        <span />
                      </span>
                    </span>
                    <span className="total" />
                  </div>
                  <div className="my_navigation">
                    <ul>
                      <li>
                        <a className="my_prev" href="#">
                          <i className="icon-left-open-1" />
                        </a>
                      </li>
                      <li>
                        <a className="my_next" href="#">
                          <i className="icon-right-open-1" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Portfolio;
