import "./globals.css";

export const metadata = {
  title: "Saviour || Saviour is OP",
  description: "Saviour || Saviour is OP",
};

export default function RootLayout({ children }) {
  return (
    <html
      className="text-[10px] max-[1557px]:text-[8px] max-[500]:text-[6px]"
      lang="en">
      <body>{children}</body>
    </html>
  );
}
