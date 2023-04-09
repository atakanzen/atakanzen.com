import Sidebar from "./Sidebar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className={inter.className}>
        <main className="flex min-h-screen flex-col items-start p-24">
          {children}
        </main>
        <Sidebar />
      </div>
    </>
  );
}
