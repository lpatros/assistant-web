import { ImageResponse } from "next/og";

export const alt = "Assistant CLI — Documentation & Reference Guides";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  const topics = [
    { title: "Installation & Setup", color: "#38bdf8" },
    { title: "Multi-Engine Matrix", color: "#6366f1" },
    { title: "Smart Commit & Skills", color: "#34d399" },
    { title: "Custom Drivers & Locales", color: "#f59e0b" },
    { title: "Ollama Think Mode", color: "#ec4899" },
    { title: "CLI Cheat Sheet", color: "#a855f7" },
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
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-80px",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(14, 165, 233, 0.25) 0%, rgba(9, 13, 22, 0) 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-120px",
            left: "-80px",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.22) 0%, rgba(9, 13, 22, 0) 70%)",
            borderRadius: "50%",
          }}
        />

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
            <span
              style={{
                fontSize: "30px",
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "-0.5px",
              }}
            >
              Assistant CLI
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(14, 165, 233, 0.12)",
              border: "1px solid rgba(14, 165, 233, 0.35)",
              padding: "6px 14px",
              borderRadius: "9999px",
              color: "#38bdf8",
              fontSize: "14px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Documentation &amp; Reference
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1
            style={{
              fontSize: "50px",
              fontWeight: 800,
              color: "#f8fafc",
              lineHeight: 1.15,
              margin: 0,
              letterSpacing: "-1px",
              maxWidth: "1000px",
            }}
          >
            Complete Guides, Architecture &amp; Command Reference
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
            Master installation on Linux, macOS &amp; Windows, customize AI engines and build custom skills.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              marginTop: "8px",
            }}
          >
            {topics.map((t) => (
              <div
                key={t.title}
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
                    backgroundColor: t.color,
                  }}
                />
                {t.title}
              </div>
            ))}
          </div>
        </div>

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
              gap: "10px",
              fontSize: "18px",
              fontWeight: 600,
              color: "#38bdf8",
            }}
          >
            <span>assistantcli.vercel.app/docs</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "15px",
              color: "#64748b",
            }}
          >
            Free &amp; Open Source
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
