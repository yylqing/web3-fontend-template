import { useEffect } from "react";
import Head from 'next/head';

import ConnectWallet from '../components/ConnectWallet';

export default function Home() {
  useEffect(() => {
    if (window.console) {
      console.log("%c祝您发财！", "font-size: 20px;font-weight:bold;");
    }
  }, []);

  return (
    <div className="min-h-screen bg-orange-100 text-center ">
      <div className="h-10"></div>
      <ConnectWallet className="m-auto" />
    </div>
  )
}
