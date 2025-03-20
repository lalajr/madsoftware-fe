import "./../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
      </head>
      <body className={`min-h-full antialiased`}>
        {children}
      </body>
    </html>
  );
}
