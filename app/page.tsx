import Link from "next/link";
import { projects } from "./data/projects";

const trackColour: Record<string, string> = {
  hardware: "#60A5FA",
  security: "#34D399",
  software: "#A78BFA",
};

const trackLabel: Record<string, string> = {
  hardware: "Hardware",
  security: "Security",
  software: "Software",
};

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <div
      className="fade-in"
      style={{
        maxWidth: "720px",
        margin: "0 auto",
        padding: "80px 24px 0",
      }}
    >
      {/* Hero */}
      <section style={{ paddingBottom: "80px", borderBottom: "1px solid var(--border)" }}>
        <p
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "12px",
            color: "var(--accent)",
            letterSpacing: "0.06em",
            marginBottom: "24px",
          }}
        >
          hardware meets security
        </p>
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 600,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
            marginBottom: "24px",
            maxWidth: "580px",
          }}
        >
          Building systems that are hard to break and easy to understand.
        </h1>
        <p
          style={{
            fontSize: "17px",
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            maxWidth: "520px",
            marginBottom: "40px",
          }}
        >
          I&apos;m Tanishq Nayak, a final-year Computer Science student at PDEU,
          Gandhinagar. I work at the boundary of hardware design and security —
          implementing cryptographic systems in RTL and building ML-driven threat
          detection tools.
        </p>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Link
            href="/projects"
            style={{
              display: "inline-block",
              padding: "10px 24px",
              backgroundColor: "var(--accent)",
              color: "#fff",
              borderRadius: "4px",
              fontSize: "14px",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            See my work
          </Link>
          <Link
            href="/about"
            style={{
              display: "inline-block",
              padding: "10px 24px",
              border: "1px solid var(--border)",
              color: "var(--text-secondary)",
              borderRadius: "4px",
              fontSize: "14px",
              textDecoration: "none",
            }}
          >
            About me
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section style={{ paddingTop: "64px" }}>
        <h2
          style={{
            fontSize: "13px",
            fontWeight: 500,
            color: "var(--text-secondary)",
            letterSpacing: "0.04em",
            marginBottom: "40px",
          }}
        >
          Selected projects
        </h2>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {featured.map((p, i) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  padding: "28px 0",
                  borderTop: i === 0 ? "1px solid var(--border)" : "none",
                  borderBottom: "1px solid var(--border)",
                  display: "grid",
                  gridTemplateColumns: "40px 1fr",
                  gap: "20px",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "11px",
                    color: "var(--text-secondary)",
                    paddingTop: "4px",
                  }}
                >
                  {p.label}
                </span>
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "8px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "16px",
                        fontWeight: 500,
                        color: "var(--text-primary)",
                      }}
                    >
                      {p.title}
                    </span>
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: "10px",
                        color: trackColour[p.track],
                        border: `1px solid ${trackColour[p.track]}40`,
                        padding: "2px 8px",
                        borderRadius: "2px",
                      }}
                    >
                      {trackLabel[p.track]}
                    </span>
                  </div>
                  <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                    {p.tagline}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: "32px" }}>
          <Link
            href="/projects"
            style={{
              fontSize: "14px",
              color: "var(--accent)",
              textDecoration: "none",
            }}
          >
            All projects ({projects.length})
          </Link>
        </div>
      </section>

      {/* Contact strip */}
      <section
        style={{
          marginTop: "80px",
          padding: "40px",
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "6px",
        }}
      >
        <h2
          style={{
            fontSize: "20px",
            fontWeight: 500,
            marginBottom: "12px",
            color: "var(--text-primary)",
          }}
        >
          Open to opportunities
        </h2>
        <p style={{ fontSize: "14px", color: "var(--text-secondary)", marginBottom: "24px", lineHeight: 1.7 }}>
          Looking for internships and entry-level roles in hardware engineering and
          cybersecurity. Based in India; open to remote.
        </p>
        <a
          href="mailto:tanishq@example.com"
          style={{
            fontSize: "14px",
            color: "var(--accent)",
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          Get in touch
        </a>
      </section>
    </div>
  );
}
