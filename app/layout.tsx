import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TaxInvoice — Instant tax estimates for every invoice",
  description: "Calculates quarterly tax estimates as freelancers create invoices. Track deductions and never be surprised at tax time again."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f7192694-05c0-48c4-a99a-aaa9a98f2b40"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  );
}
