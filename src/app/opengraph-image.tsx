import { SITE_CONFIG } from "@/lib/constants";
import { ImageResponse } from "next/og";

export const alt = "Assistant CLI — Modular & Localized AI Shell Wrapper";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#09090b",
        padding: "60px 70px",
        fontFamily: "sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
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
              border: "2px solid #ffffff",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontWeight: "900",
              fontSize: "26px",
            }}
          >
            &gt;_
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span
              style={{
                fontSize: "34px",
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "-0.5px",
              }}
            >
              {SITE_CONFIG.name}
            </span>
            <span
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#94a3b8",
                padding: "4px 10px",
                borderRadius: "9999px",
                border: "1px solid #94a3b8",
              }}
            >
              {SITE_CONFIG.version}
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
          {SITE_CONFIG.tagline}
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
          {SITE_CONFIG.description}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#171719",
          border: "1px solid #171719",
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
          <span>$</span>
          <span>
            curl -fsSL https://assistantcli.vercel.app/install.sh | bash
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "15px",
            color: "#64748b",
          }}
        >
          {SITE_CONFIG.githubUrl.split("https://")[1]}
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
