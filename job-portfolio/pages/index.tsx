import Head from "next/head";
import Script from "next/script";
import Contact from "../components/Contact/Contarct";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main";
import MenuItem from "../components/Menu.tsx/MenuItem";
import Navbar from "../components/Navbar/Navbar"
import Projects from "../components/Projects/Projects";
import AllTesimonies from "../components/Testimonials/AllTesimonies";
import Testimony from "../components/Testimonials/Tesmony";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Ali Sina</title>
        <meta name="description" content="npm" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      
      <MenuItem show={false}/>
      
      <Main />
      <AllTesimonies />
      <Projects />
      <Contact />
      <Footer /> 
    </div>
  );
}
