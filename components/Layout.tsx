import Sidebar from "./Sidebar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div
        className={`${inter.className} h-screen grid grid-cols-1 grid-rows xl:grid-rows-1 xl:grid-cols-12`}
      >
        <div className="xl:fixed xl:right-0 xl:bottom-0 row-start-1 row-span-1 xl:col-span-2  xl:col-start-11 ">
          <Sidebar />
        </div>
        <div className="col-span-1 row-span-5 row-start-2 col-start-1 xl:col-span-10  xl:row-start-1 xl:row-span-1">
          <main className="mx-auto p-4 h-full">{children}</main>
        </div>
      </div>
    </>
  );
}
