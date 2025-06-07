import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
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
    const one = (
      <p>
  I am currently a <b>Systems Administrator</b> with a strong foundation in IT infrastructure, cybersecurity, and web technologies. 
  I am actively pursuing certifications such as <b>CompTIA Security+</b>, <b>CySA+</b>, and <b>CEH</b> to deepen my expertise in cybersecurity. 
  My goal is to transition into a role that blends <b>offensive and defensive security</b>, 
  while continuing to expand my knowledge through hands-on platforms like <a href="https://www.hackthebox.com/">Hack The Box</a> and <a href="https://tryhackme.com/">TryHackMe</a>.
</p>

    );
    const two = (
      <p>
        Outside of work, I'm interested in building random animation using Blender and Unreal Engine 5 with some big dreams. 
        I do enjoy going outside to photosynthesis like most people do. 
      </p>
    );

    const tech_stack = [
      "Typescript",
      "Python",
      "React.js",
      "Java",
      "Javascript ES6+",
      "C#",
      "Wazuh",
      "Cloudflare",
      "Wordpress",
      "Splunk"
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Gazi Jarin" src={"/assets/linathi.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
