import Sidebar from "./Sidebar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <div
        className={`${inter.className} h-screen grid grid-rows-6 xl:grid-rows-1 grid-cols-1 xl:grid-cols-12`}
      >
        <div className="row-start-1 row-span-1 xl:col-span-2  xl:col-start-11">
          <Sidebar />
        </div>

        <main className="mx-auto p-10 col-span-12 row-span-5 row-start-2 col-start-1 xl:col-span-10  xl:row-start-1 ">
          {children}
        </main>
      </div>
    </div>
  );
}
