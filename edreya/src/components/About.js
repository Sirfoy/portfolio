import { Fragment, useState } from "react";
import AnimatedText from "./AnimatedText";
import AboutPopup from "./popup/AboutPopup";

const aboutData = {
  firstName: "Divine",
  lastName: "Akachukwu",
  bithday: "28.09.2003",
  address: "Need to know",
  phn: "081 337 399 77",
  email: "Sirfoyx@gmail.com",
  serviceLists: [
    "Website Development",
    "Fully Responsive and SEO-optimized website ",
    "Version Control (Git), Source Code Repository (Bitbucket), and Issue Tracking (Jira)",
    "Shared Web Hosting",
    "Video Editing",
  ],
  skills: {
    programming: [
      { name: "React.js", value: "70" },
      { name: "JavaScript", value: "80" },
      { name: "Redux", value: "65" },
    ],
    language: [
      { name: "Color Grading", value: "70" },
      { name: "Video Editing", value: "90" },
      { name: "Graphics ", value: "65" },
    ],
  },
  education: [
    {
      year: "2020 - 2024",
      unv: "Covenant Univercity",
      degree: "Industrial Mathematics and Computer Science",
    },
    {
      year: "2019 - 2020",
      unv: "Aptech",
      degree: "Python-based web development",
    },
    {
      year: "2023",
      unv: "Cisco Networking Academy",
      degree:
        "CyberOps Associate     Cloud Security , Network Defence , Endpoint Security , Incident Response. ",
    },
  ],
  working: [
    { year: "2023 - Running", company: "Wazobia Technologies", deg: "Front-End Intern" },
    { year: "2022 - Running", company: "Freelance", deg: "Video Editing / Front-End Engineering" },
    {
      year: "2022",
      company: "Crisp Tv",
      deg: "Intern",
    },
  ],
  partnersLogos: [
    "/buzzblack.png",
    "newjay.png",
    "AveryDavis.png",
    "/sirfoylogo.png",
  ],
};

const About = () => {
  const [popup, setPopup] = useState(false);
  return (
    <Fragment>
      <AboutPopup
        open={popup}
        close={() => setPopup(false)}
        aboutData={aboutData}
      />
      <div className="edrea_tm_section hidden animated" id="about">
        <div className="section_inner">
          <div className="edrea_tm_about">
            <div className="left">
              <div className="image">
                <img src="/divine.png" alt="profil" />
                <div className="main" data-img-url="/divine.png" />
              </div>
            </div>
            <div className="right">
              <div className="short">
                <h3 className="name">
                  {aboutData.firstName}{" "}
                  <span className="coloring">{aboutData.lastName}</span>
                </h3>
                <h3 className="job">
                  <AnimatedText />
                </h3>
              </div>
              <div className="text">
                <p>
                  I'm <span>Sirfoy</span> , a passionate front-end engineer and
                  video editor with 3+ years of experience. I specialize in
                  creating captivating user interfaces and seamless user
                  experiences. Let me bring your ideas to life through code and
                  captivating visual content.
                </p>
              </div>
              <div className="edrea_tm_button">
                <a href="#" onClick={() => setPopup(true)}>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default About;
