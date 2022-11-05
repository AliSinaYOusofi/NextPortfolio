import Head from "next/head";
import Script from "next/script";
// import Contact from "../components/Contact.tsx/Contarct";
// import Footer from "../components/Footer/Footer";
// import Main from "../components/Main";
// import MenuItem from "../components/Menu.tsx/MenuItem";
// import Navbar from "../components/Navbar/Navbar"

// import AllTesimonies from "../components/Testimonials/AllTesimonies";
import Testimony from "../components/Testimonials/Tesmony";

// importing our context
import { StateProvider } from "../context/ThemeProvider";
import reducer, {initialThem} from "../context/reducer"; // our reducer function
import dynamic from "next/dynamic";


// importing dynamic avoiding ssr
const Projects = dynamic(() => import("../components/Projects/Projects"), {ssr: false});
const AllTesimonies = dynamic( () => import("../components/Testimonials/AllTesimonies"), {ssr: true});
const Navbar = dynamic( () => import ("../components/Navbar/Navbar"), {ssr: true});
const MenuItem = dynamic( () => import ("../components/Menu.tsx/MenuItem"), {ssr: true});
const Footer = dynamic( () => import ("../components/Footer/Footer"), {ssr: true});
const Contact = dynamic( () => import ("../components/Contact.tsx/Contarct"), {ssr: true});
const Main = dynamic( () => import ("../components/Main"), {ssr: true});

export default function Home() {
  return (
    <>
      <Head>
        <title>Ali Sina</title>
        <meta name="description" content="npm" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StateProvider reducer={reducer} initialTheme={initialThem} >
        <Navbar />
        <MenuItem show={false}/>
        <Main />
        <AllTesimonies />
        <Projects />
        <Contact />
        <Footer /> 
      </StateProvider>
    </>
  );
}
