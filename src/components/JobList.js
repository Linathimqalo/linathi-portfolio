import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    Bemysocial: {
      jobTitle: "Systems Administrator @",
      duration: "FEB 2024 - PRESENT",
      desc: [
        "Server Management & Maintenance: Administer multiple company servers, performing routine monitoring, security updates, and backups, ensuring 99.9% uptime and data integrity.",
        "Web Development & Support: Led a cross-functional team of developers and designers to manage over 100+ websites.",
        "Security Management: Implement robust security measures including regular patching, firewall monitoring, and antivirus solutions, reducing risk of breaches or data loss.",
        "Network Configuration & Security: Oversee network security and firewalls, proactively managing threat detection and mitigation.",
      ]
    },
    "I.T Solutions": {
      jobTitle: "I.T Support Technician @",
      duration: "APR 2023 - JAN 2024",
      desc: [
        "Client Support: Delivered IT support for remote and on-premise systems, managing servers, network switches, and routers for 20+ clients, increasing system uptime by 10%. ",
        "Network Configuration: Handle network configuration and troubleshooting, ensuring minimal downtime and optimized connectivity for local and remote teams.",
        "User Account Management: Administer Active Directory accounts, creating, updating, and managing user permissions across the organization.",
        "System Maintenance & Updates: Conduct routine system maintenance, patching, and security updates, contributing to increased system stability and performance."
      ]
    },
    "Freelance": {
      jobTitle: "Web Developer @",
      duration: "FEB 2021 - DEC 2022",
      desc: [
        "Web Maintenance and Optimization: Improved front-end performance and site speed through code and asset optimization.",
        "Web Development: Built and maintained responsive websites using React, WordPress, and Shopify.",
        "Security Optimization: Implemented site-wide security practices including HTTPS, form validation, and input sanitization.",
        "E-Commerce UI Development: Developed e-commerce interfaces that increased organic traffic by 10% and boosted average cart value by 20%."
      ]
    },
    "Damelin College": {
      jobTitle: "LAN Administrator Intern @",
      duration: "SEPT 2020 - APR 2020",
      desc: [
        "Network Deployment: Configured lab-wide network infrastructure, ensuring reliable connectivity across departments",
        "System Troubleshooting: Diagnosed and resolved hardware/software issues, reducing system downtime.",
        "Security Monitoring: Performed malware scans and implemented endpoint security protocols.",
        "Diagnostics & Optimization: Conducted diagnostics to identify and remove vulnerabilities across connected devices."
      ]
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
