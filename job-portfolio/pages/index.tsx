import Head from "next/head";
import Script from "next/script";
import Main from "../components/Main";
import MenuItem from "../components/Menu.tsx/MenuItem";
import Navbar from "../components/Navbar/Navbar"
export default function Home() {
  return (
    <div>
      <Head>
        <title>Ali Sina</title>
        <meta name="description" content="npm" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div>
        
      </div>
      <MenuItem show={false}/>
      <Main />
      
    </div>
  );
}
