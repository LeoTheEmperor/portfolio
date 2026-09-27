import { projects } from "../../data/projects";
import Link from "next/link";
import { notFound } from "next/navigation";

const trackColour: Record<string, string> = {
  hardware: "#60A5FA",
  security: "#34D399",
  software: "#A78BFA",
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div
      className="fade-in"
      style={{
        maxWidth: "720px",
        margin: "0 auto",
        padding: "80px 24px 0",
      }}
    >
      <Link
        href="/projects"
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "12px",
          color: "var(--text-secondary)",
          textDecoration: "none",
          display: "inline-block",
          marginBottom: "40px",
        }}
      >
        Back to projects
      </Link>

      <div style={{ marginBottom: "48px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "11px",
              color: "var(--text-secondary)",
            }}
          >
            {project.label}
          </span>
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "10px",
              color: trackColour[project.track],
              border: `1px solid ${trackColour[project.track]}40`,
              padding: "2px 8px",
              borderRadius: "2px",
            }}
          >
            {project.track.charAt(0).toUpperCase() + project.track.slice(1)}
          </span>
        </div>
        <h1
          style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
            marginBottom: "16px",
          }}
        >
          {project.title}
        </h1>
        <p
          style={{
            fontSize: "17px",
            color: "var(--text-secondary)",
            lineHeight: 1.7,
          }}
        >
          {project.tagline}
        </p>
      </div>

      <div
        style={{
          borderTop: "1px solid var(--border)",
          paddingTop: "40px",
          marginBottom: "40px",
        }}
      >
        <p style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "24px" }}>
          {project.summary}
        </p>
        <p style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.8 }}>
          {project.detail}
        </p>
      </div>

      <div
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "6px",
          padding: "32px",
          marginBottom: "40px",
        }}
      >
        <h2
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "11px",
            color: "var(--text-secondary)",
            letterSpacing: "0.04em",
            marginBottom: "20px",
          }}
        >
          highlights
        </h2>
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
          {project.highlights.map((h) => (
            <li
              key={h}
              style={{
                fontSize: "14px",
                color: "var(--text-primary)",
                lineHeight: 1.6,
                paddingLeft: "16px",
                borderLeft: `2px solid ${trackColour[project.track]}`,
              }}
            >
              {h}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ marginBottom: "40px" }}>
        <h2
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "11px",
            color: "var(--text-secondary)",
            letterSpacing: "0.04em",
            marginBottom: "16px",
          }}
        >
          stack
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {project.stack.map((s) => (
            <span
              key={s}
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "12px",
                color: "var(--text-primary)",
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
                padding: "5px 12px",
                borderRadius: "3px",
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {project.repoUrl && (
        <div style={{ display: "flex", gap: "16px" }}>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "14px",
              color: "var(--accent)",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            View on GitHub
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "14px",
                color: "var(--text-secondary)",
                textDecoration: "none",
              }}
            >
              Live demo
            </a>
          )}
        </div>
      )}
    </div>
  );
}
