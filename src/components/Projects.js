import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const spotlightProjects = {
      "Zentry Clone": {
        title: "Zentry Clone",
        desc:
          "A clone based on the Awwwards Site Of The Month website, Zentry. Filled with beautiful animations and just an exceptional style..",
        techStack: "Next JS, Tailwind Css, GSAP",
        link: "https://github.com/Linathimqalo/zentry-clone-site.git",
        open: "https://zentry-clone-site.vercel.app/",
        image: "/assets/zentry.png"
      },
      "Hulu Clone": {
        title: "Hulu Clone",
        desc:
          "A Hulu Clone with only basic viewing capabilities and replicated front-end.",
        techStack: "Next JS, Tailwind Css, RestApi",
        link: "https://github.com/Linathimqalo/Hulu-clone",
        open: "https://hulu-clone-site.vercel.app/",
        image: "/assets/Hulu.png"
      },
      "Cloud Honeypot Threat Analysis: GCP vs Azure": {
        title: "Cloud Honeypot Threat Analysis: GCP vs Azure",
        desc:
          "Honeypots deployed on Google Cloud Platform (GCP) and Microsoft Azure. It compares attacker behavior, cloud performance, stability, and cost.",
        techStack: "",
        link: "https://github.com/Linathimqalo/cloud-honeypot-analysis",
        open: "",
        image: "/assets/GCP.png"
      }
    };
    const projects = {
      "Zeus Banking Trojan – Malware Analysis Report": {
        desc:
          "This project details the static and dynamic analysis of a Zeus sample retrieved from a malware repository.",
        techStack: "FlareVM, Remnux, Wireshark, YARA, PeStudio, CAPA, Cutter",
        link: "https://github.com/Linathimqalo/Malware-Analysis",
        open: ""
      }/*},
      "": {
        desc:
          "",
        techStack: "",
        link: "",
        open: ""
      }*/
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ projects</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
