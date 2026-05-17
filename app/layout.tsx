import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Slack Channel Auto-Archiver — Auto-archive dead Slack channels with smart rules",
  description: "Monitors Slack workspace activity and automatically archives channels based on configurable inactivity thresholds and member count. Keep your workspace clean."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="507514ce-94d8-4fd6-9f75-80232b17491a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
