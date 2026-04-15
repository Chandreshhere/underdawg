import "./globals.css";
import ClientLayout from "@/client-layout";
import { ViewTransitions } from "next-view-transitions";

export const metadata = {
  title: "Underdawg | The Creator OS",
  description: "Get Discovered. Get Connected. Get Paid.",
  icons: {
    icon: "/site-logo.png",
    shortcut: "/site-logo.png",
    apple: "/site-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ViewTransitions>
          <ClientLayout>{children}</ClientLayout>
        </ViewTransitions>
      </body>
    </html>
  );
}
