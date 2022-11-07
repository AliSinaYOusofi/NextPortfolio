import Head from "next/head";
import Script from "next/script";
// import Contact from "../components/Contact.tsx/Contarct";
// import Footer from "../components/Footer/Footer";
// import Main from "../components/Main";
// import MenuItem from "../components/Menu.tsx/MenuItem";
// import Navbar from "../components/Navbar/Navbar"

// import AllTesimonies from "../components/Testimonials/AllTesimonies";


import dynamic from "next/dynamic";
import { useThemeProvider } from "../context/ThemeProvider";


// importing dynamic avoiding ssr
const Projects = dynamic(() => import("../components/Projects/Projects"), {ssr: false});
const AllTesimonies = dynamic( () => import("../components/Testimonials/AllTesimonies"), {ssr: true});
const Navbar = dynamic( () => import ("../components/Navbar/Navbar"), {ssr: true});
const MenuItem = dynamic( () => import ("../components/Menu.tsx/MenuItem"), {ssr: true});
const Footer = dynamic( () => import ("../components/Footer/Footer"), {ssr: true});
const Contact = dynamic( () => import ("../components/Contact.tsx/Contarct"), {ssr: false});
const Main = dynamic( () => import ("../components/Main"), {ssr: true});


export default function Home() {
  
  const [{theme}] = useThemeProvider(); // getting the current theme
  //
  return (
    <div style={{backgroundColor: theme ? "#060A11" : "#FBFAF2"}} id="main">
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
