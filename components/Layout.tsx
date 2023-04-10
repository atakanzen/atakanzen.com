import Sidebar from "./Sidebar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className={`${inter.className} relative`}>
        <Sidebar />
        <main className="mx-auto p-16 relative">{children}</main>
      </div>
    </>
  );
}
