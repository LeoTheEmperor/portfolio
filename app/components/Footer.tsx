export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        marginTop: "96px",
        padding: "40px 24px",
        maxWidth: "720px",
        margin: "96px auto 0",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <span
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "12px",
            color: "var(--text-secondary)",
          }}
        >
          Tanishq Nayak — PDEU, Gandhinagar
        </span>
        <div style={{ display: "flex", gap: "24px" }}>
          {[
            { label: "GitHub", href: "https://github.com/LeoTheEmperor" },
            { label: "LinkedIn", href: "https://linkedin.com/in/tanishq-nayak" },
            { label: "Email", href: "mailto:tanishq@example.com" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "13px",
                color: "var(--text-secondary)",
                textDecoration: "none",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
