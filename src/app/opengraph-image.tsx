import { ImageResponse } from "next/og";

export const alt = "Assistant CLI — Modular & Localized AI Shell Wrapper";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  const engines = [
    { name: "Antigravity", color: "#6366f1" },
    { name: "Codex", color: "#38bdf8" },
    { name: "Copilot", color: "#a855f7" },
    { name: "Ollama", color: "#34d399" },
    { name: "OpenCode", color: "#f59e0b" },
    { name: "Custom Engines", color: "#ec4899" },
  ];

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#090d16",
          padding: "60px 70px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow Effects */}
        <div
          style={{
            position: "absolute",
            top: "-150px",
            right: "-100px",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.28) 0%, rgba(9, 13, 22, 0) 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            left: "-100px",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.22) 0%, rgba(9, 13, 22, 0) 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                backgroundColor: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#090d16",
                fontWeight: "900",
                fontSize: "26px",
              }}
            >
              &gt;_
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
              <span
                style={{
                  fontSize: "34px",
                  fontWeight: 800,
                  color: "#ffffff",
                  letterSpacing: "-0.5px",
                }}
              >
                Assistant CLI
              </span>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#38bdf8",
                  backgroundColor: "rgba(56, 189, 248, 0.12)",
                  padding: "4px 10px",
                  borderRadius: "9999px",
                  border: "1px solid rgba(56, 189, 248, 0.3)",
                }}
              >
                v1.4.0
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "16px",
              color: "#94a3b8",
            }}
          >
            <span>Linux</span>
            <span>•</span>
            <span>macOS</span>
            <span>•</span>
            <span>Windows</span>
          </div>
        </div>

        {/* Main Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <h1
            style={{
              fontSize: "52px",
              fontWeight: 800,
              color: "#f8fafc",
              lineHeight: 1.15,
              margin: 0,
              letterSpacing: "-1px",
              maxWidth: "1000px",
            }}
          >
            Lightweight, Modular & Localized Shell Wrapper for AI
          </h1>
          <p
            style={{
              fontSize: "22px",
              color: "#94a3b8",
              lineHeight: 1.4,
              margin: 0,
              maxWidth: "950px",
            }}
          >
            Interactive terminal chat, commit automation, and dynamic custom skills across multiple AI engines with zero heavy dependencies.
          </p>

          {/* Engine Badges */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginTop: "8px",
            }}
          >
            {engines.map((eng) => (
              <div
                key={eng.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "rgba(30, 41, 59, 0.7)",
                  border: "1px solid rgba(71, 85, 105, 0.5)",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  color: "#f1f5f9",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: eng.color,
                  }}
                />
                {eng.name}
              </div>
            ))}
          </div>
        </div>

        {/* Footer / Install Command Box */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "rgba(15, 23, 42, 0.85)",
            border: "1px solid rgba(51, 65, 85, 0.8)",
            borderRadius: "12px",
            padding: "16px 24px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontFamily: "monospace",
              fontSize: "18px",
              color: "#38bdf8",
            }}
          >
            <span style={{ color: "#a855f7", fontWeight: 700 }}>$</span>
            <span>curl -fsSL https://assistantcli.vercel.app/install.sh | bash</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "15px",
              color: "#64748b",
            }}
          >
            github.com/lpatros/assistant-cli
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
