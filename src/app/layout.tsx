import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LinkNavigationMenu from "../../component/molecules/link_navigation_menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OreOrePlayground",
  description: "This site is personal playground.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta title='Ore Ore Play Ground' />
      </head>
      <body className={`${inter.className}`}>
        {/* main header */}
        <header className='block justify-center items-center w-full bg-slate-600'>
          <h1 className=' h-10'>This site is a personal playground.</h1>

          {/* navigation */}
          {/* TODO：マウスホバー時の色を調整する */}
          {/* TODO：どのページにいるかでエフェクトを追加する（Github参考） */}
          {/* TODO：Navigationメニューとメインコンテンツとの境界線を示す罫線を自然な色にする、影を追加する？ */}
          <nav className='flex justify-start items-center py-1 h-auto border-b border-gray-400 '>
            <ul className='flex pl-2'>
              <LinkNavigationMenu link={"/"}>Home</LinkNavigationMenu>
              <LinkNavigationMenu link={"/nextjs"}>Next.js</LinkNavigationMenu>
              <LinkNavigationMenu link={"/atomic_design"}>
                Atomic Design
              </LinkNavigationMenu>
              <LinkNavigationMenu link={"/tailwindcss"}>
                TailwindCSS
              </LinkNavigationMenu>
            </ul>
            <p className='ml-10 bg-slate-400'>なにかいれるかも</p>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
