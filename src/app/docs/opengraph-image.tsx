import { SITE_CONFIG } from "@/lib/constants";
import { ImageResponse } from "next/og";

export const alt = "Assistant CLI — Documentation & Reference Guides";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {

  return new ImageResponse(
    (
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
            <span
              style={{
                fontSize: "30px",
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "-0.5px",
              }}
            >
              {SITE_CONFIG.name}
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#171719",
              border: "1px solid #94a3b8",
              padding: "6px 14px",
              borderRadius: "9999px",
              color: "#94a3b8",
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
              gap: "10px",
              fontSize: "18px",
              fontWeight: 600,
              color: "#38bdf8",
            }}
          >
            <span>https://assistantcli.vercel.app/docs</span>
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
