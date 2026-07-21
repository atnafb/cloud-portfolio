import profilePic from "./assets/profile.png";
import Chatbot from "./components/Chatbot";
const LinkedInIcon = ({ size = 18, color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubIcon = ({ size = 18, color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-8 0C5.27.65 4.09 1 4.09 1A5.07 5.07 0 0 0 4 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 8 18.13V22" />
  </svg>
);
const EmailIcon = ({ size = 18, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const WebsiteIcon = ({ size = 18, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 0 20" />
    <path d="M12 2a15.3 15.3 0 0 0 0 20" />
  </svg>
);

const LinkArrowIcon = ({ size = 16, color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
);


const ProjectIcon = ({ type, color }) => {
  const commonProps = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 34,
    height: 34,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const icons = {
    healthcare: (
      <svg {...commonProps}>
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
        <path d="M12 8v5" />
        <path d="M9.5 10.5h5" />
      </svg>
    ),
    database: (
      <svg {...commonProps}>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
        <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
      </svg>
    ),
    housing: (
      <svg {...commonProps}>
        <path d="M3 11 12 3l9 8" />
        <path d="M5 10v10h14V10" />
        <path d="M9 20v-6h6v6" />
      </svg>
    ),
    pipeline: (
      <svg {...commonProps}>
        <rect x="3" y="4" width="6" height="6" rx="1" />
        <rect x="15" y="4" width="6" height="6" rx="1" />
        <rect x="15" y="14" width="6" height="6" rx="1" />
        <path d="M9 7h6" />
        <path d="M18 10v4" />
      </svg>
    ),
    task: (
      <svg {...commonProps}>
        <rect x="5" y="4" width="14" height="17" rx="2" />
        <path d="M9 9l1.5 1.5L14 7" />
        <path d="M9 15l1.5 1.5L14 13" />
      </svg>
    ),
  };

  return icons[type];
};

const CertificationIcon = ({ type, color }) => {
  const commonProps = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 30,
    height: 30,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const icons = {
    aws: (
      <svg {...commonProps}>
        <path d="M4 17c2.4 1.8 5.1 2.7 8 2.7s5.6-.9 8-2.7" />
        <path d="M7 7h10" />
        <path d="M7 12h10" />
        <path d="M7 7v5" />
        <path d="M17 7v5" />
        <path d="M10 12v4" />
        <path d="M14 12v4" />
      </svg>
    ),
    certificate: (
      <svg {...commonProps}>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8h8" />
        <path d="M8 12h5" />
        <path d="M15 16l1.5 1.5L20 14" />
      </svg>
    ),
    analytics: (
      <svg {...commonProps}>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="M8 16v-5" />
        <path d="M12 16V8" />
        <path d="M16 16v-7" />
      </svg>
    ),
    degree: (
      <svg {...commonProps}>
        <path d="M22 10 12 5 2 10l10 5 10-5Z" />
        <path d="M6 12v4c0 1.7 2.7 3 6 3s6-1.3 6-3v-4" />
        <path d="M22 10v6" />
      </svg>
    ),
  };

  return icons[type];
};

function App() {
  const projects = [
    {
      title: "CareSync – AWS Healthcare Platform",
      description:
        "Designed an AWS-based healthcare note-taking platform using VPC, Security Group, RDS MySQL, DB Subnet Group, and CloudFormation to support secure cloud-native application deployment.",
      tags: ["AWS", "RDS", "Lambda", "Cognito"],
      icon: "healthcare",
      color: "#16a34a",
      link: "https://github.com/atnafb/atnafb",
    },
    {
      title: "Database Migration to AWS",
      description:
        "Database migration project focused on moving relational data to Amazon RDS using AWS DMS and CloudWatch monitoring.",
      tags: ["AWS DMS", "RDS", "CloudWatch", "Migration"],
      icon: "database",
      color: "#2563eb",
      link: "https://github.com/atnafb",
    },
    {
      title: "Housing Market Analysis",
      description:
        "Developed a Python and SQL analytics project to analyze housing market trends, pricing, and inventory patterns using data cleaning, transformation, and visualization workflows.",
      tags: ["Python", "SQL", "Pandas", "Analytics"],
      icon: "housing",
      color: "#f59e0b",
      link: "https://github.com/atnafb/NC_housing_market",
    },
    {
      title: "ETL Data Pipeline",
      description:
        "Designed a cloud ETL pipeline concept using Amazon S3, AWS Glue, Redshift, and QuickSight to transform raw data into structured datasets for reporting and analytics. [in progress]",
      tags: ["S3", "Glue", "Redshift", "QuickSight"],
      icon: "pipeline",
      color: "#7c3aed",
      link: "https://github.com/atnafb",
    },
    {
      title: "Task Tracker Application",
      description:
        "Built and deployed a Flask-based task tracking application on AWS using EC2, DynamoDB, Nginx, and Linux to practice cloud deployment, infrastructure setup, and application hosting.",
      tags: ["Flask", "DynamoDB", "EC2", "Linux"],
      icon: "task",
      color: "#ef4444",
      link: "https://github.com/atnafb/taskTracker",
    },
  ];

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px 40px 60px",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "40px",
          paddingBottom: "20px",
          borderBottom: "1px solid #d1d5db",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img
            src={profilePic}
            alt="Atnafu Ayalew profile"
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "center top",
              transform: "scale(1.12)",
              transformOrigin: "center",
              border: "3px solid #e5e7eb",
            }}
          />
          <h2 style={{ margin: 0, fontSize: "24px" }}>Atnafu Ayalew</h2>
        </div>

        <div style={{ display: "flex", gap: "20px" }}>
          <a href="#projects" style={{ textDecoration: "none", color: "#111827", fontWeight: "500" }}>
            Projects
          </a>
          <a href="#skills" style={{ textDecoration: "none", color: "#111827", fontWeight: "500" }}>
            Skills
          </a>
          <a href="#certifications" style={{ textDecoration: "none", color: "#111827", fontWeight: "500" }}>
            Certifications
          </a>
          <a href="#contact" style={{ textDecoration: "none", color: "#111827", fontWeight: "500" }}>
            Contact
          </a>
        </div>
      </nav>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr",
          gap: "40px",
          alignItems: "center",
          marginBottom: "60px",
        }}
      >
        <div>
          <h1 style={{ fontSize: "45px", 
            lineHeight: "1.1",
            maxWidth: "700px",
            marginBottom: "20px" }}>
            Cloud Engineer | Data Engineer
          </h1>

          <p style={{ fontSize: "18px", lineHeight: "1.8", maxWidth: "800px" }}>
            Cloud Engineer and Data Engineer with hands-on experience designing AWS
            infrastructure, including VPCs, subnet architecture, security groups, EC2
            instances, RDS databases, and CloudFormation deployments. Builds cloud-native
            and data-driven solutions using AWS, Python, SQL, and analytics to support
            secure, scalable, and business-focused applications.
          </p>

          <div
            style={{
              marginTop: "25px",
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <a href="#projects">
              <button
                style={{
                  padding: "10px 20px",
                  borderRadius: "6px",            
                  backgroundColor: "#2563eb",            
                  color: "white",            
                  border: "none",            
                  fontWeight: "600",            
                  fontSize: "16px",            
                  cursor: "pointer",            
                  minWidth: "185px",            
                }}
              >
                View Projects</button>
            </a>

            <a
              href="/resume/Atnafu_Ayalew_Cloud_Engineer_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px 20px",
                borderRadius: "6px",
                backgroundColor: "#2563eb",
                color: "white",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              Download Resume
            </a>

            <a
              href="https://www.linkedin.com/in/atnafuayalew/"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 16px",
                borderRadius: "10px",
                border: "1px solid #dbeafe",
                backgroundColor: "white",
                color: "#111827",
                textDecoration: "none",
                fontWeight: "600",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
              }}
            >
              <LinkedInIcon size={18} color="#2563eb" />
              LinkedIn
            </a>

            <a
              href="https://github.com/atnafb"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 16px",
                borderRadius: "10px",
                border: "1px solid #e5e7eb",
                backgroundColor: "white",
                color: "#111827",
                textDecoration: "none",
                fontWeight: "600",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
              }}
            >
              <GitHubIcon size={18} />
              GitHub
            </a>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "16px",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
          }}
        >
          <h3 style={{ marginBottom: "16px", color: "#2563eb" }}>
            Cloud & Data Focus
          </h3>

          <ul style={{ lineHeight: "1.8", paddingLeft: "20px" }}>
            <li>AWS Infrastructure Design (VPC, Subnets, Security Groups)</li>
            <li>Cloud Architecture & Migration</li>
            <li>Data Engineering & ETL</li>
            <li>Python, SQL, and Analytics</li>
            <li>Linux, Git, and Infrastructure</li>
          </ul>
        </div>
      </section>

      <section id="projects" style={{ marginTop: "40px" }}>
        <h2 style={{ marginBottom: "20px" }}>Featured Projects</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {projects.map((project) => (
            <div
              key={project.title}
              style={{
                backgroundColor: "white",
                padding: "24px",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "56px",
                  height: "56px",
                  borderRadius: "14px",
                  backgroundColor: `${project.color}12`,
                  border: `1px solid ${project.color}30`,
                  marginBottom: "16px",
                }}
              >
                <ProjectIcon type={project.icon} color={project.color} />
              </div>

              <h3>{project.title}</h3>
              <p
                style={{
                  marginTop: "10px",
                  color: "#4b5563",
                  lineHeight: "1.5",
                }}
              >
                {project.description}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginTop: "16px",
                }}
              >
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      backgroundColor: "#dbeafe",
                      color: "#1d4ed8",
                      padding: "6px 10px",
                      borderRadius: "999px",
                      fontSize: "12px",
                      fontWeight: "600",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "12px",
                }}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    textDecoration: "none",
                    color: "#2563eb",
                    fontWeight: "600",
                  }}
                >
                  View Project
                  <LinkArrowIcon size={16} color="#2563eb" />
                </a>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} GitHub repository`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "36px",
                    height: "36px",
                    borderRadius: "999px",
                    border: "1px solid #e5e7eb",
                    color: "#111827",
                    textDecoration: "none",
                    backgroundColor: "#f9fafb",
                  }}
                >
                  <GitHubIcon size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" style={{ marginTop: "60px" }}>
        <h2 style={{ marginBottom: "20px" }}>Technical Skills</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "24px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
            }}
          >
            <h3 style={{ marginBottom: "16px" }}>AWS</h3>
            <ul style={{ paddingLeft: "20px", lineHeight: "1.8", color: "#4b5563" }}>
              <li>EC2, S3, RDS, Aurora</li>
              <li>VPC, Subnets, Security Groups</li>
              <li>Lambda, API Gateway, Cognito</li>
              <li>CloudFormation, CloudWatch</li>
              <li>Route 53, CloudFront</li>
            </ul>
          </div>

          <div
            style={{
              backgroundColor: "white",
              padding: "24px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
            }}
          >
            <h3 style={{ marginBottom: "16px" }}>Programming</h3>
            <p style={{ color: "#4b5563", lineHeight: "1.7" }}>
              Python, SQL, JavaScript
            </p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              padding: "24px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
            }}
          >
            <h3 style={{ marginBottom: "16px" }}>Data Engineering</h3>
            <p style={{ color: "#4b5563", lineHeight: "1.7" }}>
              ETL Pipelines, AWS Glue, Redshift, QuickSight, Pandas,
              SQLAlchemy, PySpark
            </p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              padding: "24px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
            }}
          >
            <h3 style={{ marginBottom: "16px" }}>Tools</h3>
            <p style={{ color: "#4b5563", lineHeight: "1.7" }}>
              Git, GitHub, Linux, VS Code, Tableau, Power BI
            </p>
          </div>
        </div>
      </section>

      <section id="certifications" style={{ marginTop: "60px" }}>
        <h2 style={{ marginBottom: "20px" }}>Certifications</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "24px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "52px",
                height: "52px",
                borderRadius: "14px",
                backgroundColor: "#f9731612",
                border: "1px solid #f9731630",
                marginBottom: "16px",
              }}
            >
              <CertificationIcon type="aws" color="#f97316" />
            </div>
            <h3 style={{ marginBottom: "12px" }}>AWS re/Start Graduate</h3>
            <p style={{ color: "#4b5563", lineHeight: "1.7" }}>
              Per Scholas July 2026
            </p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              padding: "24px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "52px",
                height: "52px",
                borderRadius: "14px",
                backgroundColor: "#2563eb12",
                border: "1px solid #2563eb30",
                marginBottom: "16px",
              }}
            >
              <CertificationIcon type="certificate" color="#2563eb" />
            </div>
            <h3 style={{ marginBottom: "12px" }}>
              AWS Certified Cloud Practitioner
            </h3>
            <p style={{ color: "#4b5563", lineHeight: "1.7" }}>
              Completed 2026
            </p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              padding: "24px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "52px",
                height: "52px",
                borderRadius: "14px",
                backgroundColor: "#16a34a12",
                border: "1px solid #16a34a30",
                marginBottom: "16px",
              }}
            >
              <CertificationIcon type="analytics" color="#16a34a" />
            </div>
            <h3 style={{ marginBottom: "12px" }}>
              UNC Charlotte Data Analytics Certificate
            </h3>
            <p style={{ color: "#4b5563", lineHeight: "1.7" }}>
              Completed 2025
            </p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              padding: "24px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "52px",
                height: "52px",
                borderRadius: "14px",
                backgroundColor: "#7c3aed12",
                border: "1px solid #7c3aed30",
                marginBottom: "16px",
              }}
            >
              <CertificationIcon type="degree" color="#7c3aed" />
            </div>
            <h3 style={{ marginBottom: "12px" }}>
              Bachelor of Computer Science
            </h3>
            <p style={{ color: "#4b5563", lineHeight: "1.7" }}>
              Saint Mary's University, 2022
            </p>
          </div>
        </div>
      </section>

      <section id="contact" style={{ marginTop: "60px", marginBottom: "40px" }}>
        <h2 style={{ marginBottom: "20px" }}>Contact</h2>

        <div
          style={{
            backgroundColor: "white",
            padding: "24px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
            maxWidth: "700px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <a
            href="mailto:ayalewatna@gmail.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "12px",
              color: "#111827",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            <EmailIcon size={18} color="#2563eb" /> 
            ayalewatna@gmail.com
          </a>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              marginBottom: "16px",
            }}
          >
            <a
              href="https://github.com/atnafb"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 14px",
                borderRadius: "10px",
                border: "1px solid #e5e7eb",
                textDecoration: "none",
                color: "#111827",
                fontWeight: "600",
                backgroundColor: "#f9fafb",
              }}
            >
              <GitHubIcon size={18} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/atnafuayalew/"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 14px",
                borderRadius: "10px",
                border: "1px solid #dbeafe",
                textDecoration: "none",
                color: "#111827",
                fontWeight: "600",
                backgroundColor: "#f8fbff",
              }}
            >
              <LinkedInIcon size={18} color="#2563eb" />
              LinkedIn
            </a>
          </div>

          <a
            href="https://atnafuayalew.com"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "12px",
              color: "#2563eb",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            <WebsiteIcon size={18} color="#2563eb" />
            atnafuayalew.com
          </a>

          <p>
            Open to opportunities in cloud engineering, cloud support, and data
            engineering.
          </p>
        </div>
      </section>

      <footer
        style={{
          marginTop: "40px",
          paddingTop: "20px",
          borderTop: "1px solid #d1d5db",
          color: "#4b5563",
          fontSize: "14px",
          textAlign: "center",
        }}
      >
        © 2026 Atnafu Ayalew. Built with React, Amazon S3, CloudFront, Route 53, AWS Lambda, Amazon Bedrock
        and ACM.
      </footer>

      <Chatbot />
    </div>
  );
}

export default App;
