import { useEffect } from "react";
import Head from "next/head";

import ConnectWallet from "../components/ConnectWallet";

export default function Home() {
  useEffect(() => {
    if (window.console) {
      console.log("%c祝您发财！", "font-size: 20px;font-weight:bold;");
    }
  }, []);

  return (
    <div className="min-h-screen bg-orange-100 text-center ">
      <Head>
        <title>eTibet</title>
        <meta name="description" content="传承！" />
        <link rel="icon" href="/board.png" />

        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
        `,
          }}
        />
      </Head>
      <div className="h-10"></div>
      <ConnectWallet className="m-auto" />
    </div>
  );
}
