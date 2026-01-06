import "./globals.css";
import Header from "@/components/layout/Header";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Header />
        <main className="pt-24">{children}</main>
        {/*  Toast Container */}
        <ToastContainer 
         position="top-right"
         autoClose={3000}
         hideProgressBar={false}
         newestOnTop
         closeOnClick
         pauseOnHover
         theme="dark"
        />
      </body>
    </html>
  );
}
