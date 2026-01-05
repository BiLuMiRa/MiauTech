import { Header } from "../../components/miaujuda/header";
import { Footer } from "../../components/miaujuda/footer";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        
        <Header/>

        {children}

        <Footer/>
  
      </body>
    </html>
  );
}
