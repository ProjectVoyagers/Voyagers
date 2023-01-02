import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Categories  from "../components/categories/categories";
import About from "../components/about/about";
import Recommend from "../components/Recommendations/recommendations";
import Reviews from "../components/reviews/reviews";
import Footer from "../components/footer/footer";

import ScrollReveal from "scrollreveal";
import { useEffect } from "react";


const LandingPage = () => {
    useEffect(() =>{
        const sr = ScrollReveal({
          origin: "top",
          distance: "80px",
          duration: 1500,
          reset: true
        });
        sr.reveal(
          `
          #about,
          #recommend,
          #testimonials
          `
        )
      } ,[])
    return (
        <>
            <Hero />
            <Categories />
            <About />
            <Recommend />
            <Reviews />
            <Footer />
        </>
    )
}

export default LandingPage;