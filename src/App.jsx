function App() {
  const projects = [
    {
      title: "CareSync – AWS Healthcare Platform",
      description:
        "Cloud-native healthcare app using AWS VPC, RDS MySQL, Cognito, API Gateway, Lambda, and CloudFormation.",
      tags: ["AWS", "RDS", "Lambda", "Cognito"],
      link: "https://github.com/atnafb/atnafb.git",
    },
    {
      title: "Database Migration to AWS",
      description:
        "Database migration project focused on moving relational data to Amazon RDS using AWS DMS and CloudWatch monitoring.",
      tags: ["AWS DMS", "RDS", "CloudWatch", "Migration"],
      link: "https://github.com/atnafb",
    },
    {
      title: "Housing Market Analysis",
      description:
        "Data analytics project using Python, SQL, Pandas, and visualizations to analyze housing market trends.",
      tags: ["Python", "SQL", "Pandas", "Analytics"],
      link: "https://github.com/atnafb/NC_housing_market.git",
    },
    {
      title: "ETL Data Pipeline",
      description:
        "Data engineering pipeline concept using Amazon S3, AWS Glue, Amazon Redshift, and QuickSight.",
      tags: ["S3", "Glue", "Redshift", "QuickSight"],
      link: "https://github.com/atnafb",
    },
    {
      title: "Task Tracker Application",
      description:
        "Task management app built with Flask, DynamoDB, EC2, Nginx, and Linux server configuration.",
      tags: ["Flask", "DynamoDB", "EC2", "Linux"],
      link: "https://github.com/atnafb/taskTracker.git",
    },
  ];

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "60px 40px",
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
  <h2 style={{ margin: 0 }}>Atnafu Ayalew</h2>

    <div style={{ display: "flex", gap: "20px" }}>
      <a href="#projects" style={{ textDecoration: "none", color: "#111827", fontWeight: "500" }}>Projects</a>
      <a href="#skills" style={{ textDecoration: "none", color: "#111827", fontWeight: "500" }}>Skills</a>
      <a href="#certifications" style={{ textDecoration: "none", color: "#111827", fontWeight: "500" }}>Certifications</a>
      <a href="#contact" style={{ textDecoration: "none", color: "#111827", fontWeight: "500" }}>Contact</a>
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
    <h1 style={{ fontSize: "56px", marginBottom: "10px" }}>
      Atnafu Ayalew
    </h1>

    <h2 style={{ color: "#2563eb", marginBottom: "20px" }}>
      Cloud Engineer | Data Engineer
    </h2>

    <p style={{ fontSize: "18px", lineHeight: "1.6", maxWidth: "800px" }}>
      AWS re/Start graduate and Data Analytics Certificate holder from UNC
      Charlotte with hands-on experience in cloud architecture, database
      design, data engineering, and analytics. Passionate about building
      scalable cloud solutions on AWS and transforming data into meaningful
      business insights.
    </p>

    <div style={{ marginTop: "25px", display: "flex", gap: "16px" }}>
      <a href="#projects">
        <button>View Projects</button>
      </a>

      <button>Download Resume</button>
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
      <li>AWS Cloud Engineering</li>
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

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  marginTop: "20px",
                  display: "inline-block",
                  textDecoration: "none",
                  color: "#2563eb",
                  fontWeight: "600",
                }}
              >
                View Project →
              </a>
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
          <div>
            <h3>AWS</h3>
            <ul>
              <li>EC2, S3, RDS, Aurora</li>
              <li>VPC, Subnets, Security Groups</li>
              <li>Lambda, API Gateway, Cognito</li>
              <li>CloudFormation, CloudWatch</li>
              <li>Route 53, CloudFront</li>
            </ul>
          </div>

          <div>
            <h3>Programming</h3>
            <p>Python, SQL, JavaScript</p>
          </div>

          <div>
            <h3>Data Engineering</h3>
            <p>
              ETL Pipelines, AWS Glue, Redshift, QuickSight, Pandas,
              SQLAlchemy, PySpark
            </p>
          </div>

          <div>
            <h3>Tools</h3>
            <p>Git, GitHub, Linux, VS Code, Tableau, Power BI</p>
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
          <div>
            <h3>AWS re/Start Graduate</h3>
            <p>Expected July 2026</p>
          </div>

          <div>
            <h3>AWS Certified Cloud Practitioner</h3>
            <p>In Progress</p>
          </div>

          <div>
            <h3>UNC Charlotte Data Analytics Certificate</h3>
            <p>Completed 2025</p>
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
          }}
        >
          <p>
            <strong>Email:</strong> ayalewatna@gmail.com
          </p>

          <p style={{ marginBottom: "12px" }}>
            <strong>GitHub:</strong>{" "}
            <a 
            href="https://github.com/atnafb"
            target="_blank"
            rel="noreferrer"
            >
              github.com/atnafb
            </a>
          </p>

          <p style={{ marginBottom: "12px" }}>
            <strong>LinkedIn:</strong>{" "}
            <a 
             href="https://www.linkedin.com/in/atnafuayalew/"
             target="_blank"
             rel="noreferrer"
            >
            linkedin.com/in/atnafuayalew
            </a> 
          </p>

          <p>
            Open to opportunities in cloud engineering, cloud support, and data engineering.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;