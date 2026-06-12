import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        // Security headers for all routes
        source: "/(.*)",
        headers: securityHeaders,
      },
      {
        // Cache static images for 1 year
        source: "/:all*(svg|jpg|jpeg|png|gif|ico|webp)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "Expires",
            value: new Date(Date.now() + 31536000000).toUTCString(),
          },
        ],
      },
      {
        // Cache videos for 1 year
        source: "/:all*(mp4|webm|ogg)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "Expires",
            value: new Date(Date.now() + 31536000000).toUTCString(),
          },
        ],
      },
      {
        // Cache fonts for 1 year
        source: "/:all*(woff|woff2|ttf|otf|eot)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "Expires",
            value: new Date(Date.now() + 31536000000).toUTCString(),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
