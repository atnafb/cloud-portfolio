function App() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "60px 40px",
      }}
    >
      <section style={{ marginBottom: "60px" }}>
        <h1
          style={{
            fontSize: "56px",
            marginBottom: "10px",
          }}
        >
          Atnafu Ayalew
        </h1>

        <h2
          style={{
            color: "#2563eb",
            marginBottom: "20px",
          }}
        >
          Cloud Engineer | Data Engineer
        </h2>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.6",
            maxWidth: "800px",
          }}
        >
          AWS re/Start graduate and Data Analytics Certificate holder from
          UNC Charlotte with hands-on experience in cloud architecture,
          database design, data engineering, and analytics. Passionate about
          building scalable cloud solutions on AWS and transforming data into
          meaningful business insights.
        </p>

        <div style={{ marginTop: "25px" }}>
          <button>View Projects</button>
          <button>Download Resume</button>
        </div>
      </section>

      <hr />

      <section style={{ marginTop: "40px" }}>
        <h2 style={{ marginBottom: "20px" }}>
          Featured Projects
        </h2>

        <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  }}
>
  {[
    "CareSync – AWS Healthcare Platform",
    "Database Migration to AWS",
    "Housing Market Analysis",
    "ETL Data Pipeline",
    "Task Tracker Application",
  ].map((project) => (
    <div
      key={project}
      style={{
        backgroundColor: "white",
        padding: "24px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
      }}
    >
      <h3>{project}</h3>
      <p style={{ marginTop: "10px", color: "#4b5563" }}>
        Project details coming soon.
      </p>
    </div>
  ))}
</div>
      </section>
    </div>
  );
}

export default App;