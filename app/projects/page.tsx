import Link from "next/link";
import { projects } from "../data/projects";

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

export default function Projects() {
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
        projects
      </p>
      <h1
        style={{
          fontSize: "clamp(28px, 4vw, 40px)",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          marginBottom: "16px",
          lineHeight: 1.2,
        }}
      >
        Work
      </h1>
      <p
        style={{
          fontSize: "15px",
          color: "var(--text-secondary)",
          marginBottom: "56px",
          lineHeight: 1.7,
        }}
      >
        A log of what I&apos;ve built. Hardware and security are the primary tracks;
        software projects are here for range.
      </p>

      <div>
        {projects.map((p, i) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                padding: "32px 0",
                borderTop: i === 0 ? "1px solid var(--border)" : "none",
                borderBottom: "1px solid var(--border)",
                display: "grid",
                gridTemplateColumns: "40px 1fr auto",
                gap: "20px",
                alignItems: "start",
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
                <h2
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "var(--text-primary)",
                    marginBottom: "8px",
                  }}
                >
                  {p.title}
                </h2>
                <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  {p.tagline}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "16px" }}>
                  {p.stack.slice(0, 4).map((s) => (
                    <span
                      key={s}
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: "10px",
                        color: "var(--text-secondary)",
                        backgroundColor: "var(--surface)",
                        border: "1px solid var(--border)",
                        padding: "3px 8px",
                        borderRadius: "2px",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "10px",
                  color: trackColour[p.track],
                  border: `1px solid ${trackColour[p.track]}40`,
                  padding: "3px 8px",
                  borderRadius: "2px",
                  whiteSpace: "nowrap",
                  marginTop: "4px",
                }}
              >
                {trackLabel[p.track]}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
