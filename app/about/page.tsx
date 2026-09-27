export default function About() {
  return (
    <div
      className="fade-in"
      style={{
        maxWidth: "720px",
        margin: "0 auto",
        padding: "80px 24px 0",
      }}
    >
      <p
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "12px",
          color: "var(--accent)",
          letterSpacing: "0.06em",
          marginBottom: "24px",
        }}
      >
        about
      </p>

      <h1
        style={{
          fontSize: "clamp(28px, 4vw, 40px)",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          marginBottom: "40px",
          lineHeight: 1.2,
        }}
      >
        Tanishq Nayak
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          marginBottom: "64px",
        }}
      >
        {[
          { label: "Degree", value: "B.Tech, Computer Science and Engineering" },
          { label: "University", value: "Pandit Deendayal Energy University, Gandhinagar" },
          { label: "Expected graduation", value: "2027" },
          { label: "Tracks", value: "Hardware Engineering, Cybersecurity" },
        ].map((item) => (
          <div key={item.label}>
            <p
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "11px",
                color: "var(--text-secondary)",
                marginBottom: "6px",
                letterSpacing: "0.03em",
              }}
            >
              {item.label}
            </p>
            <p style={{ fontSize: "14px", color: "var(--text-primary)" }}>{item.value}</p>
          </div>
        ))}
      </div>

      <div
        style={{
          borderTop: "1px solid var(--border)",
          paddingTop: "48px",
          marginBottom: "48px",
        }}
      >
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: "var(--text-secondary)",
            marginBottom: "24px",
          }}
        >
          I work at the boundary of hardware design and security. My projects
          span RTL implementation of post-quantum cryptographic systems and
          ML-driven network intrusion detection — not as separate interests, but
          as two sides of the same question: how do you build a system that does
          exactly what it&apos;s supposed to, and nothing else?
        </p>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: "var(--text-secondary)",
            marginBottom: "24px",
          }}
        >
          I approach hard problems by making them legible first. Before I write
          a line of Verilog or train a model, I want to understand what the
          problem actually is — and be able to explain it to someone else in
          plain terms. That habit shows up in how I write READMEs, how I
          structure testbenches, and how I talk through designs.
        </p>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: "var(--text-secondary)",
          }}
        >
          Outside technical work, I lead Mind Ripple — PDEU&apos;s quizzing club —
          where I organise events and have spent a fair amount of time learning
          how to get a group of people moving in the same direction.
        </p>
      </div>

      <div style={{ borderTop: "1px solid var(--border)", paddingTop: "48px" }}>
        <h2
          style={{
            fontSize: "15px",
            fontWeight: 500,
            marginBottom: "24px",
            color: "var(--text-primary)",
          }}
        >
          Skills and tools
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {[
            {
              area: "Hardware",
              items: ["Verilog", "FPGA Design", "RTL", "Digital Logic", "UART / SPI / I2C", "Embedded Systems"],
            },
            {
              area: "Security",
              items: ["Cryptography", "Post-Quantum Cryptography", "Intrusion Detection", "Network Security", "VAPT basics"],
            },
            {
              area: "Software",
              items: ["Python", "C / C++", "Java", "Scikit-learn", "PyTorch", "Streamlit", "React", "Flask"],
            },
          ].map((group) => (
            <div
              key={group.area}
              style={{
                display: "grid",
                gridTemplateColumns: "100px 1fr",
                gap: "16px",
                alignItems: "start",
              }}
            >
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "11px",
                  color: "var(--text-secondary)",
                  paddingTop: "2px",
                }}
              >
                {group.area}
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {group.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "12px",
                      color: "var(--text-primary)",
                      backgroundColor: "var(--surface)",
                      border: "1px solid var(--border)",
                      padding: "4px 10px",
                      borderRadius: "3px",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
