import "./globals.css";
import ClientLayout from "@/client-layout";
import { ViewTransitions } from "next-view-transitions";

export const metadata = {
  title: "Underdawg | The Creator OS",
  description: "Get Discovered. Get Connected. Get Paid.",
  icons: {
    icon: [{ url: "/favicon-u.svg", type: "image/svg+xml" }],
    shortcut: "/favicon-u.svg",
    apple: "/favicon-u.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body>
        <ViewTransitions>
          <ClientLayout>{children}</ClientLayout>
        </ViewTransitions>
      </body>
    </html>
  );
}
