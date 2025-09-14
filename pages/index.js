import Head from "next/head";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Static imports for above-the-fold content
import Navbar from "@/components/Navbar";
import IntroductionCard from "@/components/IntroductionCard";
import Footer from "../components/Footer";

// Dynamic imports for below-the-fold content
const TechStackComponent = dynamic(() => import("@/components/TechStackComponent"), {
  loading: () => <div className="h-96 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg" />
});
const AspirationComponent = dynamic(() => import("@/components/AspirationComponent"), {
  loading: () => <div className="h-64 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg" />
});
const Achievements = dynamic(() => import("@/components/Achievements"), {
  loading: () => <div className="h-64 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg" />
});
const PortfolioComponent = dynamic(() => import("@/components/PortfolioComponent"), {
  loading: () => <div className="h-96 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg" />
});
const ResumeComponent = dynamic(() => import("@/components/ResumeComponent"), {
  loading: () => <div className="h-64 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg" />
});
const GitHubWidget = dynamic(() => import("../components/GitHubWidget"), {
  loading: () => <div className="h-64 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg" />
});
const ContactForm = dynamic(() => import("../components/ContactForm"), {
  loading: () => <div className="h-96 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg" />
});

import { BsArrowUpCircleFill } from "react-icons/bs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Head>
        <title>Portfolio Website</title>
        <meta
          name="description"
          content=" Portfolio website created with NextJS and Tailwind CSS"
        />

        <meta property="og:url" content="https://neerajbutola.netlify.app" />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:card"
          content="Portfolio website created with NextJS and Tailwind CSS"
        />
        <meta name="keywords " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      {/* Main section */}
      <main className="min-h-screen">
        {/* Nav bar */}
        <Navbar />
        {/* Nav bar */}


        <section className="   md:px-20 lg:px-2 sm:px-2 bg-gray-50 dark:bg-gray-800">
          <section className=" min-h-screen ">
            {/* Introduction card */}

            <IntroductionCard />
          </section>

          {/* FrontPage section */}


          <section>
            {/* Button to the Blog Page */}
            {/* <div className="flex justify-center mt-6">
            <Link href="/blog">
              <button className="bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600">
                Visit Blog
              </button>
            </Link>
          </div> */}
          </section>

          {/* section 2  TechStack */}
          <TechStackComponent />

          <AspirationComponent />

          {/* section 3  Acheivements */}
          <Achievements />

          {/* section 4 postfolio */}
          <PortfolioComponent />
          {/* Resume section */}
          <ResumeComponent />
          {/* github widget */}
          <section>
            <GitHubWidget />
          </section>

          {/* Contact Me  */}

          <section id="contactme">
            <ContactForm />
            <ToastContainer />
          </section>

          <div>
            {showButton && (
              <button
                onClick={scrollToTop}
                className="fixed z-50 bottom-10 right-10 p-4 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 text-transparent text-white rounded-full shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 ease-in-out" // Added transition
                aria-label="Back to Top"
              >
                <BsArrowUpCircleFill className="text-3xl" />{" "}
                {/* Use the icon */}
                <span className="sr-only">Back to Top</span>{" "}
                {/*added span tag for accessibilty*/}
              </button>
            )}
          </div>

          {/* footer  */}
          <Footer />
        </section>
      </main>
    </div>
  );
}
